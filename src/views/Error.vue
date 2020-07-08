<template>
  <v-container>
    <v-card>
      <v-card-text class="text-center">
        <span id="track_title">404</span>
        <br />
        <span id="error_404">Page not found :(</span>
        <br />
        <br>
        <router-link id="link" tag="a" to="/">
          <v-btn id="button" class="black white--text">
            <span>Back to home</span>
          </v-btn>
        </router-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>