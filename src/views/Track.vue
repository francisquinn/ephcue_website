<template>
  <v-container class="blue">
    <v-row>
      <v-col cols="12" md="6" sm="6">
        <v-card flat>
          <v-responsive :aspect-ratio="16/14">
            <v-img :src="info[id - 1].image"></v-img>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-card flat class="justify-center">
          <v-card-text class="text-center">
            <div class="display-1">{{info[id - 1].title}}</div>
            <br />
            <p>Official Audio</p>
            <p>OUT NOW</p>
            <br />
            <a :href="stream[id - 1].youtube" target="_blank">youtube</a>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Data from "../data/data";
export default {
  props: ["id"],
  data: () => ({
    info: Data.music,
    stream : Data.stream_links
  })
};
</script>

<style>
</style>
<!--{{this.$route.params.id}}-->