import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

interface Props {
  imgUrl: string;
}

const Ball: React.FC<Props> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const geometry = useMemo(() => new THREE.DodecahedronGeometry(1, 2), []);

  return (
    <Float speed={2} rotationIntensity={3} floatIntensity={4}>
      <>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={2.5} geometry={geometry}>
          <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1.3}
            map={decal}
            flatShading
          />
        </mesh>
      </>
    </Float>
  );
};

const BallCanvas: React.FC<Props> = ({ imgUrl }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={imgUrl} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
