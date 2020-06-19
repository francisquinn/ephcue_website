<template>
  <v-container class="red">
    <v-row wrap>
      <v-col cols="12" md="4" sm="6" lg="3" v-for="person in test" :key="person.name">
        <v-card>
          <v-responsive :aspect-ratio="10/8">{{person.name}}</v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      test:[
        {name: 'steve'},
        {name: 'bill'},
        {name: 'paul'}
      ]
    }
  }
};
</script>

<style>
</style>