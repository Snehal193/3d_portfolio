import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect, useState } from 'react'

const Computers = ({isMobile}) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  const computer = useGLTF("./la_casa_de_la_luna/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='blue' />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.1 : 1.5}
        position={isMobile ? [0, -2.5, 0.5] : [0, -1, -0.2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const CastleCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1,2]}
      camera={{position:[20,3,5], fov:25}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}></OrbitControls>
        <Computers isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}

export default CastleCanvas