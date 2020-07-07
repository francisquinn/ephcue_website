<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" sm="6">
        <v-card>
          <v-responsive :aspect-ratio="16/14">
            <v-img :src="info[id - 1].image"></v-img>
          </v-responsive>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" sm="6">
        <v-card class="justify-center">
          <v-card-text class="text-center">
            <div class="display-1">
              <span id="track_title">{{info[id - 1].title}}</span>
            </div>
            <br />
            <p>By Ephcue</p>
            <br />
            <Stream :id="id"></Stream>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<!-- <a :href="stream[id - 1].youtube" target="_blank">youtube</a>  -->
<script>
import Data from "../data/data";
import Stream from "@/components/Stream";
export default {
  components: {
    Stream
  },
  props: ["id"],
  data: () => ({
    info: Data.music,
    stream: Data.stream_links
  })
};
</script>

<style>
</style>
<!--{{this.$route.params.id}}-->