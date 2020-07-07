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
@font-face {
  font-family: "Galada";
  src: url("/Galada-Regular.ttf");
}
#comp_title {
  font-family: Galada;
  font-size: 40px;
}
@font-face {
  font-family: "Maven";
  src: url("/MavenPro-Regular.ttf");
}
#track_hover{
  font-family: Maven;
  color: black;
}
#track_title {
  font-family: Maven;
  font-size: 50px;
  color: #323232;
}

</style>
