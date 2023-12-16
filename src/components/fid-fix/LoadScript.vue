<script setup>
import { onMounted } from 'vue'
import { loadScript } from 'vue-plugin-load-script'

onMounted(() => {
  setTimeout(() => {
    loadGoogleTags()
  }, 1500)
})
function loadGoogleTags() {
  loadScript('https://securepubads.g.doubleclick.net/tag/js/gpt.js')
    .then(() => {
      window.googletag = window.googletag || { cmd: [] }
      window.googletag.cmd.push(function () {
        // Define a responsive ad slot.
        // [START responsive_ad]
        var responsiveAdSlot = window.googletag
          .defineSlot(
            '/6355419/Travel/Europe',
            [
              [300, 250],
              [728, 90],
              [750, 200]
            ],
            'responsive-ad'
          )
          .addService(window.googletag.pubads())

        var mapping = window.googletag
          .sizeMapping()
          .addSize(
            [1024, 768],
            [
              [750, 200],
              [728, 90]
            ]
          )
          .addSize([640, 480], [300, 250])
          .build()

        responsiveAdSlot.defineSizeMapping(mapping)
        // [END responsive_ad]

        // Enable SRA and services.
        window.googletag.pubads().enableSingleRequest()
        window.googletag.enableServices()
      })

      window.googletag.cmd.push(function () {
        window.googletag.display('responsive-ad')
      })
    })
    .catch(() => {
      // Failed to fetch script
    })
}
</script>
