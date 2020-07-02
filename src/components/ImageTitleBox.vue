<template>
  <!-- Container for image and title box -->
  <v-container class="red">
    <v-row>
      <!-- Image box -->
      <v-col cols="12" md="6" sm="6">
        <v-card flat>
          <v-responsive :aspect-ratio="16/14">
            <v-img :src="info.box_image"></v-img>
          </v-responsive>
        </v-card>
      </v-col>
      <!-- Title box -->
      <v-col cols="12" md="6" sm="6">
        <v-card flat class="justify-center">
          <v-card-text class="text-center">
            <div class="display-1">{{info.box_title}}</div>
            <br />
            <p>Official Audio</p>
            <p>OUT NOW</p>
            <br />
            <Stream :id='1'></Stream>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Stream from "@/components/Stream";
export default {
  components: {
    Stream
  },
  props: {
    info: {
      type: Object
    }
  }
};
</script>

<style>
</style>