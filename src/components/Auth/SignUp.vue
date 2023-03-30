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
        <h3 class="font-bold text-3xl">Create an account with us</h3>
        <form class="flex flex-col space-y-8" action="">
          <input
            v-model="userDetails.name"
            class="p-3 border-b-2 border-black placeholder:text-black text-2xl"
            placeholder="Full name"
            required
            type="text"
          />
          <input
            v-model="userDetails.email"
            class="p-3 border-b-2 border-black placeholder:text-black text-2xl"
            placeholder="Email address"
            required
            type="email"
          />
          <input
            v-model="userDetails.password"
            class="p-3 border-b-2 border-black placeholder:text-black text-2xl"
            placeholder="Password"
            required
            type="password"
          />

          <ButtonUI
            class="rounded rounded-sm bg-black text-white text-2xl p-4"
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

    isValid() {
      if (Object.keys(this.userDetails).length > 0) {
        this.isInputValid = true;
      }
    },
    signUpHandler() {
      console.log(this.userDetails);
      localStorage.setItem("userDetails", JSON.stringify(this.userDetails));
      this.addNewUser(this.userDetails);

      this.isValid();

      if (this.isInputValid) {
        this.$router.push({ name: "home" }).catch((error) => {
          console.log(error.message);
        });
      }
    },
  },
};
</script>
<style lang=""></style>
