<template lang="">
  <div>
    <HeaderSection></HeaderSection>
    <PopularCategories/>
    <WhyUs/>
  </div>
</template>
<script>
import HeaderSection from '../components/header/HeaderSection.vue';
import PopularCategories from '../components/main/products/PopularCategories.vue';
import WhyUs from "../components/main/WhyUs.vue"

export default {
  name: "HomePage",
  components: {
    HeaderSection,
    PopularCategories,
    WhyUs,
  },
};
</script>

<style lang=""></style>
