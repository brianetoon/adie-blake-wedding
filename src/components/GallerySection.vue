<template>
    <section :id="content.id">
        <div class="text-wrapper">
            <h2>{{ content.title }}</h2>
            <p v-for="(para, i) in content.text" :key="i">
                {{ para }}
            </p>
        </div>
        
        <div class="media">
            <Carousel :directory="content.directory" :images="content.images" />
        </div>
    </section>
</template>

<script>
import Carousel from './Carousel.vue'

export default {
    props: ['content'],
    components: { Carousel }
}
</script>

<style>
#the-wedding {
    flex-direction: row-reverse;
}
</style>