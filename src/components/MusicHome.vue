<template>
  <v-container class="green">
    <v-row class="yellow">
      <v-col class="text-center">
        <span id="comp_title">Music</span>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col class="text-center" cols="12" sm="6" md="6" lg="6">
        <v-img :src="info.music_image"></v-img>
      </v-col>
      <v-col class="red text-center" cols="12" sm="6" md="6" lg="6">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illo doloremque repudiandae recusandae facere temporibus dicta, molestias sunt quod voluptatibus perferendis eum at quibusdam exercitationem molestiae autem earum eligendi voluptate!</p>
        <div>
          <router-link id="link" tag="a" to="/music">
            <v-btn id="button" class="black white--text">
              <span>{{info.music_button}}</span>
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

<style scoped>
#button {
  text-decoration: none;
}
</style>