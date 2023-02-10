<template lang="">
  <div>
    <HeaderSection></HeaderSection>
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

export default {
  name: "HomePage",
  components: {
    HeaderSection,
    PopularCategories,
    WhyUs,
    FooterSection,
  },
};
</script>

<style lang=""></style>
