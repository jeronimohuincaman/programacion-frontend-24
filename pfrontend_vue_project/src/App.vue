<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">LoginPage</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
