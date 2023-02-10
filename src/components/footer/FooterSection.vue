<template lang="">
  <footer class="mt-4 bg-nude flex p-4">
    <div>
      <ul>
        <li>About Us</li>
        <li>Services</li>
        <li>Blog</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Contact Us</li>
        <li>Support</li>
        <li>Live chat</li>
      </ul>
    </div>
    <div><input type="text" /><ButtonUI>Subscribe</ButtonUI></div>
  </footer>
</template>
<script>
import ButtonUI from '../UI/ButtonUI.vue';
export default {
  name: "FooterSection",
  components: { ButtonUI },
};
</script>
<style lang=""></style>
