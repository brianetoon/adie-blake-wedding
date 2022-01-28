<template>
  <main class="home">
    <Banner title="Adrienne and Blake" class="main-banner" />
    <Section :content="story" />
    <Banner title="The Wedding" class="wedding-banner" />
    <Section :content="wedding" />
    <JoinUs />
  </main>
</template>

<script>
import store from '@/store.js'
import Banner from '../components/Banner.vue'
import Section from '../components/Section.vue'
import JoinUs from '../components/JoinUs.vue'

export default {
  components: { Banner, Section, JoinUs },
  setup() {
    const story = store.story
    const wedding = store.wedding

    return { story, wedding }
  }
}
</script>

<style>

</style>
