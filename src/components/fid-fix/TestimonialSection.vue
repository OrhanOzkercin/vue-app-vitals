<script setup>
import { AdvancedImage, responsive, lazyload } from '@cloudinary/vue'
import { Cloudinary } from '@cloudinary/url-gen'
import { onMounted } from 'vue'
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dsganvb42'
  }
})
const plugins = [lazyload(), responsive({ steps: [400, 767, 1000, 1400] })]

const testimonialImages = []
for (let index = 0; index < 4; index++) {
  testimonialImages.push(cld.image('person-' + (index + 1)).format('webp'))
}
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <iframe
      class="mx-auto w-full h-80 max-h-fit lg:w-[1280px] lg:h-[730px]  px-2 max-w-full"
      src="https://www.youtube.com/embed/F0NYT7DIlDQ"
      srcdoc='<style>
      .relative {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
      }
      .relative::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
      .relative {
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
      .yt-btn {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 68px;
        height: 48px;
        margin-left: -34px;
        margin-top: -24px;
        -webkit-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
        transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
        z-index: 63;
        border: none;
        background-color: transparent;
        padding: 0;
        color: inherit;
        text-align: inherit;
        font-size: 100%;
        font-family: inherit;
        cursor: default;
        line-height: inherit;
        overflow: hidden;
      }
    </style><a href=https://www.youtube.com/embed/F0NYT7DIlDQ><img class="relative" src=https://i.ytimg.com/vi_webp/F0NYT7DIlDQ/maxresdefault.webp alt="Understanding performance with Core Web Vitals"><button class="yt-btn"><svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg></button></a>'
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="Understanding performance with Core Web Vitals"
    ></iframe>
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and elements built with the
          utility classes from Tailwind
        </p>
      </div>
      <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
        <figure
          class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
        >
          <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Speechless with how easy this was to integrate
            </h3>

            <p class="my-4">
              I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy
              this was to integrate within my application. Most templates are a pain, code is
              scattered, and near impossible to theme.
            </p>

            <p class="my-4">
              Flowbite has code in one place and I'm not joking when I say it took me a matter of
              minutes to copy the code, customise it and integrate within a Laravel + Vue
              application.
            </p>

            <p class="my-4">If you care for your time, I hands down would go with this."</p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <AdvancedImage
              :plugins="plugins"
              :cldImg="testimonialImages[0]"
              class="w-9 h-9 rounded-full object-cover"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Bonnie Green</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Developer at Open AI
              </div>
            </div>
          </figcaption>
        </figure>
        <figure
          class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
        >
          <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>

            <p class="my-4">
              FlowBite provides a robust set of design tokens and components based on the popular
              Tailwind CSS framework. From the most used UI components like forms and navigation
              bars to the whole app screens designed both for desktop and mobile, this UI kit
              provides a solid foundation for any project.
            </p>
            <p class="my-4">
              Designing with Figma components that can be easily translated to the utility classes
              of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <AdvancedImage
              :plugins="plugins"
              :cldImg="testimonialImages[1]"
              class="w-9 h-9 rounded-full object-cover"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
        <figure
          class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700"
        >
          <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Mindblowing workflow and variants
            </h3>

            <p class="my-4">
              "As someone who mainly designs in the browser, I've been a casual user of Figma, but
              as soon as I saw and started playing with FlowBite my mind was 🤯.
            </p>

            <p class="my-4">
              Everything is so well structured and simple to use (I've learnt so much about Figma by
              just using the toolkit).
            </p>
            <p class="my-4">
              Aesthetically, the well designed components are beautiful and will undoubtedly level
              up your next application."
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <AdvancedImage
              :plugins="plugins"
              :cldImg="testimonialImages[2]"
              class="w-9 h-9 rounded-full object-cover"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jese Leos</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption>
        </figure>
        <figure
          class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700"
        >
          <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Efficient Collaborating
            </h3>

            <p class="my-4">
              "This is a very complex and beautiful set of elements. Under the hood it comes with
              the best things from 2 different worlds: Figma and Tailwind.
            </p>
            <p class="my-4">
              You have many examples that can be used to create a fast prototype for your team."
            </p>
          </blockquote>
          <figcaption class="flex justify-center items-center space-x-3">
            <AdvancedImage
              :plugins="plugins"
              :cldImg="testimonialImages[3]"
              class="w-9 h-9 rounded-full object-cover"
              alt="profile picture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Joseph McFall</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="text-center">
        <a
          href="#"
          class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Show more...
        </a>
      </div>
    </div>
  </section>
</template>

<style>
.yt-btn {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 68px;
  height: 48px;
  margin-left: -34px;
  margin-top: -24px;
  -webkit-transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  z-index: 63;
  border: none;
  background-color: transparent;
  padding: 0;
  color: inherit;
  text-align: inherit;
  font-size: 100%;
  font-family: inherit;
  cursor: default;
  line-height: inherit;
}
</style>
