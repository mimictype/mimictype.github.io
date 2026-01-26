const worksData = [
  {
    id: 'creators-wanted',
    title: 'Adultopia 大人國 クリエイター募集サイト',
    description: '台湾開催の大型イベント向けに、クリエイター募集のための多言語対応Web応募フォームを開発。Googleフォーム・GAS連携によるファイルアップロードでバックエンドなどを省略し、動的なバリデーション、ユーザー体験を重視したUI設計を実装。',
    technologies: ['React', 'TypeScript', 'styled-components', 'Google Apps Script', 'Google Forms', 'i18next'],
    icon: 'achievement-icon-website'
  },
  {
    id: 'haku-gashi-tw',
    title: '柏 菓子 | Haku Gashi の公式サイト',
    description: '台中市にある期間限定の聖代刨冰（かき氷）店の公式サイト',
    technologies: ['React', 'TypeScript', 'CSS'],
    icon: 'achievement-icon-website'
  },
  {
    id: 'event-mock',
    title: 'イベント出展用体験型モック',
    description: '森の中で動物を探して観察する疑似体験システムを開発。6軸（加速度・角速度）センサーを活用し、体験者の回転に応じて音声と映像を切り替えるデバイスを実装。',
    technologies: ['C/C++', 'Unity（C#）', 'Arduino', 'UDP通信'],
    icon: 'achievement-icon-binoculars'
  },
  {
    id: 'steering-app',
    title: 'ステアリング操作感検証用アプリ',
    description: '自動車部品メーカー向けに、他社製ハードウェアと通信し、GUIを制御するアプリを開発。操作感検証に特化した設計で、安定した動作環境を実現。',
    technologies: ['Unity（C#）', 'UDP通信'],
    icon: 'achievement-icon-steering'
  },
  {
    id: 'car-space-system',
    title: 'イベント向け自動車の空間利用検証システム',
    description: '自動車内のLED・モーター・ディスプレイ・音声を連動制御する演出システムを開発。イベント当日はオンサイトサポートを行い、スムーズな運営を支援。',
    technologies: ['Max/MSP', 'Node.js', 'C/C++', 'MQTT', 'Raspberry Pi', 'OBS'],
    icon: 'achievement-icon-car'
  },
  {
    id: 'vr-haptic',
    title: 'VR触覚デバイス＆サンプルアプリ',
    description: 'メタバース上の操作に触覚を付与するデバイス制御とサンプルアプリを開発。オブジェクトごとに異なる触覚表現を提案・採用し、没入感の高い体験を提供。',
    technologies: ['Unity（C#）', 'Arduino', 'LeapMotion', 'Bluetooth通信'],
    icon: 'achievement-icon-vr'
  },
  {
    id: 'walking-device',
    title: '歩行検出デバイス',
    description: '6軸（加速度・角速度）センサーを活用し、精度の高い歩数計測アルゴリズムと可視化アプリを開発。歩行の量的定義による誤検出抑制が高く評価された。',
    technologies: ['C/C++', 'Unity（C#）', 'Bluetooth通信'],
    icon: 'achievement-icon-walking'
  },
  {
    id: 'sensor-system',
    title: 'センサーデータ記録システム',
    description: '6軸（加速度・角速度）センサーデータを取得・保存するPCアプリとマイコン制御プログラムを開発。複数デバイスの同時接続・自動転送機能を提案・実装し、操作性を向上。',
    technologies: ['C/C++', 'Unity（C#）', 'Arduino', 'Bluetooth通信'],
    icon: 'achievement-icon-sensor'
  }
];

export default worksData;
