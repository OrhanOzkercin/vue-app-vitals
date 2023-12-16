<script setup>
import CTASection from '../components/initial/CTASection.vue'
import FeaturesSection from '../components/initial/FeaturesSection.vue'
import FooterSection from '../components/initial/FooterSection.vue'
import HeaderSection from '../components/initial/HeaderSection.vue'
import PortfolioSection from '../components/initial/PortfolioSection.vue'
import LoadScript from '../components/initial/LoadScript.vue'
import TeamSection from '../components/initial/TeamSection.vue'
import TestimonialSection from '../components/initial/TestimonialSection.vue'
import BazingaGif from '../components/initial/BazingaGif.vue'
</script>

<template>
  <HeaderSection />
  <CTASection />
  <FeaturesSection />
  <PortfolioSection />
  <div class="ad-container mb-10">
    <div id="responsive-ad" class="ad-slot"></div>
  </div>
  <hr class="mb-10"/>
  <BazingaGif />
  <TeamSection />
  <TestimonialSection />
  <FooterSection />
  <LoadScript />
</template>
