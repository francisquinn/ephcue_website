<template>
  <div>
    <!-- Filter -->
    <!-- Laptop/computer filter -->
    <v-container class="white pa-0 my-2" v-if="`${this.$vssWidth}` > 500">
      <v-row class="mx-3">
        <v-col class="d-inline-flex">
          <span class="my-1" id="musicpage_title">Music</span>
          <v-spacer></v-spacer>
          <div id="search_div" class="white my-1">
            <v-icon>{{search_icon}}</v-icon>
            <input
              type="text"
              autocomplete="off"
              id="search_box"
              v-model="search"
              placeholder="Search track ..."
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- Phone filter button -->
    <v-container class="blue my-2" v-if="`${this.$vssWidth}` <= 500">
      <v-row justify="center" align="center">
        <v-col class="text-center">
          <span class="pa-4">Music</span>
          <div class="white pa-1 my-4">
            <v-icon>{{search_icon}}</v-icon>
            <input
              type="text"
              autocomplete="off"
              id="search_box"
              v-model="search"
              placeholder="Search title.."
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- End of filter -->
    <v-container class="white">
      <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="music in filteredList" :key="music.id">
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
    <!-- No Search Results found container -->
    <v-container class="zero blue" v-if="filteredList == false">
      <v-row>
        <v-col class="d-inline-flex">
          <v-row justify="center">
            <v-card tile class="white">
              <v-card-text class="text-center">
                <v-icon>{{no_search}}</v-icon>
              </v-card-text>
            </v-card>
            <v-card tile class="pink">
              <v-card-text class="text-center">
                <span>No search results found</span>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiMagnify } from "@mdi/js";
import { mdiCloseCircle } from "@mdi/js";
export default {
  props: {
    info: {
      type: Object
    }
  },
  data: () => ({
    search: "",
    search_icon: mdiMagnify,
    no_search: mdiCloseCircle,
    expand: false
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin],
  computed: {
    filteredList() {
      return this.info.music.filter(track => {
        return track.title.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  }
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
#search_box {
  outline: 0;
  border-bottom: 1px solid #999999;
  padding: 3px;
}
@font-face {
  font-family: "Galada";
  src: url("/Galada-Regular.ttf");
}
#musicpage_title {
  font-family: Galada;
  font-size: 30px;
}
</style>