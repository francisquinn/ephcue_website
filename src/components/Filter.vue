<template>
  <div>
      <!-- Laptop/computer filter -->
    <v-container class="yellow pa-0 my-2 text-center" v-if="`${this.$vssWidth}` > 500">
      <v-row class="mx-3" >
        <v-col>Filter = {{this.$vssWidth}}</v-col>
      </v-row>
    </v-container>
    <!-- Phone filter button -->
    <v-container class="blue" v-if="`${this.$vssWidth}` <= 500">
      <v-row justify="center" align="center">
        <v-col>
          <v-btn block @click="expand = !expand">Filter</v-btn>
          <v-expand-transition>
            <v-card v-show="expand" height="100" class="mx-auto">Search and stuff</v-card>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
export default {
  data: () => ({
    expand: false
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin]
};
</script>

<style>
</style>