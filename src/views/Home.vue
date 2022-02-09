<template>
  <main class="home">
    <Banner :content="story" />
    <Section :content="story" />
    <Banner :content="wedding" />
    <Section :content="wedding" />
    <Banner :content="join" />
    <Section :content="join" />
  </main>
</template>

<script>
import store from '@/store.js'
import Banner from '../components/Banner.vue'
import Section from '../components/Section.vue'

export default {
  components: { Banner, Section },
  setup() {
    const story = store.story
    const wedding = store.wedding
    const join = store.join

    return { story, wedding, join }
  }
}
</script>

<style>

</style>
