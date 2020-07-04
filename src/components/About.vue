<template>
  <v-container class="pink">
    <v-row class="blue">
      <v-col class="text-center">
        <span id="comp_title">About me</span>
      </v-col>
    </v-row>
    <v-row class="green">
      <v-col class="text-center" cols="12" lg="6" md="6" sm="6">{{info.about_image}}</v-col>
      <v-col class="red" cols="12" lg="6" md="6" sm="6">
        <p>I am a 21 year old rap artist, producer and songwriter from Ireland. The main genre of my music is hip hop/rap. I've always had a passion for music, whether it would be listening or creating it on my own.</p>
        <p>I began by producing simple beats to understand and learn the basics of music production. I then decided to start writing lyrics to express myself through a poetic style of rap. My first single 'Time Will Proceed' was released on 11th January 2020.</p>
        <p>Nobody knows what the future holds, so for now I will continue to vibe and make beats to rap over them.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  }
};
</script>

<style scoped>

</style>