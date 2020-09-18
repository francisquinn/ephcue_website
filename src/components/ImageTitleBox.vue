<template>
  <!-- Container for image and title box -->
  <v-container >
    <v-row>
      <!-- Image box -->
      <v-col cols="12" md="6" sm="6">
        <v-card>
            <v-img :src="info.box_image" :lazy-src="info.box_image">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
      </v-col>
      <!-- Title box -->
      <v-col cols="12" md="6" sm="6">
        <v-card id="maven-text"  class="justify-center">
          <v-card-text class="text-center">
            <div class="display-1">
             <span id="track_title">{{info.box_title}}</span> 
            </div>
            <br />
            <p>Official Audio</p>
            <p>OUT NOW</p>
            <br />
            <Stream :id="1"></Stream>
            <br>
            <div>
              <router-link id="link" tag="a" to="/music">
                <v-btn id="button" class="black white--text">
                  <span>{{info.music_button}}</span>
                  <v-icon>{{play}}</v-icon>
                </v-btn>
              </router-link>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Stream from "@/components/Stream";
import { mdiPlay } from "@mdi/js";
export default {
  components: {
    Stream
  },
  data: () => ({
    play: mdiPlay
  }),
  props: {
    info: {
      type: Object
    }
  }
};
</script>

<style>
#link{
  text-decoration: none;
}
</style>