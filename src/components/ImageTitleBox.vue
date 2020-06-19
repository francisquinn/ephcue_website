<template>
  <!-- Container for image and title box -->
  <v-container class="red">
    <v-row>
      <!-- Image box -->
      <v-col cols="12" md="6" sm="6">
        <v-card flat>
          <v-responsive :aspect-ratio="16/14">first</v-responsive>
        </v-card>
      </v-col>
      <!-- Title box -->
      <v-col cols="12" md="6" sm="6">
        <v-card flat>
          <v-responsive :aspect-ratio="16/14">second</v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>