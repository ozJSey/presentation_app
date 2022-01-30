<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import PresentationPage from "./components/PresentationPage.vue";
</script>

<template>
  <router-view v-slot="{ Component }" :key="$route.fullPath">
    <transition appear name="native">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
  <router-link v-if="$route.fullPath === '/'" to="/welcome"
    >Welcome, click here to start your presentation.</router-link
  >
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
body {
  margin: 0;
  padding: 0;
  background: #6667ab;
}
:not(:root):fullscreen::backdrop {
  background: #6667ab;
  backdrop-filter: blur(5px) drop-shadow(4px 4px 10px blue);
}
.native-enter-active,
.native-leave-active {
  transition: opacity 0.1s, transform 1s;
}

.native-enter-from,
.native-leave-to {
  perspective: 400px; /* Remove this if you don't want the 3D effect */
  opacity: 0;
  transform: translateY(500px);
}
</style>
