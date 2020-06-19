<template>
  <v-app id="App">
    <Header></Header>
    <v-main class="mx-5 my-2">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
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
