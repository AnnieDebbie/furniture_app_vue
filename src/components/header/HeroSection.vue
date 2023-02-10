<template lang="">
  <section class="hero-section pt-12 h-full">
    <div class="flex container mx-auto">
      <div class="basis-1/4 flex flex-col">
        <p class="font-bold text-4xl capitalize mb-6">
          Now, furniture shopping is simple
        </p>

        <div class="mb-4">
          <input
            class="p-4"
            placeholder="Search your product here"
            type="text"
            name=""
            id=""
          />

          <ButtonUI class="rounded rounded-sm bg-black text-white p-4">
            Search
          </ButtonUI>
        </div>
      </div>

      <div class="basis-1/4">
        <p class="text-lg tracking-wide">
          We've got the furniture you need to fill your new HomePage. Browse now
          for free and get big discounts on everything from tables to lamps!
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import ButtonUI from "../UI/ButtonUI";

export default {
  name: "HeroSection",
  components: { ButtonUI },
};
</script>
<style>
.hero-section {
  height: 40%;
  background-image: url("/src/assets/hero-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
</style>
