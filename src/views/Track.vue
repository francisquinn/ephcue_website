<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <v-card>
            <v-responsive :aspect-ratio="16/14">
              <v-img :src="info[id - 1].image" :lazy-src="info[id - 1].image">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-responsive>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="6">
          <v-card id="maven-text" class="justify-center">
            <v-card-text class="text-center">
              <div class="display-1">
                <span id="track_title">{{info[id - 1].title}}</span>
              </div>
              <br />
              <p>By Ephcue</p>
              <br />
              <span>
                <b>Release date:</b>
                {{info[id - 1].released_date}}
              </span>
              <br />
              <Description :id="id"></Description>
              <Stream :id="id"></Stream>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Lyrics :id="id" :readMore="readMore" @show="show" @hide="hide"></Lyrics>
    <Recommend :id="id" :readMore="readMore" @hide="hide"></Recommend>
  </div>
</template>
<!-- <a :href="stream[id - 1].youtube" target="_blank">youtube</a>  -->
<script>
import Data from "../data/data";
import Stream from "@/components/Stream";
import Description from "@/components/Description";
import Lyrics from "@/components/Lyrics";
import Recommend from "@/components/Recommend";
export default {
  components: {
    Stream,
    Description,
    Lyrics,
    Recommend,
  },
  props: ["id"],
  data: () => ({
    info: Data.music,
    stream: Data.stream_links,
    readMore: false,
  }),
  methods: {
    show(value) {
      this.readMore = value;
    },
    hide(value) {
      this.readMore = value;
    },
  },
};
</script>

<style>
</style>
<!--{{this.$route.params.id}}-->