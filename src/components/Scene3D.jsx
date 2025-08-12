import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

function LightBulbModel({ onLightToggle }) {
  const fbx = useLoader(FBXLoader, '/denki.FBX');
  const meshRef = useRef();
  const [isOn, setIsOn] = useState(true); // 電球の状態を管理するstate

  // 電球モデルのスケールと位置を調整
  fbx.scale.setScalar(0.3); // FBXファイルのサイズに応じて調整
  fbx.position.set(0, 2, 0);

  // クリック（タップ）時の処理
  const handleClick = (event) => {
    event.stopPropagation(); // イベントの伝播を停止
    const newState = !isOn;
    setIsOn(newState); // 状態を反転
    if (onLightToggle) {
      onLightToggle(newState); // 親コンポーネントに状態を通知
    }
  };

  // モデルのマテリアルを透明にして発光効果を追加
  useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if (child.isMesh) {
          // 電球のガラス部分を透明にする
          if (child.material) {
            // 既存のマテリアルの色を保持
            const originalColor = child.material.color ? child.material.color.clone() : new THREE.Color('#ffffff');
            
            child.material = new THREE.MeshPhysicalMaterial({
              color: originalColor,
              transparent: true,
              opacity: 0.6, // 不透明度を上げて見やすくする
              transmission: 0.7, // 透過性を少し下げる
              roughness: 0.2, // 粗さを少し上げて光を受けやすくする
              metalness: 0.1,
              emissive: isOn ? '#ffaa00' : '#333333', // 点灯状態によって発光色を変更
              emissiveIntensity: isOn ? 0.3 : 0, // 点灯状態によって発光強度を変更
              clearcoat: 1.0, // クリアコートを追加してガラス感を演出
              clearcoatRoughness: 0.1
            });
          }
        }
      });
    }
  }, [fbx, isOn]); // isOnが変更されたときにも再実行

  return (
    <group 
      position={[0, 20, 0]} 
      onClick={handleClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'} 
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
      <primitive ref={meshRef} object={fbx} />
      {/* 電球の中心部に光源を配置 - 点灯時のみ表示 */}
      {isOn && (
        <pointLight intensity={400} distance={70} decay={2} color="#ffaa00" position={[0, 8, 0]} />
      )}
      {/* フィラメント効果用の追加光源 - 点灯時のみ表示 */}
      <mesh position={[0, 3, 0]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshBasicMaterial color={isOn ? "#ffaa00" : "#333333"} transparent opacity={isOn ? 0.9 : 0.5} />
      </mesh>
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh position={[0, 4, 0]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#666666" wireframe />
    </mesh>
  );
}

function Scene3D() {
  const [lightIsOn, setLightIsOn] = useState(true); // シーン全体で電球の状態を管理

  // 電球のオン/オフ状態を更新する関数
  const updateLightState = (isOn) => {
    setLightIsOn(isOn);
  };

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
        camera={{ position: [15, 30, 15], fov: 75 }}
        style={{ 
          width: '100%',
          height: '100%',
          background: lightIsOn ? '#262626' : '#171717' // 背景色も少し暗くする
        }}
      >
        {/* 電球の状態に応じて環境光の強度を変更 */}
        <ambientLight intensity={lightIsOn ? 7 : 4} />
        
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
        {/* 床面 */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
          <planeGeometry args={[300, 300]} />
          <meshStandardMaterial color="#262626" />
        </mesh>
        {/* 壁 - 前 */}
        <mesh position={[0, 150, 150]}>
          <boxGeometry args={[300, 300, 1]} />
          <meshStandardMaterial color="#262626" />
        </mesh>
        {/* 壁 - 奥 */}
        <mesh position={[0, 150, -150]}>
          <boxGeometry args={[300, 300, 1]} />
          <meshStandardMaterial color="#262626" />
        </mesh>
        {/* 壁 - 右 */}
        <mesh position={[150, 150, 0]}>
          <boxGeometry args={[1, 300, 300]} />
          <meshStandardMaterial color="#262626" />
        </mesh>
        {/* 壁 - 左 */}
        <mesh position={[-150, 150, 0]}>
          <boxGeometry args={[1, 300, 300]} />
          <meshStandardMaterial color="#262626" />
        </mesh>
        {/* 天井 */}
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 300, 0]}>
          <planeGeometry args={[300, 300]} />
          <meshStandardMaterial color="#262626" />
        </mesh>
        <Suspense fallback={<LoadingFallback />}>
          <LightBulbModel onLightToggle={updateLightState} />
        </Suspense>
        {/* 光の効果を確認するためのキューブ
        <mesh position={[0, 0, 30]}>
          <boxGeometry args={[60, 60, 2]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <mesh position={[-7, 2, 0]}>
          <boxGeometry args={[2, 60, 2]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>
        <mesh position={[10, 2, 0]}>
          <boxGeometry args={[2, 60, 2]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh> */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={300}
          target={[0, 25, 0]}
        />
      </Canvas>
    </div>
  );
}

export default Scene3D;
