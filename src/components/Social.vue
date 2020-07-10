<template>
  <div>
    <!-- Large screen -->
    <v-container v-if="`${this.$vssWidth}` > 375">
      <v-card>
        <v-row>
          <v-col class="text-center">
            <span id="comp_title">Social</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col class="text-center">
            <a href="https://www.facebook.com/ephcue" target="_blank">
              <v-icon size="70" id="facebook">{{ facebook }}</v-icon>
            </a>
            <a href="https://www.instagram.com/ephcue" target="_blank">
              <v-icon size="70" id="instagram">{{ instagram }}</v-icon>
            </a>
            <a href="https://www.twitter.com/ephcue" target="_blank">
              <v-icon size="70" id="twitter">{{ twitter }}</v-icon>
            </a>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <!-- Small screen -->
    <v-container v-if="`${this.$vssWidth}` <= 375">
      <v-card>
        <v-row>
          <v-col class="text-center">
            <span id="comp_title">Social</span>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row wrap>
          <v-col class="text-center">
            <a href="https://www.facebook.com/ephcue" target="_blank">
              <v-icon size="50" id="facebook">{{ facebook }}</v-icon>
            </a>
            <a href="https://www.instagram.com/ephcue" target="_blank">
              <v-icon size="50" id="instagram">{{ instagram }}</v-icon>
            </a>
            <a href="https://www.twitter.com/ephcue" target="_blank">
              <v-icon size="50" id="twitter">{{ twitter }}</v-icon>
            </a>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiFacebook } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
export default {
  data: () => ({
    facebook: mdiFacebook,
    instagram: mdiInstagram,
    twitter: mdiTwitter
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin]
};
</script>

<style scoped>
#facebook {
  margin-left: 15px;
  margin-right: 15px;
  color: #4267b2;
  cursor: pointer;
}
#instagram {
  margin-left: 15px;
  margin-right: 15px;
  color: #e1306c;
  cursor: pointer;
}
#twitter {
  margin-left: 15px;
  margin-right: 15px;
  color: #1da1f2;
  cursor: pointer;
}
</style>