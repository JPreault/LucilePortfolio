import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Piano(props) {
    const { nodes, materials } = useGLTF('/models/piano.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[Math.PI / 2, 0, 2.67]} scale={0.01}>
                <mesh geometry={nodes.bench.geometry} material={materials.Leather} />
                <mesh geometry={nodes.bench_1.geometry} material={materials.Glossy_Coating} />
                <mesh geometry={nodes.bench_2.geometry} material={materials.Matte_Coating} />
            </group>
            <group rotation={[Math.PI / 2, 0, 2.67]}>
                <mesh geometry={nodes.piano.geometry} material={materials.black} />
                <mesh geometry={nodes.piano_1.geometry} material={materials.white} />
                <mesh geometry={nodes.piano_2.geometry} material={materials.brown} />
            </group>
            <mesh geometry={nodes.Pièce.geometry} material={nodes.Pièce.material} rotation={[Math.PI, 0, Math.PI]} scale={[150, 1, 0.007]} />
        </group>
    )
}

useGLTF.preload('/piano.glb')