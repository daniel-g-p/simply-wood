<template>
  <main class="profile">
    <admin-navigation></admin-navigation>
    <admin-title>Utilisateur</admin-title>
    <form class="profile__form" novalidate @submit.prevent="updateAdmin">
      <base-textbox
        :id="'name'"
        :label="'Nom'"
        v-model="name"
        @change="updateAdmin"
      ></base-textbox>
      <base-textbox
        :id="'email'"
        :label="'Adresse email'"
        :type="'email'"
        v-model="email"
        @change="updateAdmin"
      ></base-textbox>
      <base-button class="profile__button">Changer mot de passe</base-button>
    </form>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

import AdminNavigation from "../components/AdminNavigation.vue";
import AdminTitle from "../components/AdminTitle.vue";

export default {
  components: {
    AdminNavigation,
    AdminTitle,
  },
  setup() {
    const store = useStore();
    const name = ref("");
    const email = ref("");
    const updateAdmin = () => {
      const request = {
        url: `${process.env.VUE_APP_API}/users/admin`,
        options: {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name.value, email: email.value }),
        },
      };
      store.dispatch("admin/toggleLoader");
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch("admin/toggleLoader");
        });
    };
    const fetchAdmin = () => {
      const request = {
        url: `${process.env.VUE_APP_API}/users/admin`,
        options: { credentials: "include" },
      };
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          if (res.admin) {
            const { admin } = res;
            name.value = admin.name;
            email.value = admin.email;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    onMounted(() => {
      fetchAdmin();
    });
    return { name, email, updateAdmin };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.profile {
  max-width: 40rem;
  margin: 0 auto;
  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  &__button {
    align-self: flex-start;
  }
}
</style>
