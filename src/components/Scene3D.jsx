import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useRef } from 'react';

function Cube() {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={[0, 4, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial 
        color="#ffffff" 
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

function Scene3D() {
  return (
    <div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'auto'
    }}>
      <Canvas
        camera={{ position: [8, 8, 8], fov: 75 }}
        style={{ 
          width: '100%',
          height: '100%',
          background: '#262626'
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Grid 
          args={[20, 20]} 
          cellSize={1} 
          cellThickness={0.5} 
          cellColor={'#808080'} 
          sectionSize={5} 
          sectionThickness={1} 
          sectionColor={'#808080'} 
          fadeDistance={50} 
          fadeStrength={1}
          infiniteGrid={true}
        />
        <Cube />
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={30}
        />
      </Canvas>
    </div>
  );
}

export default Scene3D;
