<template>
  <div>
    <ImageTitleBox :info="Data"></ImageTitleBox>
    <br />
    <About :info="Data"></About>
    <br />
    <Social :info="Data"></Social>
    <br />
    <Music :info="Data"></Music>
  </div>
</template>

<script>
import ImageTitleBox from "@/components/ImageTitleBox";
import About from "@/components/About";
import Social from "@/components/Social";
import Music from "@/components/MusicHome";
import Data from "../data/data";

export default {
  data(){
    return{
      Data
    }
  },
  components: {
    ImageTitleBox,
    About,
    Social,
    Music
  }
};
</script>

<style>

</style>