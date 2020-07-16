<template>
  <div>
    <v-container>
      <v-card>
      <v-row class="mx-3">
          <v-col class="text-center">
            <span id="comp_title" class="pa-1">More Music</span>
          </v-col>
        </v-row>
      <v-card>
        <v-row class="mx-3" v-for="trackID in recommend(id)" :key="trackID">
          <v-col cols="5" sm="3" md="2" lg="2">
            <v-card>
              <v-responsive :aspect-ratio="10/8">
                <v-img :src="track[trackID - 1].image"></v-img>
              </v-responsive>
            </v-card>
          </v-col>
          <v-col cols="7" sm="6" md="7" lg="7">
            <v-card flat>
              <v-card-text id="track_hover">
                <span>
                  <strong>{{track[trackID - 1].title}}</strong>
                </span>
              </v-card-text>
              <v-card-text class="py-0">By Ephcue</v-card-text>
              <br />
              <router-link id="link" :to="`${track[trackID - 1].id}`">
                <v-btn text  class="white black--text pr-0">
                  <span>View Track</span>
                  <v-icon>{{play}}</v-icon>
                </v-btn>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import Data from "../data/data";
import { mdiPlay } from "@mdi/js";
export default {
  props: ["id"],
  data: () => ({
    track: Data.music,
    track_ids: [1, 2, 3, 4, 5],
    play: mdiPlay
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin],
  methods: {
    recommend(id) {
      var array = this.track_ids.filter(item => item != id);
      const shuffled = array.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 2);
      return selected;
    }
  }
};
</script>

<style>
</style>