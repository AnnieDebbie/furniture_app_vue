<template lang="">
  <section class="container mx-auto">
    <h4 class="font-bold text-3xl">Popular Categories</h4>

    <div class="flex align-center items-center">
      <div v-for="item in popularCategories" :key="item.name">
        <img  :alt="item.image.alt" :src="item.image.source" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "PopularCategories",

  data() {
    return {
      popularCategories: [
        {
          name: "chair",
          image: {
            source: require("@/assets/chair.png"),
            alt: "A chair",
          },
        },
        {
          name: "cabinet",
          image: {
            source: require("@/assets/cabinet.png"),
            alt: "A cabinet",
          },
        },
        {
          name: "lamp",
          image: {
            source: require("@/assets/lamp.png"),
            alt: "A lamp",
          },
        },
        {
          name: "table",
          image: {
            source: require("@/assets/table.png"),
            alt: "A table",
          },
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
