<template>
  <div class="admin">
    <base-loader></base-loader>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/index.scss" as *;
.admin {
  font-family: "Open Sans", sans-serif;
  background-image: linear-gradient(
    to right bottom,
    $color-grey-light,
    $color-gold
  );
  min-height: 100vh;
  padding: 2rem 1rem;
}
</style>
