<template lang="">
  <section class="bg-nude h-screen p-8">
    <div class="flex h-[90%] w-[90%] relative mx-auto">
      <div class="basis-1/3">
        <img
          class=""
          src="../../assets/pexels-emre-can-acer-2079249.jpg"
          alt="furniture"
        />
      </div>

      <div
        class="h-[90%] w-1/3 bg-white p-12 space-y-12 absolute right-[40%] bottom-2"
      >
        <h3 class="font-bold text-5xl">Create an account with us</h3>
        <form class="flex flex-col space-y-8" action="">
          <input
            v-model="userDetails.name"
            class="p-3 border-b-2 border-black placeholder:text-black text-3xl"
            placeholder="Full name"
            type="text"
          />
          <input
            v-model="userDetails.email"
            class="p-3 border-b-2 border-black placeholder:text-black text-3xl"
            placeholder="Email address"
            type="text"
          />
          <input
            v-model="userDetails.password"
            class="p-3 border-b-2 border-black placeholder:text-black text-3xl"
            placeholder="Password"
            type="password"
          />

          <ButtonUI
            class="rounded rounded-sm bg-black text-white text-3xl p-4"
            @click.prevent="signUpHandler"
          >
            Create Account
          </ButtonUI>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ButtonUI from "../UI/ButtonUI.vue";
export default {
  name: "SignUp",
  isInputValid: false,
  components: {
    ButtonUI,
  },

  computed: {
    ...mapState(["userDetails"]),
  },
  methods: {
    ...mapActions(["addNewUser"]),

    signUpHandler() {
      console.log(this.userDetails);
      localStorage.setItem("userDetails", this.userDetails);
      this.addNewUser(this.userDetails);

      this.isValid();
      if (this.isInputValid) {
        this.$router.push({ name: "home" });
      }
    },

    isValid() {
      if (Object.keys(this.userDetails).length > 0) {
        this.isInputValid = true;
      }
    },
  },
};
</script>
<style lang=""></style>
