<template>
  <div>
    <!-- Large screen -->
    <v-container class="my-2" v-if="`${this.$vssWidth}` > 550">
      <v-card>
      <v-row class="mx-3">
        <v-col class="text-center">
          <span id="comp_title" class="pa-1">Contact me</span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row class="mx-3">
        <v-col class="d-inline-flex">
          <v-row justify="center">
            <v-card tile class="white">
              <v-card-text class="text-center">
                <v-icon class="black--text">{{email}}</v-icon>
              </v-card-text>
            </v-card>
            <v-card tile class="black">
              <v-card-text class="text-center white--text">
                <span>ephcue@gmail.com</span>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      </v-card>
    </v-container>

    <!-- Small screen -->
    <v-container class="blue pa-0 my-2" v-if="`${this.$vssWidth}` <= 550">
      <v-row class="green mx-3">
        <v-col class="text-center">
          <span class="pa-1">Contact me</span>
        </v-col>
      </v-row>
      <v-row class="purple mx-3">
        <v-col class="d-inline-flex">
          <v-row justify="center">
            <v-card class="white">
              <v-card-text class="text-center">
                <v-icon>{{email}}</v-icon>
              </v-card-text>
            </v-card>
            <v-card class="pink">
              <v-card-text class="text-center">ephcue@gmail.com</v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiEmailOutline } from "@mdi/js";
export default {
  data: () => ({
    email: mdiEmailOutline
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin]
};
</script>

<style>
</style>