<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col class="text-center">
          <span id="comp_title">Music</span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row justify="center" align="center">
        <v-col class="text-center" cols="12" sm="6" md="6" lg="6">
          <v-img :src="info.music_image"></v-img>
        </v-col>
        <v-col class="text-center" cols="12" sm="6" md="6" lg="6">
          <v-card flat class="black--text pa-3">
            <p>
              The music page is where I showcase all the music I have created.
              You will be able to view each track individually with links to each streaming service,
              a short description about the topic of the track and the lyrics.
            </p>
            <div>
              <router-link id="link" tag="a" to="/music">
                <v-btn id="button" class="black white--text">
                  <span>{{info.music_button}}</span>
                  <v-icon>{{play}}</v-icon>
                </v-btn>
              </router-link>
            </div>
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