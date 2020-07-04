<template>
  <!-- Container for image and title box -->
  <v-container class="red">
    <v-row>
      <!-- Image box -->
      <v-col cols="12" md="6" sm="6">
        <v-card>
          <v-responsive :aspect-ratio="16/14">
            <v-img :src="info.box_image"></v-img>
          </v-responsive>
        </v-card>
      </v-col>
      <!-- Title box -->
      <v-col cols="12" md="6" sm="6">
        <v-card class="justify-center">
          <v-card-text class="text-center">
            <div class="display-1">
             <span class="inherit--text">{{info.box_title}}</span> 
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
</style>