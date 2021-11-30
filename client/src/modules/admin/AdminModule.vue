<template>
  <div class="admin">
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
