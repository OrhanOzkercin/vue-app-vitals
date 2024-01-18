<script setup>
import { AdvancedImage, responsive } from '@cloudinary/vue'
import { Cloudinary } from '@cloudinary/url-gen'
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dsganvb42'
  }
})
const plugins = [responsive({ steps: [400, 767, 1000, 1400] })] // Change LCP Responsive: Add responsive feature to images

const portfolioImages = []
for (let index = 0; index < 4; index++) {
  portfolioImages.push(cld.image('cta-' + (index + 1)).format('webp'))
}
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <h1
        class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"
      >
        Our Portfolio
      </h1>

      <div class="cont grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
        <div class="relative flex items-end overflow-hidden bg-cover rounded-lg h-96">
          <AdvancedImage
            :plugins="plugins"
            :cldImg="portfolioImages[0]"
            class="w-full h-full absolute object-cover"
            alt=""
          />
          <div
            class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"
          >
            <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Best website collections
            </h2>
            <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
              Website
            </p>
          </div>
        </div>

        <div class="relative flex items-end overflow-hidden bg-cover rounded-lg h-96">
          <AdvancedImage
            :plugins="plugins"
            :cldImg="portfolioImages[1]"
            class="w-full h-full absolute object-cover"
            alt=""
          />
          <div
            class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"
          >
            <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Block of Ui kit collections
            </h2>
            <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
              Ui kit
            </p>
          </div>
        </div>

        <div class="relative flex items-end overflow-hidden bg-cover rounded-lg h-96">
          <AdvancedImage
            :plugins="plugins"
            :cldImg="portfolioImages[2]"
            class="w-full h-full absolute object-cover"
            alt=""
          />
          <div
            class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"
          >
            <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Ton’s of mobile mockup
            </h2>
            <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
              Mockups
            </p>
          </div>
        </div>

        <div class="relative flex items-end overflow-hidden bg-cover rounded-lg h-96">
          <AdvancedImage
            :plugins="plugins"
            :cldImg="portfolioImages[3]"
            class="w-full h-full absolute object-cover"
            alt=""
          />
          <div
            class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60"
          >
            <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
              Huge collection of animation
            </h2>
            <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
              Animation
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
