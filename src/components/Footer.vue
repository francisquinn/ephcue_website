<template>
  <v-footer class="black" dark width="100%">
    <v-row class="black white--text" justify="center" align="center">
      <v-col class="text-center">
        <a href="https://www.facebook.com/ephcue" target="_blank">
          <v-icon id="facebook">{{ facebook }}</v-icon>
        </a>
        <a href="https://www.instagram.com/ephcue" target="_blank">
          <v-icon id="instagram">{{instagram}}</v-icon>
        </a>
        <a href="https://www.twitter.com/ephcue" target="_blank">
          <v-icon id="twitter">{{twitter}}</v-icon>
        </a>

        <v-divider></v-divider>
        <span id="date">
          {{ new Date().getFullYear() }} —
          <strong>Ephcue</strong>
        </span>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
import { mdiFacebook } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
export default {
  data: () => ({
    facebook: mdiFacebook,
    instagram: mdiInstagram,
    twitter: mdiTwitter
  })
};
</script>

<style scoped>
#facebook {
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  color: #ffffff;
  cursor: pointer;
}
#instagram {
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  color: #ffffff;
  cursor: pointer;
}
#twitter {
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
  color: #ffffff;
  cursor: pointer;
}
#date {
  margin-top: 100px;
}
</style>
