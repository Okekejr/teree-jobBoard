import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Forward ref to handle external access to the ref
const Orb = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/models/magic_orb.glb");

  const orbRef = useRef<THREE.Group>(null); // Reference for rotation

  // Set the ref to the orb's group element
  useImperativeHandle(ref, () => orbRef.current, [orbRef.current]);

  // Rotate the orb continuously
  useFrame(() => {
    if (orbRef.current) {
      orbRef.current.rotation.y += 0.005; // Adjust speed if needed
    }
  });

  useGSAP(() => {
    if (!orbRef.current) return;

    gsap.set(orbRef.current.position, { x: 11.5, y: -3.3, z: 2.5 });

    gsap.to(orbRef.current.scale, {
      x: 1.3,
      y: 1.3,
      z: 1.3,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
        toggleActions: "play reverse play reverse",
        scrub: true,
      },
    });

    gsap.to(orbRef.current.position, {
      x: -11.5,
      y: -8.1,
      z: 2.5,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".why",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    materials.Orb_material.transparent = true;

    gsap.to([materials.Orb_material], {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".companies",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        markers: true,
        onLeave: () => {
          materials.Orb_material.opacity = 0;
        },
      },
    });

    gsap.to([orbRef.current.position, materials.Orb_material], {
      x: 1,
      y: 1,
      z: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".scroll",
        start: "top bottom",
        end: "top center",
        scrub: true,
        markers: true,
        onEnterBack: () => {
          materials.Orb_material.opacity = 0;
        },
      },
    });

    gsap.to(orbRef.current.scale, {
      x: 2,
      y: 2,
      z: 2,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".scroll",
        start: "top center",
        toggleActions: "play reverse play reverse",
        scrub: true,
      },
    });
  }, [orbRef.current]);

  console.log(orbRef.current?.position, orbRef.current?.scale);

  return (
    <group ref={orbRef} {...props} dispose={null}>
      <group scale={0.05}>
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
