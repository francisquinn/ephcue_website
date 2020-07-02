<template>
  <v-container class="pink" >
      <v-row class="blue">
        <v-col class="text-center">About me</v-col>
      </v-row>
      <v-row class="green">
        <v-col class="text-center" cols="12" lg="6" md="6" sm="6">{{info.about_image}}</v-col>
        <v-col cols="12" lg="6" md="6" sm="6">{{info.about}}</v-col>
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