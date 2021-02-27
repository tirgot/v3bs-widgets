<template>
  <Header />
  <div class="app-wrapper">
    <div class="app-content pt-3 p-md-3 p-lg-4">
      <router-view />
    </div>
    <Footer />
  </div>
  <GlobalStoreToastWatcher />
</template>


<script>
import NavSide from "./NavSide.vue";
import GlobalStoreToastWatcher from "../../widgets/soul/GlobalStoreToastWatcher.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: 'Layout',
  components: {Footer, Header, GlobalStoreToastWatcher, NavSide},

}
</script>
