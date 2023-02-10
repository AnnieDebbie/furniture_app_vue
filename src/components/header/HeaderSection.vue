<template lang="">
  <header class="bg-nude flex items-center align-center p-8">
    <div class="text-3xl uppercase container mx-auto">
      <h2>True<span class="font-extrabold">Buy </span></h2>
    </div>

    <nav class="">
      <ul class="flex items-center justify-between">
        <li
          class="text-xl hover:underline decoration-green100 decoration-4 underline-offset-4"
        >
          HomePage
        </li>
        <li
          class="text-xl hover:underline decoration-green100 decoration-4 underline-offset-4"
        >
          About Us
        </li>
        <li
          class="text-xl hover:underline decoration-green100 decoration-4 underline-offset-4"
        >
          Categories
        </li>
      </ul>
    </nav>

    <!-- TODO add userprofile icon -->
  </header>
  <HeroSection></HeroSection>
</template>
<script>
import HeroSection from "./HeroSection";

export default {
  name: "HeaderSection",
  components: { HeroSection },
};
</script>
<style lang=""></style>
