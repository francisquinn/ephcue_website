<template>
  <div>
    <ImageTitleBox></ImageTitleBox>
    <br>
    <About></About>
    <br>
    <Music></Music>
    <br>
    <Social></Social>
    <br>
    <Newsletter></Newsletter>
  </div>
</template>

<script>
import ImageTitleBox from "@/components/ImageTitleBox";
import About from "@/components/About";
import Social from '@/components/Social';
import Music from '@/components/MusicHome';
import Newsletter from '@/components/Newsletter';



export default {
  components: {
    ImageTitleBox,
    About,
    Social,
    Music,
    Newsletter,
    
  }
};
</script>

<style scoped>
</style>