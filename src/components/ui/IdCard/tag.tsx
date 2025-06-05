'use client'

import { Html, useGLTF } from '@react-three/drei'

useGLTF.preload('/tag.glb')

export function Tag({cardColor, ...props}) {
  const { nodes, materials } = useGLTF('/tag.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.card.geometry} material={materials.base}>
        {/* <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} color={cardColor} /> */}
        <meshStandardMaterial attach="material" color="black" />
        <Html
          transform
          occlude="raycast"
          // occlusionTest
          // rotation-x={1.25}
          position={[0, 0.4, 0.01]}
          className='bg-yellow-900 flex flex-col w-66 pointer-events-none'
          // wrapperClass='w-full bg-red-900'
          // prepend 
          // fullscreen 
          distanceFactor={1}
          // receiveShadow
          // sprite 
        >
          {/* <div className='w-1/3 h-8 bg-amber-500'>

          </div> */}
          <button className='pointer-events-none' onClick={() => alert('Btn1 Clicked')}>Click me</button>
          <button onClick={() => alert('Btn2 Clicked')}>Click me</button>
          <button onClick={() => alert('Btn3 Clicked')}>Click me</button>
        </Html>
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
      <mesh castShadow receiveShadow geometry={nodes.clamp.geometry} material={materials.metal} />
    </group>
  )
}

