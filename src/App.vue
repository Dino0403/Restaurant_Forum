<template>
  <div id="restuarent-forum">
    <Navbar />
    <main class="bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar: Navbar,
  },
};
</script>

