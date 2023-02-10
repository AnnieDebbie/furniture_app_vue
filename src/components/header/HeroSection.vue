<template lang="">
  <section>
    <div>
      <div>
        <p>Now, furniture shopping is simple</p>
        <input
          placeholder="Search your product here"
          type="text"
          name=""
          id=""
        />
        <ButtonUI> Search </ButtonUI>
      </div>
      <div>
        <p>
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
<style lang=""></style>
