<template>
  <div class="  flex justify-center ">
    <canvas ref="experience" class="max-w-full  " />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { TextureLoader, Color, Fog, Mesh, MeshPhysicalMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

// set up
const scene = new Scene()
const experience:Ref<HTMLCanvasElement | null> = ref(null)
const textureLoad = new TextureLoader()
textureLoad.load('gridbg.png', function (texture) {
  scene.background = texture
})

// camera
const aspectRatio = computed(() => (width.value) / (height.value))
const { width, height } = useWindowSize()
const camera = new PerspectiveCamera(75, aspectRatio.value, 0.1, 2000)
camera.position.set(0, 0, 2)

// Geometry/ Material
const glassMaterial = new MeshPhysicalMaterial({
  color: 0xFF5F1F,
  metalness: 0.10,
  roughness: 0.1,
  transparent: true,
  opacity: 0.8,
  reflectivity: 0.2,
  transmission: 0.8,
  visible: true,
  emissive: new Color(0xEFFD23),
  emissiveIntensity: 0.7,
  thickness: 0.2
})

const { load } = useGltfModel()

const { scene: model } = await load('/harrsoftLogo.gltf') as THREE.Group | any

model.traverse((node:Mesh) => {
  if (node) {
    node.material = glassMaterial
  }
})

model.rotation.x = Math.PI / 2
model.scale.set(10, 10, 10)
model.position.set(0, 0, -1.2)

// scene setup
scene.add(camera)
scene.add(model)
const fogColor = new Color('rgb(245, 245, 244)')
scene.fog = new Fog(fogColor, 0.1, 75)

// handle renderer updates and animations
let renderer: WebGLRenderer
function setRenderer () {
  renderer.setSize(width.value, height.value)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.render(scene, camera)
}

watch(aspectRatio, () => {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
  setRenderer()
})

onMounted(() => {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value, alpha: true })
  }

  setRenderer()
  animate()
})

// animation
const animate = () => {
  model.rotation.y -= 0.009
  model.rotation.x -= 0.009
  model.rotation.z -= 0.009

  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

</script>

<style>

</style>
