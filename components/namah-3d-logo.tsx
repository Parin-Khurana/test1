"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Center, OrbitControls, Environment } from "@react-three/drei"
import type { Group } from "three"

// This component loads and rotates a 3D model
function RotatingModel() {
  const groupRef = useRef<Group>(null)

  // Load the duck model as a placeholder
  // You can replace this with your actual logo model
  const { scene } = useGLTF("/assets/3d/duck.glb")

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate continuously
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <Center>
      <group ref={groupRef} scale={2}>
        <primitive object={scene} />
      </group>
    </Center>
  )
}

export default function Namah3DLogo() {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <RotatingModel />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}

