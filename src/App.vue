<template>
  <v-app id="App">
    <Header></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#App{
  background: #f9f9f9;
}

</style>
