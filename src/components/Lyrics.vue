<template>
  <v-container class="blue">
      <v-row class="yellow">
          <v-col class="green">Lyrics</v-col>
      </v-row>
      <v-row class="purple" v-for="lyric in lyrics" :key="lyric.id">
          <v-col class="red" v-if="lyric.lyric.length <= 32">{{lyric.lyric}}</v-col>
          <v-col class="red" v-if="lyric.lyric.length > 32">{{lyric.lyric.substring(0, 30)}}&nbsp;...</v-col>
      </v-row>
  </v-container>
</template>

<script>
import Data from '../data/data'
export default {
    data: () => ({
        lyrics: Data.lyrics
    })
}
</script>

<style>

</style>