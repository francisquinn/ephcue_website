<template>
  <nav>
    <!-- Large screen laptop/computer navbar -->
    <v-app-bar app dense fixed color="white" flat v-if="`${this.$vssWidth}` > 500">
      <router-link tag="a" id="title_link" to="/">
        <v-toolbar-title>
          <span id="header_text_style">Ephcue</span>
          {{this.$vssWidth}}
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="pa-2" v-for="page in pages" :key="page.text">
        <router-link id="link" :to="`${page.route}`">
          <v-btn id="button" text>{{page.text}}</v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <!-- Small screen navbar with a drawer -->
    <v-app-bar app dense fixed color="white" flat v-if="`${this.$vssWidth}` <= 500">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link tag="a" id="title_link" to="/">
        <v-toolbar-title>
          <span id="header_text_style">Ephcue</span>
          {{this.$vssWidth}}
        </v-toolbar-title>
      </router-link>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list-item-title class="pa-3">
        <span id="header_text_style">Ephcue</span>
      </v-list-item-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="page in pages" :key="page.text" router :to="page.route">
          <v-list-item-icon>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="black--text">{{page.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-card flat class="pa-2">
          <v-card-text class="text-center">
            <span id="date">
              {{ new Date().getFullYear() }} —
              <strong>Ephcue</strong>
            </span>
          </v-card-text>
        </v-card>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import VueScreenSize from "vue-screen-size";
import { mdiHome } from '@mdi/js'; 
import { mdiMusicCircle } from '@mdi/js'; 
import { mdiEmail } from '@mdi/js';
export default {
  data() {
    return {
      drawer: false,
      pages: [
        { icon: mdiHome, text: "Home", route: "/" },
        { icon: mdiMusicCircle, text: "Music", route: "/music" },
        { icon: mdiEmail, text: "Contact", route: "/contact" }
      ]
    };
  },
  mixins: [VueScreenSize.VueScreenSizeMixin]
};
</script>

<style scoped>
#link {
  text-decoration: none;
  padding: 5px;
}
#title_link {
  text-decoration: none;
  padding: 5px;
  color: black;
}
#button:hover {
  border-bottom: 4px solid black;
}
@font-face {
  font-family: "Galada";
  src: url("/Galada-Regular.ttf");
}
#header_text_style {
  font-family: Galada;
  font-size: 30px;
}
</style>