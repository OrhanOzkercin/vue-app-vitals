<script setup>
import { onMounted, ref } from 'vue'
const giphyContainer = ref(null)
onMounted(() => {
  const observer = new window.IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the target element is in the viewport, load the iframe
        observer.disconnect()
        loadGiphyIframe()
      }
    })
  })

  // Target the element you want to observe
  // const giphyContainer = document.getElementById('giphy-container')

  // Start observing the element
  console.log('giphyContainer:', giphyContainer.value)
  observer.observe(giphyContainer.value)

  function loadGiphyIframe() {
    const iframe = document.createElement('iframe')
    iframe.src = 'https://giphy.com/embed/DhstvI3zZ598Nb1rFf'
    iframe.width = '100%'
    iframe.height = '100%'
    iframe.style.position = 'absolute'
    iframe.frameBorder = '0'
    iframe.className = 'giphy-embed'
    iframe.allowFullscreen = true
    giphyContainer.value.appendChild(iframe)
  }
})
</script>

<template>
  <div ref="giphyContainer" class="h-96 w-full text-center relative" id="giphy-container" />
</template>
