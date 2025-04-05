"use client"

import React from "react"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, Center, OrbitControls, Environment } from "@react-three/drei"
import type { Group } from "three"

// This component creates and rotates 3D text
function RotatingLogo() {
  const groupRef = useRef<Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotate continuously
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <Center>
      <group ref={groupRef}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={1.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          NAMAH
          <meshStandardMaterial color="#4285F4" />
        </Text3D>
        <Text3D
          position={[0, -1.8, 0]}
          font="/fonts/Inter_Bold.json"
          size={0.8}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={3}
        >
          MUN
          <meshStandardMaterial color="#DB4437" />
        </Text3D>
      </group>
    </Center>
  )
}

// Fallback component in case 3D rendering fails
function FallbackLogo() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary/10 rounded-xl">
      <h2 className="text-4xl font-bold text-primary">NAMAH MUN</h2>
    </div>
  )
}

export default function Namah3DLogo() {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ErrorBoundary fallback={<FallbackLogo />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <RotatingLogo />
          <Environment preset="city" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

