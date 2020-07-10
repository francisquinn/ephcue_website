<template>
  <v-container class="red">{{track[id - 1].description}}</v-container>
</template>

<script>
import Data from "../data/data";
export default {
  props: ["id"],
  data: () => ({
    track: Data.music
  })
};
</script>

<style>
</style>