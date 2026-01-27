import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';
import { radians } from 'three/tsl';

function LightBulbModel({ onLightToggle, isOn, onModelLoaded }) {
  // 個別のパーツをロード
  const topFbx = useLoader(FBXLoader, '/denkyu_Top.fbx');
  const bottomFbx = useLoader(FBXLoader, '/denkyu_Bottom.fbx');
  const helixFbx = useLoader(FBXLoader, '/denkyu_Helix.fbx');

  // ロード開始時刻を記録
  const [loadStartTime] = useState(() => Date.now());
  // すべてのFBXロード完了時に通知（最低2秒待つ）
  useEffect(() => {
    if (
      topFbx !== undefined && bottomFbx !== undefined && helixFbx !== undefined &&
      typeof onModelLoaded === 'function'
    ) {
      const elapsed = Date.now() - loadStartTime;
      if (elapsed < 1000) {
        setTimeout(() => {
          onModelLoaded();
        }, 1000 - elapsed);
      } else {
        onModelLoaded();
      }
    }
  }, [topFbx, bottomFbx, helixFbx, onModelLoaded, loadStartTime]);
  
  const meshRef = useRef();
  // isOnは親から受け取る

  // 各パーツのスケールを調整
  topFbx.scale.setScalar(0.3);
  bottomFbx.scale.setScalar(0.3);
  helixFbx.scale.setScalar(0.3);

  // クリック（タップ）時の処理
  const handleClick = (event) => {
    event.stopPropagation();
    if (onLightToggle) {
      onLightToggle(!isOn); // 親コンポーネントに状態を通知
    }
  };

    // モデルのマテリアルを設定
  useEffect(() => {
    const applyMaterial = (fbx, partType) => {
      if (fbx) {
        fbx.traverse((child) => {
          if (child.isMesh) {
            if (child.material) {
              const originalColor = child.material.color ? child.material.color.clone() : new THREE.Color('#ffffff');
              
              if (partType === 'glass') {
                // ガラス部分（Top）はより半透明で光の反射がある質感に
                child.material = new THREE.MeshPhysicalMaterial({
                  color: originalColor,
                  transparent: true,
                  opacity: 0.1,                    // より透明に
                  transmission: 0.9,              // 透過率をさらに上げる
                  roughness: 0.1,                  // 表面の粗さを少し上げる
                  metalness: 0.0,                  // 金属感を無くす
                  reflectivity: 0.5,               // 反射率を下げる
                  ior: 1.2,                        // 屈折率を下げる
                  side: THREE.DoubleSide,          // 両面描画を有効に
                  depthWrite: false,               // 深度バッファへの書き込みを無効に
                  emissiveIntensity: isOn ? 0.1 : 0,
                  clearcoat: 0.5,                  // クリアコートを減らす
                  clearcoatRoughness: 0.2,         // クリアコートの粗さを上げる
                  envMapIntensity: 1.0             // 環境マップの強度を適度に
                });
              } else if (partType === 'helix') {
                // ヘリックス部分（フィラメント）は発光する質感に
                child.material = new THREE.MeshStandardMaterial({
                  color: new THREE.Color('#232323'),  // 銀色の基本色
                  metalness: 0.9,
                  roughness: 0.2,
                  emissive: isOn ? '#ffcc00' : '#111111',
                  emissiveIntensity: isOn ? 2.0 : 0
                });
              } else {
                // 金属部分（Bottom）- より金属的な銀色に
                child.material = new THREE.MeshStandardMaterial({
                  color: new THREE.Color('#e8e8e8'),  // 銀色の基本色
                  metalness: 0.9,                     // より金属的に
                  roughness: 0.2,                     // より滑らかに
                  envMapIntensity: 1.2,               // 環境マップの反射を強く
                  emissive: '#000000',                // 発光なし
                });
              }
            }
          }
        });
      }
    };

    applyMaterial(topFbx, 'glass');      // トップ部分はガラス
    applyMaterial(bottomFbx, 'metal');    // ボトム部分は金属
    applyMaterial(helixFbx, 'helix');     // ヘリックス部分はフィラメント
  }, [topFbx, bottomFbx, helixFbx, isOn]);

  return (
    <group 
      position={[0, 5, 0]} 
      onClick={handleClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'} 
      onPointerOut={() => document.body.style.cursor = 'auto'}
    >
      {/* 電球のトップ部分（ガラス） */}
      <primitive ref={meshRef} object={topFbx} position={[0, 2, 0]} />
      
      {/* 電球のボトム部分（金属ベース） */}
      <primitive object={bottomFbx} position={[0, 2, 0]} />
      
      {/* 電球のヘリックス部分（フィラメント） */}
      <primitive object={helixFbx} position={[0, 2, 0]} />
      
      {/* 電球の中心部に光源を配置 - 点灯時のみ表示 */}
      {isOn && (
        <>
          {/* メインの光源 */}
          {/* <pointLight intensity={300} distance={70} decay={2} color="#ffaa00" position={[0, 8, 0]} /> */}
          
          {/* ヘリックス(フィラメント)からの光源 */}
          <pointLight intensity={1500} distance={30} decay={2.5} color="#ffcc22" position={[0, 10, 0]} />
          <pointLight intensity={150} distance={50} decay={2.5} color="#ffcc22" position={[0, 15, 0]} />
          <pointLight intensity={150} distance={50} decay={2.5} color="#ffcc22" position={[0, 10, 5]} />
          <pointLight intensity={150} distance={50} decay={2.5} color="#ffcc22" position={[0, 10, -5]} />
          <pointLight intensity={150} distance={10} decay={2.5} color="#ffcc22" position={[5, 10, 0]} />
          <pointLight intensity={150} distance={10} decay={2.5} color="#ffcc22" position={[-5, 10, 0]} />
        </>
      )}
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

function Scene3D({ onLightStateChange, onSceneLoaded }) {
  const [lightIsOn, setLightIsOn] = useState(true); // 初期状態はオン
  const lightOnTimerRef = useRef(null); // タイマーID管理
  // モデルロード完了時に点灯タイマーを開始
  const handleModelLoaded = () => {
    // 既存タイマーがあればクリア
    if (lightOnTimerRef.current) {
      clearTimeout(lightOnTimerRef.current);
    }
    lightOnTimerRef.current = setTimeout(() => {
      setLightIsOn(true);
      if (onLightStateChange) {
        onLightStateChange(true);
      }
      lightOnTimerRef.current = null;
    }, 3000);
    if (onSceneLoaded) {
      onSceneLoaded();
    }
  };
  const controlsRef = useRef();
  const lastInteractionTime = useRef(Date.now());
  const autoRotateStarted = useRef(false);
  const userInteracting = useRef(false);

  // 電球のオン/オフ状態を更新する関数
  const updateLightState = (isOn) => {
    setLightIsOn(isOn);
    if (onLightStateChange) {
      onLightStateChange(isOn);
    }
    // タップ時にタイマーリセット
    if (lightOnTimerRef.current) {
      clearTimeout(lightOnTimerRef.current);
      lightOnTimerRef.current = null;
    }
  };

  // 自動回転制御のコンポーネント
  function AutoRotateController() {
    useFrame(() => {
      if (controlsRef.current) {
        const currentTime = Date.now();
        const timeSinceLastInteraction = currentTime - lastInteractionTime.current;
        
        // 3秒（3000ms）以上操作がない場合、自動回転を開始
        if (timeSinceLastInteraction > 1000 && !userInteracting.current) {
          if (!autoRotateStarted.current) {
            controlsRef.current.autoRotate = true;
            controlsRef.current.autoRotateSpeed = 1.0; // 回転速度を上げる
            autoRotateStarted.current = true;
          }
        } else if (userInteracting.current) {
          // ユーザーが操作中の場合、自動回転を停止
          if (autoRotateStarted.current) {
            controlsRef.current.autoRotate = false;
            autoRotateStarted.current = false;
          }
        }
        
        // OrbitControlsを更新
        controlsRef.current.update();
      }
    });
    return null;
  }

  // ユーザーの操作開始を検出する関数（ドラッグ・ズームのみで一時停止）
  const handleUserInteractionStart = (event) => {
    // event.type: 'mousedown', 'touchstart', 'wheel' など
    if (event && (event.type === 'mousedown' || event.type === 'touchstart' || event.type === 'wheel')) {
      lastInteractionTime.current = Date.now();
      userInteracting.current = true;
    }
  };

  // ユーザーの操作終了を検出する関数
  const handleUserInteractionEnd = (event) => {
    if (event && (event.type === 'mouseup' || event.type === 'touchend' || event.type === 'wheel')) {
      lastInteractionTime.current = Date.now();
      userInteracting.current = false;
    }
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
        camera={{ position: [15, 15, 15], fov: 75 }}
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
        {/* 看板 */}
        {/* <mesh position={[5, 30, 0]}>
          <boxGeometry args={[1, 30, 30]}  />
          <meshStandardMaterial color="#454545" opacity={1} />
        </mesh> */}
        <Suspense fallback={<LoadingFallback />}>
          <LightBulbModel onLightToggle={updateLightState} isOn={lightIsOn} onModelLoaded={handleModelLoaded} />
        </Suspense>
        <AutoRotateController />

        <OrbitControls 
          ref={controlsRef}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.05}
          minDistance={5}
          maxDistance={300}
          target={[0, 10, 0]}
          autoRotate={false}
          autoRotateSpeed={1.0}
          onStart={handleUserInteractionStart}
          onEnd={handleUserInteractionEnd}
        />
      </Canvas>
    </div>
  );
}

export default Scene3D;
