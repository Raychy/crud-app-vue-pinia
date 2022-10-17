<script setup>
 import Header from "./components/Header.vue";
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Search from "./components/Search.vue";
import NewsLetter from "./components/NewsLetter.vue";
</script>



<template>
  <div class="header-height-fix"></div>
  <Header />
  <Search />
  <!-- <header class="navbar">
      <nav>
        <RouterLink to="/">Posts</RouterLink>
        <RouterLink to="/authors">Authors</RouterLink>
      </nav>
 
  </header> -->

  <RouterView />
  <NewsLetter />
  <Footer/>
  <!-- scroll-to-top -->
<button class="scroll-to-top">
  <i class="ti ti-arrow-up"></i>
</button>
<!-- end footer -->
</template>


