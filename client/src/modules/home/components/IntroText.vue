<template>
  <div class="intro">
    <h1 class="intro__heading">Simply Wood</h1>
    <p class="intro__text">
      Bienvenue chez Simply Wood, que pouvons-nous faire pour vous?
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.intro {
  color: $color-gold;
  @include responsive($screen-tablet-s) {
      padding-right: 3rem;
  }
  &__heading {
    color: $color-gold;
    font-weight: 400;
    font-size: 3rem;
    text-align: center;
    line-height: 1.25;
    @include responsive($screen-tablet-s) {
      text-align: left;
      font-size: 4.5rem;
    }
    @include responsive($screen-desktop-s) {
      font-size: 6rem;
    }
  }
  &__text {
    display: none;
    @include responsive($screen-tablet-s) {
      display: block;
      font-family: "Open Sans";
      line-height: 1.5;
      margin-top: 1rem;
    }
  }
}
</style>
