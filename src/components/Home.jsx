import React ,  {  Suspense }from 'react'
import { Canvas } from "react-three-fiber";
import Model from './Model';

const Lights = () => {
    return (
      <>
        {/* Ambient Light illuminates lights for all objects */}
        <ambientLight intensity={0.3} />
        {/* Diretion light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* Spotlight Large overhead light */}
        <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      </>
    );
  };
  
  

const Home = () => {
    return (
        <div className="home  d-flex  justify-content-center align-items-center " id="home">
        <div className="container">
          <div className="row">
          <div className="col-md-6 col-lg-6  canvas">
        <Canvas
          concurrent
          colorManagement
          camera={{ position: [0, 0, 120], fov: 70 }}>
          {/* Lights Component */}
          <Lights />
          <Suspense fallback={null}>
            <Model
              modelPath='/scene.gltf'
            secteur="title"
            mesh={[0, -100, -800]}
              >
            </Model>
          </Suspense>
        </Canvas>
        </div>
        <div className="col-md-6 col-lg-6  title ">
        <span>Meet the new </span>
              <span>shopping experience </span>
              <span>for online headphones.</span>
        </div>
        </div>
        
        </div>
        </div>
    )
}

export default Home
