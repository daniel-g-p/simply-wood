<template>
  <main class="images">
    <admin-navigation></admin-navigation>
    <admin-title>Images</admin-title>
  </main>
</template>

<script>
import AdminTitle from "../components/AdminTitle.vue";
import AdminNavigation from "../components/AdminNavigation.vue";

export default {
  components: {
    AdminTitle,
    AdminNavigation,
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.images {
  max-width: 40rem;
  margin: 0 auto;
}
</style>
