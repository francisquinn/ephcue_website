<template>
  <div>
    <FilterMusic></FilterMusic>
    <MusicCard></MusicCard>
  </div>
</template>

<script>
import FilterMusic from "@/components/Filter";
import MusicCard from "@/components/MusicDisplay";
export default {
  components: {
    FilterMusic,
    MusicCard
  }
};
</script>

<style>
</style>