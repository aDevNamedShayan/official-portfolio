// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

'use client'

import { useGLTF } from '@react-three/drei'

// useGLTF.preload('/IdCard/tag.glb')

export function Tag({ ...props }) {
    const { nodes, materials } = useGLTF('/IdCard/tag.glb')
    return (
        <group {...props}>
            <mesh geometry={nodes.card.geometry} material={materials.base} />
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
        </group>
    )
}
