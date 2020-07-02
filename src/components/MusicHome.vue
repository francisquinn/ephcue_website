<template>
  <v-container class="green">
    <v-row class="yellow">
      <v-col class="text-center">Music</v-col>
    </v-row>
    <v-row>
      <v-col class="text-center" cols="12" sm="6" md="6" lg="6">{{info.music_image}}</v-col>
      <v-col class="text-center" cols="12" sm="6" md="6" lg="6">
        <div>
          <router-link id="link" tag="a" to="/music">
            <v-btn id="button" text>
              <span>{{info.music_description}}</span>
              <v-icon>{{play}}</v-icon>
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiPlay } from "@mdi/js";
export default {
  props: {
    info: {
      type: Object
    }
  },
  data: () => ({
    play: mdiPlay
  })
};
</script>

<style>
</style>