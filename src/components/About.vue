<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col class="text-center">
          <span id="comp_title">About me</span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mx-1" justify="center" align="center">
        <v-col cols="10" sm="5" md="4" lg="3">
          <v-card class="ma-2">
            <v-img :src="info.about_image" :lazy-src="info.about_image">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
        <v-col v-if="`${this.$vssWidth}` > 500" cols="10" sm="7" md="8" lg="9">
          <v-card flat class="black--text pa-3" id="maven-text" v-html="info.about_description"></v-card>
        </v-col>
        <v-col v-if="`${this.$vssWidth}` <= 500" cols="10" sm="7" md="8" lg="9">
          <v-card
            id="maven-text"
            flat
            class="black--text pa-3"
            v-if="!readMore"
            v-html="info.about_description.slice(0, 200) + '...'"
          ></v-card>
          <v-card
            flat
            id="maven-text"
            class="black--text pa-3"
            v-if="readMore"
            v-html="info.about_description"
          ></v-card>
          <v-row class="ma-0 pa-0">
            <v-col class="text-center">
              <v-btn
                id="maven-text"
                class="blue--text ma-0 pa-0"
                text
                v-show="!readMore"
                @click="readMore = true"
              >Read more</v-btn>
              <v-btn
                id="maven-text"
                class="red--text"
                text
                v-show="readMore"
                v-if="readMore"
                @click="readMore = false"
              >close</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import VueScreenSize from "vue-screen-size";
export default {
  props: {
    info: {
      type: Object,
    },
  },
  data: () => ({
    readMore: false,
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style scoped>
</style>