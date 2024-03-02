<template>
  <a-layout style="min-height: 100vh" v-if="isAuthenticated">
    <NavBar />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <!-- <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item> -->
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Simple CLMS ©2024
      </a-layout-footer>
    </a-layout>
  </a-layout>
  <div v-if="!isAuthenticated">
    <br />
    <br />
    <LogIn />
  </div>
</template>
<script setup>
import NavBar from "./components/Menus/NavBar.vue";
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import LogIn from "./components/Auth/LogIn.vue";
// const collapsed = ref(false);
// const selectedKeys = ref(['1']);
const isAuthenticated = ref(false); // Initialize with a default value

// Assume you have access to the store instance
const store = useStore();

// Watch for changes in store state and update the local ref accordingly
onMounted(() => {
  console.log(store.getters.isAuthenticated);
  // Watch for changes in store state and update the local ref accordingly
  store.watch(
    () => store.getters.isAuthenticated,
    (newVal) => {
      console.log(newVal);
      isAuthenticated.value = newVal;
    }
  );
});
</script>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>

<!-- <template>
 
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
