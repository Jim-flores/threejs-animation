import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

type Props = {
  numberLights: number
}
const Model = () => {
  const gltf = useLoader(GLTFLoader, "/paintImg2.glb");

  return <primitive object={gltf.scene} position={[0, -1, 0]} />;
};

const ThreeRender = ({numberLights = 4}:Props) => {
  return (
      <Canvas
        camera={{ position: [5, 5, 5], fov: 20 }}
        style={{ width: "50%", height: "50%", cursor: "grab" }}
      >
        {/* Luces */}
        <ambientLight intensity={1.3} />
        <directionalLight position={[5, 5, 6]} intensity={numberLights} />
        <Model />
        <OrbitControls
          enablePan={false}
          enableZoom={false} 
          maxPolarAngle={1} 
          minPolarAngle={1.5}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 8}
        />
      </Canvas>
  );
};

export default ThreeRender;
