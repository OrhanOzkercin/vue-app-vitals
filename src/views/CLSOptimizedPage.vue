<script setup>
import CTASection from '../components/cls-fix/CTASection.vue'
import HeaderSection from '../components/cls-fix/HeaderSection.vue'
import FeaturesSection from '../components/initial/FeaturesSection.vue'
import FooterSection from '../components/initial/FooterSection.vue'
import PortfolioSection from '../components/initial/PortfolioSection.vue'
import TeamSection from '../components/initial/TeamSection.vue'
import TestimonialSection from '../components/initial/TestimonialSection.vue'
import LoadScript from '../components/initial/LoadScript.vue'
</script>

<template>
  <HeaderSection />
  <CTASection />
  <FeaturesSection />
  <PortfolioSection />
  <div class="ad-container">
    <div id="responsive-ad" class="ad-slot"></div>
  </div>
  <TeamSection />
  <TestimonialSection />
  <FooterSection />
  <LoadScript />
</template>
