// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import { Environment, Lightformer, PerformanceMonitor, useTexture } from '@react-three/drei'
import { Canvas, extend, GLProps, type ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import {
    BallCollider,
    CuboidCollider,
    Physics,
    RigidBody,
    useRopeJoint,
    useSphericalJoint,
    type RapierRigidBody,
    type RigidBodyProps
} from '@react-three/rapier'
import { IconArrowSharpTurnRight } from '@tabler/icons-react'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { CatmullRomCurve3, type Mesh, RepeatWrapping, Vector3 } from 'three'

import { useLocaleDetector } from '@/hooks/useLocaleDetector'
import { cn } from '@/lib/utils'
import { caveat, harmattan } from '@/styles/fonts'

import bandTxt from '@/../public/IdCard/band.png'

const Tag = dynamic(() => import('@/components/ui/IdCard/tag').then((mod) => mod.Tag), { ssr: false })

extend({ MeshLineGeometry, MeshLineMaterial })
// useTexture.preload(bandTxt.src)

export function IdCard() {
    const [dpr, setDpr] = useState(1)

    const t = useTranslations('ContactSection')
    const isEn = useLocaleDetector()
    const glSettings: GLProps = useMemo(
        () => ({
            powerPreference: 'high-performance',
            alpha: true,
            antialias: true,
            stencil: false,
            depth: true
        }),
        []
    )

    return (
        <>
            <Canvas
                gl={glSettings}
                dpr={dpr}
                camera={{ position: [0, 0, 18], fov: 25 }}
                className='!h-screen min-h-150 !w-full touch-pan-down'
                frameloop='always'
            >
                <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)}>
                    <ambientLight intensity={Math.PI} />
                    <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
                        <Band />
                    </Physics>
                    <Environment>
                        <Lightformer
                            intensity={10}
                            color='white'
                            position={[-10, 0, 14]}
                            rotation={[0, Math.PI / 2, Math.PI / 3]}
                            scale={[100, 10, 1]}
                        />
                    </Environment>
                </PerformanceMonitor>
            </Canvas>
            <p
                className={cn(
                    'pointer-events-none absolute top-[10%] right-[5%] -z-1 flex w-fit items-center gap-4 text-xl font-bold text-neutral-300 [direction:ltr] lg:top-[30%] lg:right-auto lg:left-[35%] lg:text-4xl dark:text-neutral-800',
                    {
                        [caveat.className]: isEn,
                        [harmattan.className]: !isEn
                    }
                )}
            >
                {t('hint')}
                <IconArrowSharpTurnRight className='size-8 shrink-0 origin-left rotate-90' />
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
    const segmentProps: RigidBodyProps = {
        type: 'dynamic',
        canSleep: true,
        colliders: false,
        angularDamping: 2,
        linearDamping: 2
    }
    const { width, height } = useThree((state) => state.size)
    const [dragged, setDragged] = useState<Vector3 | boolean>(false)
    const curve = useMemo(() => {
        const c = new CatmullRomCurve3([new Vector3(), new Vector3(), new Vector3(), new Vector3()])
        c.curveType = 'chordal'
        return c
    }, [])
    const [hovered, setHovered] = useState(false)

    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])
    useSphericalJoint(j3, card, [
        [0, 0, 0],
        [0, 1.45, 0]
    ])

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? 'grabbing' : 'grab'
            return () => void (document.body.style.cursor = 'auto')
        }
    }, [hovered, dragged])

    useFrame((state, delta) => {
        const safeDelta = Math.min(delta, 0.05)

        if (dragged instanceof Vector3) {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
            dir.copy(vec).sub(state.camera.position).normalize()
            vec.add(dir.multiplyScalar(state.camera.position.length()))
            ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z
            })
        }

        if (fixed.current && j1.current && j2.current && j3.current && card.current) {
            const tFixed = fixed.current.translation()
            const tJ3 = j3.current.translation()

            ;[j1, j2].forEach((ref) => {
                const t = ref.current?.translation()
                if (!t || !Number.isFinite(t.x)) return
                if (!ref.current.lerped || !Number.isFinite(ref.current.lerped.x)) {
                    ref.current.lerped = new Vector3(t.x, t.y, t.z)
                }
                const dist = ref.current.lerped.distanceTo(t)
                const clampedDistance = Math.max(0.1, Math.min(1, Number.isFinite(dist) ? dist : 0.1))
                const alpha = Math.min(1, Math.max(0, safeDelta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))))
                ref.current.lerped.lerp(t, alpha)
            })

            if (Number.isFinite(tJ3.x) && Number.isFinite(tFixed.x) && j1.current.lerped && j2.current.lerped) {
                curve.points[0].copy(tJ3)
                curve.points[1].copy(j2.current.lerped)
                curve.points[2].copy(j1.current.lerped)
                curve.points[3].copy(tFixed)
                const points = curve.getPoints(32)
                const isValid = points.every(
                    (p) => Number.isFinite(p.x) && Number.isFinite(p.y) && Number.isFinite(p.z)
                )
                if (isValid) {
                    band.current?.geometry?.setPoints(points)
                }
            }

            const currentAngvel = card.current.angvel()
            const currentRotation = card.current.rotation()
            if (currentAngvel && currentRotation) {
                ang.copy(currentAngvel)
                rot.copy(currentRotation)
                card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.1, z: ang.z }, true)
            }
        }
    })

    useMemo(() => {
        texture.wrapS = texture.wrapT = RepeatWrapping
    }, [texture])

    const screenWidth = window.innerWidth
    const isLarge = screenWidth >= 1024

    const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
        e.target?.releasePointerCapture(e.pointerId)
        setDragged(false)
    }

    const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
        e.target?.setPointerCapture(e.pointerId)
        setDragged(new Vector3().copy(e.point).sub(vec.copy(card.current?.translation())))
    }

    return (
        <>
            <group position={isLarge ? [-3.5, 4, 0] : [0, 4, 0]}>
                <RigidBody ref={fixed} {...segmentProps} type='fixed' />
                <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
                    <BallCollider args={[0.1]} />
                </RigidBody>
                <RigidBody
                    position={[2, 0, 0]}
                    ref={card}
                    {...segmentProps}
                    type={dragged ? 'kinematicPosition' : 'dynamic'}
                >
                    <CuboidCollider args={[0.8, 1.125, 0.01]} />
                    <Tag
                        scale={isLarge ? 3.75 : 2.5}
                        position={isLarge ? [0, -3, -0.05] : [0, -1.5, -0.05]}
                        onPointerOver={() => setHovered(true)}
                        onPointerOut={() => setHovered(false)}
                        onPointerUp={handlePointerUp}
                        onPointerDown={handlePointerDown}
                    />
                </RigidBody>
            </group>
            <mesh ref={band}>
                <meshLineGeometry />
                <meshLineMaterial
                    color='#05df72'
                    depthTest={false}
                    resolution={[width, height]}
                    useMap
                    map={texture}
                    repeat={[-3, 1]}
                    lineWidth={isLarge ? 2 : 1.25}
                    transparent
                    opacity={0.75}
                />
            </mesh>
        </>
    )
}
