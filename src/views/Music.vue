<template>
  <div>
    <FilterMusic></FilterMusic>
    <MusicCard :info="Data"></MusicCard>
  </div>
</template>

<script>
import FilterMusic from "@/components/Filter";
import MusicCard from "@/components/MusicPage";
import Data from '../data/data';
export default {
  data: () => ({
    Data
  }),
  components: {
    FilterMusic,
    MusicCard
  }
};
</script>

<style>
</style>