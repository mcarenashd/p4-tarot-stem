import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial} from "@react-three/drei";
import './CrystalBall.css'

function CrystalBallScene() {
  const meshRef = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y +=
        (pointer.x * Math.PI - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x +=
        (pointer.y * Math.PI * 0.3 - meshRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <>
      {/* Grupo que contiene bola + efecto interno */}
      <group ref={meshRef} scale={[2.2, 2.2, 2.2]} position={[0, 0.5, 0]}>
        {/* Bola de cristal */}
        <mesh>
          <sphereGeometry args={[1, 89, 89]} />
          <MeshTransmissionMaterial
            roughness={0}
            thickness={2}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.02}
            anisotropy={0.1}
            distortion={0.2}
            distortionScale={0.5}
            temporalDistortion={0.2}
          />
        </mesh>

        {/* Objeto interno visible */}
        <mesh position={[0, 0, 0]}>
          <torusKnotGeometry args={[0.6, 0.1, 100, 6]} />
          <meshStandardMaterial color="blue" emissive="grey" />
        </mesh>

        {/* Neblina mística */}
        <mesh>
          <sphereGeometry args={[0.6, 64, 64]} />
          <meshBasicMaterial
            color="#ffff"
            transparent
            opacity={0.1}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* BASE CILÍNDRICA CON MATERIAL FÍSICO */}
      <mesh castShadow receiveShadow position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.5, 64]} />
        <meshPhysicalMaterial
          color="#FFD700"
          metalness={1}
          roughness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* BASE CÓNICA INFERIOR */}
      <mesh castShadow receiveShadow position={[0, -2, 0]}>
        <coneGeometry args={[1, 0.5, 64]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.4}
          clearcoat={0.8}
        />
      </mesh>

      {/* SUELO */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.3} />
      </mesh>
    </>
  );
}

function CrystalBall() {
  return (
    <Canvas
      shadows
      style={{ height: "90%", width: "90%" }}
      camera={{ position: [0, 0, 7], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="warehouse" backgroundBlurriness={1} />
      <CrystalBallScene />
    </Canvas>
  );
}
export default CrystalBall
