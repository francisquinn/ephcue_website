<template>
  <div>
    <ImageTitleBox :info="Data"></ImageTitleBox>
    <br />
    <About :info="Data"></About>
    <br />
    <Music :info="Data"></Music>
    <br />
    <Social :info="Data"></Social>
    <br />
    <Newsletter :info="Data"></Newsletter>
  </div>
</template>

<script>
import ImageTitleBox from "@/components/ImageTitleBox";
import About from "@/components/About";
import Social from "@/components/Social";
import Music from "@/components/MusicHome";
import Newsletter from "@/components/Newsletter";
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
    Music,
    Newsletter
  }
};
</script>

<style scoped>
</style>