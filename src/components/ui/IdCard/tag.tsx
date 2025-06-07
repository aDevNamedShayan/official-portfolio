'use client'

import { Html, useGLTF } from '@react-three/drei'

useGLTF.preload('/tag.glb')

export function Tag({cardColor, ...props}) {
  const { nodes, materials } = useGLTF('/tag.glb')
  return (
    <group {...props} >
      <mesh 
        // castShadow 
        // receiveShadow 
        geometry={nodes.card.geometry} 
        material={materials.base}
        // frustumCulled={false}
      >
        {/* <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} color={cardColor} /> */}
        {/* <meshStandardMaterial attach="material" color="black" /> */}
        {/* <Html
          transform
          occlude="raycast"
          // occlude="blending"
          // occlude={true}
          // occlude
          // occlusionTest
          // zIndexRange={[1, 0]}
          // rotation-x={1.25}
          position={[0, 0.3, 0.01]}
          className='bg-blue-900 flex flex-col w-76 select-none'
          // wrapperClass='will-change-[opacity] transform-gpu'
          // prepend 
          // fullscreen 
          distanceFactor={0.9}
          // center
          // scale={[10, 2.9, 3]}
          // rotation={[-0.78, -1.21, -0.745]}
          // receiveShadow
          // sprite 
        >
          <div className='w-1/3 h-8 bg-amber-500'></div>
          <div className='w-1/3 h-8 bg-amber-500'></div>
          <p>Click me</p>
          <p>Click me</p>
          <p>Click me</p>
          <iframe
            src="./website/index.html"
            title="Laptop Screen"
            onPointerDown={(e) => e.stopPropagation()}
          />
        </Html> */}
      </mesh>
      <mesh 
        // castShadow 
        // receiveShadow 
        geometry={nodes.clip.geometry} 
        material={materials.metal} 
        material-roughness={0.3} 
      />
      <mesh 
        // castShadow 
        // receiveShadow 
        geometry={nodes.clamp.geometry} 
        material={materials.metal} 
      />
    </group>
  )
}

