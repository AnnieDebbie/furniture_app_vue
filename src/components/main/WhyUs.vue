<template lang="">
  <section class="flex justify-evenly  container mx-auto">
    <div class="basis-1/4 flex flex-col gap-4 pr-8 py-8 ">
      <h3 class="font-bold text-2xl">A Modern Home Starts with Truebuy.</h3>
      <p class="leading-[150%] font-light">
        You'll find the perfect home furnishings without breaking your budget.
      </p>
      <img src="@/assets/couch.png" alt="A couch" />
    </div>

    <div class="basis-1/3  bg-nude p-8">
      <ul class="space-y-4">
        <li>
          <div class="flex gap-2 items-center mb-2">
            <img src="@/assets/check-circle-rounded.svg" alt="" />
            <h4 class="font-bold text-xl">
              A Customized Experience for Every Style
            </h4>
          </div>
          <p class="ml-8 font-light leading-[150%]">
            Our customizing tool allows you to filter by size, color, type of
            furniture and more!
          </p>
        </li>
        <li>
          <div class="flex gap-2   items-center mb-2">
            <img src="@/assets/check-circle-rounded.svg" alt="" />
            <h4 class="font-bold text-xl">Competitive Prices</h4>
          </div>
          <p class="ml-8 font-light leading-[150%]">
            The majority of our products are priced at under $1000 - some as low
            as $89!
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: "WhyUs",
};
</script>
<style lang=""></style>
