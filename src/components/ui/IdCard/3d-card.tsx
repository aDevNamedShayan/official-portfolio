// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Mesh, Vector3, CatmullRomCurve3, RepeatWrapping } from 'three'
import { Canvas, extend, useThree, useFrame, ThreeEvent } from '@react-three/fiber'
import { useTexture, Environment, Lightformer, PerformanceMonitor } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, RigidBodyProps, useRopeJoint, useSphericalJoint, RapierRigidBody } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { IconArrowSharpTurnRight } from '@tabler/icons-react'
import { useLocaleDetector } from '@/hooks/useLocaleDetector'
import { caveat, harmattan } from '@/styles/fonts'
import { cn } from '@/lib/utils'

import bandTxt from '@/../public/IdCard/band.png'

const Tag = dynamic(() => import('@/components/ui/IdCard/tag').then(mod => mod.Tag), { ssr: false })

extend({ MeshLineGeometry, MeshLineMaterial })
// useTexture.preload(bandTxt.src)

export function IdCard() {
  const [dpr, setDpr] = useState(1)

  const t = useTranslations('ContactSection')
  const isEn = useLocaleDetector()
  const glSettings = useMemo(() => ({
    powerPerference: "high-performance",
    alpha: true,
    antialias: true,
    stencil: false,
    depth: true,
  }), []) 

  return (
    <>
      <Canvas  
        gl={glSettings}
        dpr={dpr}
        camera={{ position: [0, 0, 18], fov: 25 }} 
        className='!w-full !h-screen min-h-150 touch-pan-down'
        frameloop='always'
      >
        <PerformanceMonitor onIncline={() => setDpr(1.5)} onDecline={() => setDpr(1)}>
          <ambientLight intensity={Math.PI} />
          <Physics 
            interpolate 
            gravity={[0, -40, 0]} 
            timeStep={1 / 60}
          >
            <Band />
          </Physics>
          <Environment>
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </PerformanceMonitor>
      </Canvas>
      <p 
        className={cn(
          "absolute top-[10%] lg:top-[30%] right-[5%] lg:right-auto lg:left-[35%] -z-1 w-fit font-bold text-neutral-300 text-xl lg:text-4xl dark:text-neutral-800 flex items-center gap-4 pointer-events-none [direction:ltr]",
          { 
            [caveat.className] : isEn,
            [harmattan.className] : !isEn
          }
        )}
      >
        {t('hint')}
        <IconArrowSharpTurnRight className="shrink-0 rotate-90 origin-left size-8" />
      </p>
    </>
  )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const texture = useTexture(bandTxt.src)
  const band = useRef<Mesh>(null)
  const fixed = useRef<RapierRigidBody>(null)
  const j1 = useRef<RapierRigidBody>(null)
  const j2 = useRef<RapierRigidBody>(null)
  const j3 = useRef<RapierRigidBody>(null)
  const card = useRef<RapierRigidBody>(null)
  const vec = useMemo(() => new Vector3(), [])
  const ang = useMemo(() => new Vector3(), [])
  const rot = useMemo(() => new Vector3(), [])
  const dir = useMemo(() => new Vector3(), [])
  const segmentProps: RigidBodyProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 }
  const { width, height } = useThree((state) => state.size)
  const [dragged, drag] = useState<Vector3 | boolean>(false)
  const curve = useMemo(() => {
    const c = new CatmullRomCurve3([new Vector3(), new Vector3(), new Vector3(), new Vector3()])
    c.curveType = 'chordal'
    return c
  }, [])
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }
    if (fixed.current) {
      ;[j1, j2].forEach((ref) => {
        if (!ref.current?.lerped) ref.current.lerped = new Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current?.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })
      curve.points[0].copy(j3.current?.translation())
      curve.points[1].copy(j2.current?.lerped)
      curve.points[2].copy(j1.current?.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current?.geometry?.setPoints(curve.getPoints(32))
      ang.copy(card.current?.angvel())
      rot.copy(card.current?.rotation())
      card.current?.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.1, z: ang.z }, true)
    }
  })

  useMemo(() => {
    texture.wrapS = texture.wrapT = RepeatWrapping
  }, [texture])

  const screenWidth = window.innerWidth
  const isLarge = screenWidth >= 1024


  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => (e.target?.releasePointerCapture(e.pointerId), drag(false))
  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => (
    e.target?.setPointerCapture(e.pointerId), 
    drag(new Vector3().copy(e.point).sub(vec.copy(card.current?.translation())))
  )
  
  return (
    <>
      <group position={isLarge ? [ -3.5, 4, 0 ] : [ 0, 4, 0 ]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <Tag
            scale={isLarge ? 3.75 : 2.5}
            position={isLarge ? [0, -3, -0.05] : [0, -1.5, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={handlePointerUp}
            onPointerDown={handlePointerDown}
          />
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="#05df72" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={isLarge ? 2 : 1.25} transparent opacity={0.75} />
      </mesh>
    </>
  )
}
