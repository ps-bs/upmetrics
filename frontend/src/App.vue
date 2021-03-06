<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h3 class="d-flex align-center">
        Super Hero search
      </h3>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
