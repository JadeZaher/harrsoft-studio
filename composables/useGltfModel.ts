
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

type getGLTF = {
      loaderFunction: { load: (url: string) => Promise<THREE.Group | unknown> }
};

export function useGltfModel ():getGLTF['loaderFunction'] {
  const gltfLoader = new GLTFLoader()

  function load (url:string) {
    return new Promise((resolve, reject) => {
      gltfLoader.load(url, resolve, undefined, reject)
    })
  }

  return {
    load
  }
}
