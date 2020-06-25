<template>
  <v-container class="red">
    <v-row wrap>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="music in info.music" :key="music.id">
        <v-card>
          <v-responsive :aspect-ratio="10/8">
            <v-hover v-slot:default="{ hover }">
              <v-img :src="music.image">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out white darken-2 v-card--reveal display-1 black--text"
                    style="height: 100%;"
                  >
                    <br />
                    <v-row>
                      <v-col class="text-center">{{music.title}}</v-col>
                    </v-row>
                    <v-row>
                      <v-col class="text-center">
                        <router-link :to="`music/${music.id}`">
                          <v-btn class="black white--text">View Track</v-btn>
                        </router-link>
                      </v-col>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  },
  data: () => ({
  
  })
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>