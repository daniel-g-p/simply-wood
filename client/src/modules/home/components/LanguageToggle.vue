<template>
  <div class="language">
    <div class="language__container">
      <button class="language__button language__button--1">FR</button>
      <button
        class="language__button language__button--2 language__button--active"
      >
        NL
      </button>
      <button class="language__button language__button--3">EN</button>
      <div class="language__background"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;

.language {
  @include responsive($screen-tablet-s, "max") {
    position: absolute;
    top: 0;
    left: 0;
  }
  &__container {
    position: relative;
    z-index: 1;
    display: flex;
    text-transform: uppercase;
    color: $color-gold-transparent;
    text-align: center;
    font-weight: 4;
  }
  &__button {
    width: 2.5em;
    height: 1.5em;
    transition: background-color 0.25s ease;
    cursor: pointer;
    &--active {
      color: $color-gold;
      font-weight: 700;
      &.language__button--1 {
        ~ .language__background {
          left: 0;
        }
      }
      &.language__button--2 {
        ~ .language__background {
          left: 2.5em;
        }
      }
      &.language__button--3 {
        ~ .language__background {
          left: 5em;
        }
      }
    }
    &:hover,
    &:focus {
      color: $color-blue;
      ~ .language__background {
        background-color: $color-gold;
      }
      &.language__button--1 {
        ~ .language__background {
          left: 0;
        }
      }
      &.language__button--2 {
        ~ .language__background {
          left: 2.5em;
        }
      }
      &.language__button--3 {
        ~ .language__background {
          left: 5em;
        }
      }
    }
  }
  &__background {
    display: block;
    position: absolute;
    z-index: -1;
    pointer-events: none;
    top: 0;
    height: 100%;
    width: 2.5em;
    transition: background-color 0.25s ease, left 0.125s ease;
  }
}
</style>
