<script setup>
import CTASection from '../components/lcp-fix-webp/CTASection.vue'
import FeaturesSection from '../components/initial/FeaturesSection.vue'
import FooterSection from '../components/initial/FooterSection.vue'
import HeaderSection from '../components/lcp-fix-webp/HeaderSection.vue'
import PortfolioSection from '../components/lcp-fix-webp/PortfolioSection.vue'
import TeamSection from '../components/lcp-fix-webp/TeamSection.vue'
import TestimonialSection from '../components/lcp-fix-webp/TestimonialSection.vue'
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
