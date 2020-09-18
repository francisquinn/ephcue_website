<template>
  <div>
    <!-- Filter -->
    <!-- Laptop/computer filter -->
    <v-container class="white pa-0 my-2" v-if="`${this.$vssWidth}` > 500">
      <v-card>
        <v-row class="mx-3">
          <v-col class="d-inline-flex">
            <span class="my-1" id="musicpage_title">Music</span>
            <v-spacer></v-spacer>
            <!--<div class="text-center mr-5 my-0">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text color=" black--text ma-0 pa-0" v-bind="attrs" v-on="on">Filter</v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      hi
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>-->
            <div id="maven-text" class="white my-1">
              <v-icon>{{search_icon}}</v-icon>
              <input
                type="search"
                autocomplete="off"
                id="search_box"
                v-model="search"
                placeholder="Search track"
              />
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <!-- Phone search button -->
    <v-container class="my-2" v-if="`${this.$vssWidth}` <= 500">
      <v-card>
        <v-row justify="center" align="center">
          <v-col class="text-center">
            <span id="musicpage_title">Music</span>
            <br />
            <v-btn text class="white" block @click="expand = !expand">
              <v-icon >{{search_icon}}</v-icon>
              <span id="maven-text" class="mx-1">Search</span>
            </v-btn>
            <v-expand-transition>
              <v-card id="maven-text" flat v-show="expand" height="50" class="mx-auto">
                <v-card-text>
                  <input
                    type="search"
                    autocomplete="off"
                    id="search_box_phone"
                    v-model="search"
                    placeholder="Search track"
                  />
                </v-card-text>
              </v-card>
            </v-expand-transition>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <!-- End of filter -->
    <!-- Grid of music -->
    <v-container>
      <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="music in filteredList" :key="music.id">
          <v-card>
            <v-responsive :aspect-ratio="10/8">
              <v-hover v-slot:default="{ hover }">
                <v-img :src="music.image" :lazy-src="music.image">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="transition-fast-in-fast-out white darken-2 v-card--reveal display-1 black--text"
                      style="height: 100%;"
                    >
                      <br />
                      <v-row>
                        <v-col id="track_hover" class="text-center">{{music.title}}</v-col>
                      </v-row>
                      <v-row>
                        <v-col class="text-center">
                          <router-link id="link" :to="`music/${music.id}`">
                            <v-btn id="maven-text" class="black white--text">
                              <span>View Track</span>
                              <v-icon>{{play}}</v-icon>
                            </v-btn>
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
    <v-container class="white" v-if="filteredList == false">
      <v-row>
        <v-col class="d-inline-flex">
          <v-row justify="center">
            <v-card tile class="white">
              <v-card-text class="text-center">
                <v-icon class="black--text">{{no_search}}</v-icon>
              </v-card-text>
            </v-card>
            <v-card id="maven-text" tile class="black">
              <v-card-text class="text-center white--text">
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
import { mdiPlay } from "@mdi/js";
export default {
  props: {
    info: {
      type: Object,
    },
  },
  data: () => ({
    search: "",
    search_icon: mdiMagnify,
    no_search: mdiCloseCircle,
    play: mdiPlay,
    expand: false,
  }),
  mixins: [VueScreenSize.VueScreenSizeMixin],
  computed: {
    filteredList() {
      return this.info.music.filter((track) => {
        return track.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
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
  padding: 3px;
  border-bottom: 1px solid lightgray;
}
#search_box_phone {
  outline: 0;
  padding: 5px;
  width: 90%;
  border-bottom: 1px solid lightgray;
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