<template>
  <nav>
    <!-- Large screen laptop/computer navbar -->
    <v-app-bar color="white" flat v-if="`${this.$vssWidth}` > 500">
      <v-toolbar-title>Ephcue {{this.$vssWidth}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="pa-2" v-for="page in pages" :key="page.text">
        <router-link id="link" :to="`${page.route}`">
          <v-btn id="button" text>{{page.text}}</v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <!-- Small screen navbar with a drawer -->
    <v-app-bar color="white" flat v-if="`${this.$vssWidth}` <= 500">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Ephcue {{this.$vssWidth}}</v-toolbar-title>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-container>
        <v-list>
          <v-list-item v-for="page in pages" :key="page.text" router :to="page.route">
            <v-list-item-content>
              <v-list-item-title class="black--text">{{page.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list> 
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import VueScreenSize from 'vue-screen-size';
export default {
  
  data() {
    return {
      drawer: false,
      pages: [
        { text: "Home", route: "/" },
        { text: "Music", route: "/music" },
        { text: "Contact", route: "/contact"}
      ]
    };
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
};
</script>

<style scoped>
/*.router-link-exact-active {
  border-bottom: 4px solid black;
}*/
#link{
  text-decoration: none;
  padding: 5px;
}
#button:hover{
  border-bottom: 4px solid black;
}
</style>