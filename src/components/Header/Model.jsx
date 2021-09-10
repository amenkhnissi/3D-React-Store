import React , {useRef} from 'react'
import {  useFrame } from "react-three-fiber";
import {   useGLTFLoader  } from "drei";

// Load Model
export const  LoadModel = ({ url }) => {
    const gltf =  useGLTFLoader(url, true);
    return <primitive object={gltf.scene} dispose={null} />;
  }



const Model = ({
    modelPath,
    mesh
  }) => {
    const ref = useRef();
    useFrame(() => (ref.current.rotation.y += 0.01));
   
    return (
      <>
          <mesh ref={ref} position={mesh}>
            <LoadModel url={modelPath} />
          </mesh>
          
     </>
    );
  };

export default Model
