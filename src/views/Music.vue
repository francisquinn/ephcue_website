<template>
  <div>
    <MusicCard :info="Data"></MusicCard>
  </div>
</template>

<script>
import MusicCard from "@/components/MusicPage";
import Data from '../data/data';
export default {
  data: () => ({
    Data
  }),
  components: {
    MusicCard
  }
  
};
</script>

<style>
</style>