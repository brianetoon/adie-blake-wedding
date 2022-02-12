<template>
  <Navbar />
  <main class="home">
    <Banner :content="story" />
    <GallerySection :content="story" />
    <Banner :content="wedding" />
    <GallerySection :content="wedding" />
    <Banner :content="join" />
    <JoinUs :content="join" />
  </main>
</template>

<script>
import store from '@/store.js'
import Navbar from '../components/Navbar.vue'
import Banner from '../components/Banner.vue'
import GallerySection from '../components/GallerySection.vue'
import JoinUs from '../components/JoinUs.vue'

export default {
  components: { Navbar, Banner, GallerySection, JoinUs },
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
