<template>
  <div>
    <!-- Large screen -->
    <v-container v-if="`${this.$vssWidth}` > 420">
      <v-row wrap>
        <v-col class="text-center">
          <a :href="stream[id - 1].youtube" target="_blank">
            <v-icon id="youtube" size="50">{{ youtube }}</v-icon>
          </a>
          <a :href="stream[id - 1].spotify" target="_blank">
            <v-icon id="spotify" size="50">{{ spotify }}</v-icon>
          </a>
          <a :href="stream[id - 1].apple" target="_blank">
            <v-icon id="apple" size="50">{{ apple }}</v-icon>
          </a>
          <a :href="stream[id - 1].amazon" target="_blank">
            <v-icon id="amazon" size="50">{{ amazon }}</v-icon>
          </a>
        </v-col>
      </v-row>
    </v-container>
    <!-- Small screen -->
    <v-container v-if="`${this.$vssWidth}` <= 420 && `${this.$vssWidth}` > 326">
      <v-row wrap>
        <v-col class="text-center">
          <a :href="stream[id - 1].youtube" target="_blank">
            <v-icon id="youtube" size="70">{{ youtube }}</v-icon>
          </a>
        </v-col>
        <v-col>
          <v-icon id="spotify" size="70">{{ spotify }}</v-icon>
        </v-col>

        <v-col class="text-center">
          <v-icon id="apple" size="70">{{ apple }}</v-icon>
        </v-col>
        <v-col>
          <v-icon id="amazon" size="70">{{ amazon }}</v-icon>
        </v-col>
      </v-row>
    </v-container>
    <!-- Very small screen -->
    <v-container v-if="`${this.$vssWidth}` <= 326 ">
      <v-row wrap>
        <v-col class="text-center">
          <a :href="stream[id - 1].youtube" target="_blank">
            <v-icon id="youtube" size="60">{{ youtube }}</v-icon>
          </a>
        </v-col>
        <v-col>
          <v-icon id="spotify" size="60">{{ spotify }}</v-icon>
        </v-col>

        <v-col class="text-center">
          <v-icon id="apple" size="60">{{ apple }}</v-icon>
        </v-col>
        <v-col>
          <v-icon id="amazon" size="60">{{ amazon }}</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiYoutube } from "@mdi/js";
import { mdiSpotify } from "@mdi/js";
import { mdiApple } from "@mdi/js";
import { mdiAmazon } from "@mdi/js";
import Data from "../data/data";
export default {
  props: ["id"],
  data: () => ({
    stream: Data.stream_links,
    youtube: mdiYoutube,
    spotify: mdiSpotify,
    apple: mdiApple,
    amazon: mdiAmazon
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin]
};
</script>

<style scoped>
#youtube {
  color: #ff0000;
  cursor: pointer;
  margin: 10px;
}
#spotify {
  color: #1db954;
  cursor: pointer;
  margin: 10px;
}
#apple {
  color: #000000;
  cursor: pointer;
  margin: 10px;
}
#amazon {
  color: #ff9900;
  cursor: pointer;
  margin: 10px;
}
</style>