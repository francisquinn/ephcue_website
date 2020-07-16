<template>
  <v-container>
    <v-card>
      <v-row class="mx-3">
        <v-col class="text-center">
          <span id="comp_title" class="pa-1">Lyrics</span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mx-3">
        <v-col v-if="!readMore" v-html="trackLyrics[id - 1].lyrics.slice(0,195) + '...'"></v-col>
        <v-col v-if="readMore" v-html="trackLyrics[id - 1].lyrics"></v-col>
      </v-row>
      <v-row class="pa-0">
        <v-col>
          <v-btn class="blue--text" text v-show="!readMore" @click="readMore = true">Read more</v-btn>
          <v-btn
            class="red--text"
            text
            v-show="readMore"
            v-if="readMore"
            @click="readMore = false"
          >close</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import lyrics from "../data/lyrics";
export default {
  props: ["id"],
  data: () => ({
    trackLyrics: lyrics.lyrics,
    readMore: false
  })
};
</script>

<style>
</style>