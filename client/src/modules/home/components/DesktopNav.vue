<template>
  <header class="menu">
    <nav class="menu__nav">
      <nav-link
        v-for="link in links"
        :key="link.label"
        :label="link.label"
        :link="link.address"
      ></nav-link>
    </nav>
    <language-toggle></language-toggle>
  </header>
</template>

<script>
import NavLink from "./NavLink.vue";
import LanguageToggle from "./LanguageToggle.vue";

export default {
  components: {
    NavLink,
    LanguageToggle,
  },
  setup() {
    const links = [
      { label: "A propos", address: "/" },
      { label: "Nos créations", address: "/" },
      { label: "Avis de nos clients", address: "/" },
      { label: "Contact", address: "/" },
    ];
    return { links };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__nav {
    display: flex;
    gap: 2rem;
  }
}
</style>
