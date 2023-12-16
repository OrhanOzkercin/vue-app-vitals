<script setup>
import CTASection from '../components/lcp-fix-responsive-image/CTASection.vue'
import FeaturesSection from '../components/initial/FeaturesSection.vue'
import FooterSection from '../components/initial/FooterSection.vue'
import HeaderSection from '../components/lcp-fix-responsive-image/HeaderSection.vue'
import PortfolioSection from '../components/lcp-fix-responsive-image/PortfolioSection.vue'
import TeamSection from '../components/lcp-fix-responsive-image/TeamSection.vue'
import TestimonialSection from '../components/lcp-fix-responsive-image/TestimonialSection.vue'
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
