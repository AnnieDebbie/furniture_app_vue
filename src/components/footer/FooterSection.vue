<template lang="">
  <section class="mt-10 bg-nude p-12">
    <footer class="container mx-auto flex justify-between items-center">
      <div>
        <ul class="font-medium text-xl space-y-2">
          <li>About Us</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <ul class="font-medium text-xl space-y-2">
          <li>Contact Us</li>
          <li>Support</li>
          <li>Live chat</li>
        </ul>
      </div>
      <div>
        <input
          class="p-4 placeholder:text-black"
          placeholder="Enter your email address"
          type="text"
          name=""
          id=""
        />

        <ButtonUI class="rounded rounded-sm bg-black text-white p-4">
          Subscribe to our newsletter
        </ButtonUI>
      </div>
    </footer>
  </section>
</template>
<script>
import ButtonUI from "../UI/ButtonUI.vue";
export default {
  name: "FooterSection",
  components: { ButtonUI },
};
</script>
<style lang=""></style>
