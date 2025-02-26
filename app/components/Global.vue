<script setup lang="ts">
import createGlobe from 'cobe'
import { useWebSocket } from '@vueuse/core'

const myLocation = useState<{
    latitude: number | null
    longitude: number | null
}>('location')

const phi = ref(0)
const globe = ref<HTMLCanvasElement | null>(null)
const locations = ref<Array<{ latitude: number; longitude: number }>>([])

// Connect to the websocket endpoint
const { data, open } = useWebSocket(
    `/visitors?latitude=${myLocation.value.latitude}&longitude=${myLocation.value.longitude}`,
    { immediate: false }
)
// When the data is received, we parse it as JSON and update the locations
watch(data, async (newData) => {
    locations.value = JSON.parse(
        typeof newData === 'string' ? newData : await newData.text()
    )
})

// When the component is mounted, we connect to the websocket endpoint
// and create the globe
onMounted(() => {
    open()
    createGlobe(globe.value, {
        devicePixelRatio: 2,
        width: 400 * 2,
        height: 400 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 0.8,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 0.1],
        glowColor: [0.2, 0.2, 0.2],
        markers: [],
        opacity: 0.7,
        onRender(state) {
            state.markers = locations.value.map((location) => ({
                location: [location.latitude, location.longitude],

                size:
                    myLocation.value.latitude === location.latitude &&
                    myLocation.value.longitude === location.longitude
                        ? 0.1
                        : 0.05
            }))

            state.phi = phi.value
            phi.value += 0.01
        }
    })
})
</script>

<template>
  <div class="app">
    <h1>Where's everyone at?</h1>
    <p>
      <b>{{ locations.length }}</b> {{ locations.length === 1 ? 'person' : 'people' }} connected.
    </p>
    <canvas ref="globe" />
    <p>
      Powered by <a href="https://cobe.vercel.app/">Cobe</a> and
      <a href="https://hub.nuxt.com/?utm_source=multiplayer-cobe">NuxtHub</a>.<br>
      Inspired by
      <a href="https://github.com/cloudflare/templates/tree/main/multiplayer-globe-template">Cloudflare's multiplayer-globe-template</a>.
    </p>
  </div>
</template>

<style scoped>
canvas {
  width: 400px;
  height: 400px;
  max-width: 100%;
  aspect-ratio: 1;
}
b {
  color: white;
}
a {
  color: #ccc;
  text-underline-offset: 3px;
  text-decoration-color: #555;
  &:hover {
    color: #ddd;
  }
}
</style>