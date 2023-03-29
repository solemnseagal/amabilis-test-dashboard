<template>
  <div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import './assets/theme/app.scss'

export default {
  name: 'App',
  components: {
  }

}
</script>

<style>
</style>
