<script setup>
import CTASection from './components/initial/CTASection.vue'
import FeaturesSection from './components/initial/FeaturesSection.vue'
import FooterSection from './components/initial/FooterSection.vue'
import HeaderSection from './components/initial/HeaderSection.vue'
import PortfolioSection from './components/initial/PortfolioSection.vue'
import TeamSection from './components/initial/TeamSection.vue'
import TestimonialSection from './components/initial/TestimonialSection.vue'
</script>

<template>
  <!-- <DefineAdSlot /> -->
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
</template>
