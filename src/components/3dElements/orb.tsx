import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import * as THREE from "three";

// Forward ref to handle external access to the ref
const Orb = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models/magic_orb.glb");

  const orbRef = useRef<THREE.Group>(null); // Reference for rotation

  // Set the ref to the orb's group element
  useImperativeHandle(ref, () => orbRef.current);

  // Rotate the orb continuously
  useFrame(() => {
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.005; // Adjust speed if needed
    }
  });

  return (
    <group ref={orbRef} {...props} dispose={null}>
      <group scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Orb_Orb_material_0 as any).geometry}
          material={materials.Orb_material}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/models/magic_orb.glb");

export default Orb;
