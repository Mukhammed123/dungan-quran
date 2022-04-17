<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="nav-bar">
      <router-link to="/">Quran</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style>
@import "@/assets/base.css";
.nav-bar {
  padding: 1em 0;
  background-color: gray;
}
</style>
