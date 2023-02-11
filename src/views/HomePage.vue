<template lang="">
  <div>
    <HeaderSection/>
    <HeroSection/>
    <PopularCategories/>
    <WhyUs/>
    <FooterSection/>
  </div>
</template>
<script>
import HeaderSection from '../components/header/HeaderSection.vue';
import PopularCategories from '../components/main/products/PopularCategories.vue';
import WhyUs from "../components/main/WhyUs.vue"
import FooterSection from "../components/footer/FooterSection.vue"
import HeroSection from "../components/header/HeroSection.vue";

export default {
  name: "HomePage",
  components: {
    HeaderSection,
    PopularCategories,
    WhyUs,
    FooterSection,
    HeroSection,
  },
};
</script>

<style lang=""></style>
