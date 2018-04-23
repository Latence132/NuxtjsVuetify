<template>
 <div class="Content">
  <div class="container">
   <h1 class="Content__Title">{{ $t('about.title') }}</h1>
    <img :src="thumbnailUrl" />
    <p><nuxt-link to="/">Home</nuxt-link>{{ $t('about.introduction') }}</p>
    <p>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button><br>
      <nuxt-link to="/">Home</nuxt-link>
    </p>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  transition: 'bounce',
  asyncData () {
    const nb = Math.max(1, Math.round(Math.random() * 10))
    return axios.get(`https://jsonplaceholder.typicode.com/photos/${nb}`).then(res => res.data)
  },
  head () {
    return { title: this.$t('about.title') }
  }
}
</script>

<style>
.container {
  text-align: center;
  padding-top: 100px;
  font-family: sans-serif;
}
</style>
 


