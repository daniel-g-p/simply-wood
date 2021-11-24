<template>
  <div class="home">
    <intro-text></intro-text>
  </div>
</template>

<script>
import IntroText from "../components/IntroText.vue";

export default {
  components: {
    IntroText,
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.home {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      $color-blue,
      $color-blue-transparent
    ),
    url("../../../assets/images/main-background.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @include responsive($screen-tablet-s) {
    justify-content: flex-start;
    padding: 10vw;
  }
}
</style>
