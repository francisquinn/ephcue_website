<template>
  <v-container class="green">
      <v-row class="yellow">
        <v-col class="text-center">Music</v-col>
      </v-row>
      <v-row>
        <v-col class="text-center" cols="12" sm="6" md="6" lg="6">{{info.music_image}}</v-col>
        <v-col class="text-center" cols="12" sm="6" md="6" lg="6">{{info.music_description}}</v-col>
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
}
</script>

<style>

</style>