'use client'

import { useGLTF } from '@react-three/drei'
import type { ThreeElements } from '@react-three/fiber'

// useGLTF.preload('/IdCard/tag.glb')

export function Tag({ ...props }: ThreeElements['group']) {
    const { meshes, materials } = useGLTF('/IdCard/tag.glb')
    return (
        <group {...props}>
            <mesh geometry={meshes.card.geometry} material={materials.base} />
            <mesh geometry={meshes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={meshes.clamp.geometry} material={materials.metal} />
        </group>
    )
}
