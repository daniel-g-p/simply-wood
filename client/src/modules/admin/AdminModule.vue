<template>
  <div class="admin">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/styles/index.scss" as *;
.admin {
  font-family: "Open Sans", sans-serif;
  background-color: $color-white;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
