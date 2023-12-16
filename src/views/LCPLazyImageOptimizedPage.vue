<script setup>
import CTASection from '../components/lcp-fix-lazy/CTASection.vue'
import FeaturesSection from '../components/initial/FeaturesSection.vue'
import FooterSection from '../components/initial/FooterSection.vue'
import HeaderSection from '../components/lcp-fix-lazy/HeaderSection.vue'
import PortfolioSection from '../components/lcp-fix-lazy/PortfolioSection.vue'
import TeamSection from '../components/lcp-fix-lazy/TeamSection.vue'
import TestimonialSection from '../components/lcp-fix-lazy/TestimonialSection.vue'
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
</template>
