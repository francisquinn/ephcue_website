<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col class="text-center">
          <span id="comp_title">Music</span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mx-1" justify="center" align="center">
        <v-col class="text-center" cols="12" sm="6" md="6" lg="6">
          <v-card flat class="ma-2">
            <v-img :src="info.music_image" :lazy-src="info.music_image">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="10" sm="6" md="6" lg="6">
          <v-card id="maven-text" flat class="black--text pa-3">
            <p>
              The music page is where I showcase all the music I have created.
              You will be able to view each track individually with links to each streaming service,
              a short description about the topic of the track and the lyrics.
            </p>
            <br>
            <v-row>
              <v-col class="text-center">
              <router-link id="link" tag="a" to="/music">
                <v-btn id="button" class="black white--text">
                  <span>{{info.music_button}}</span>
                  <v-icon>{{play}}</v-icon>
                </v-btn>
              </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
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

<style scoped>
#button {
  text-decoration: none;
}
</style>