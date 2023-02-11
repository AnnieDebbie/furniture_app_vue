<template lang="">
  <section class="container mx-auto space-y-6 mb-12">
    <h4 class="font-bold text-3xl">Popular Categories</h4>

    <div class="flex align-center items-center gap-12 w-full">
      <div class="" v-for="item in popularCategories" :key="item.name">
        <img
          class="w-full h-1/4"
          :alt="item.image.alt"
          :src="item.image.source"
        />
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
          name: "couch",
          image: {
            source: require("@/assets/couch.jpg"),
            alt: "A couch",
          },
        },
        {
          name: "cabinet",
          image: {
            source: require("@/assets/closet.jpg"),
            alt: "A cabinet",
          },
        },
        {
          name: "lamp",
          image: {
            source: require("@/assets/lamp.jpg"),
            alt: "A lamp",
          },
        },
        {
          name: "table",
          image: {
            source: require("@/assets/table.jpg"),
            alt: "A table",
          },
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
