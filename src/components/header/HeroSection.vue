<template lang="">
  <section class="hero-section pt-16 mb-12">
    <div class="flex justify-between container mx-auto">
      <div class="basis-1/4 flex flex-col">
        <p
          class="font-bold text-4xl capitalize mb-6 tracking-wide leading-[100%]"
        >
          Now, furniture shopping is simple
        </p>

        <div class="mb-4">
          <input
            class="p-4 placeholder:text-black"
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
        <p class="text-xl tracking-wide leading-[150%] font-light">
          We've got the furniture you need to fill your new Home. Browse now
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
  height: 891px;
  background-image: url("/src/assets/hero-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
