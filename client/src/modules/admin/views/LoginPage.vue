<template>
  <main class="login">
    <base-textbox
      :id="'test'"
      :label="'Test Input'"
      v-model="email"
    ></base-textbox>
  </main>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const email = ref("");
    watch(email, (value) => {
      console.log(value);
    });
    return { email };
  },
};
</script>
