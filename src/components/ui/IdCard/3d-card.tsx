'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useTexture, Environment, Lightformer, Text } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
// import { useControls, button } from 'leva'

import bandTxt from '@/assets/IdCard/band.png'
import { IconArrowSharpTurnRight } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { caveat } from '@/styles/fonts'
// import { Tag } from './tag'

const Tag = dynamic(() => import('@/components/ui/IdCard/tag').then(mod => mod.Tag), { ssr: false })

extend({ MeshLineGeometry, MeshLineMaterial })
useTexture.preload(bandTxt.src)

export function IdCard() {
  // const { debug, gravity } = useControls({ 
  //   debug: false,
  //   gravity: { value: -40, min: -100, max: 0, step: 1 },
  //   reset: button(() => window.location.reload())
  // })
  const gravity = -40

    const glSettings = useMemo(
    () => ({
      // toneMapping: THREE.ACESFilmicToneMapping,
      // toneMappingExposure: 1.5,
      // outputEncoding: THREE.sRGBEncoding,
      // shadowMapType: THREE.PCFSoftShadowMap,
      powerPerference: "high-performance",
      antialias: true,
      stencil: false,
      depth: true,
    }),
    []
  );

  return (
    <>
      <Canvas  
        // style={{
        //   // width: "100vw",
        //   height: "100vh",
        //   // position: "fixed",
        //   top: 0,
        //   left: 0,
        // }}
        // shadows={false}
        gl={glSettings}
        // dpr={[window.devicePixelRatio, window.devicePixelRatio]} 
        camera={{ position: [0, 0, 18], fov: 25 }} 
        className='!w-full'
      >
        <ambientLight intensity={Math.PI} />
        <Physics 
          // debug={debug}
          interpolate 
          gravity={[0, gravity, 0]} 
          timeStep={1 / 60}
        >
          <Band />
        </Physics>
        <Environment>
          <color attach="background" args={['#111']} />
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
      <p 
        className={cn(
          "absolute top-[30%] left-[42%] -translate-x-1/2 -z-1 w-fit text-lg font-bold text-neutral-300 md:text-4xl dark:text-neutral-800 flex items-center gap-4",
          caveat.className
        )}
      >
        pull my card
        <IconArrowSharpTurnRight className="shrink-0 rotate-90  origin-left size-8" />
      </p>
    </>
  )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef()
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3()
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 }
  const texture = useTexture(bandTxt.src)
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)

  const cardColor = useMemo(() => new THREE.Color(hovered ? '#ff6b6b' : '#4ecdc4'), [hovered])

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
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }

    // Add some wobble to the card when not dragged
    if (card.current && !dragged) {
      const time = state.clock.getElapsedTime()
      card.current.setNextKinematicRotation({
        x: Math.sin(time * 2) * 0.05,
        y: Math.cos(time * 1.5) * 0.05,
        z: Math.sin(time) * 0.05
      })
    }
  })

  curve.curveType = 'chordal'
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  return (
    <>
      <group position={[-4, 4, 0]}>
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
            scale={3.75}
            position={[0, -3, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}
            // cardColor={cardColor}
          />
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="#05df72" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={2} transparent opacity={0.75} />
      </mesh>
    </>
  )
}
