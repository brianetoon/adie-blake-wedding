<template>
    <section>
        <div class="text-wrapper">
            <h2>{{ content.title }}</h2>
            <p>{{ content.text }}</p>
        </div>
        
        <Carousel :directory="content.directory" :images="content.images" />
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

</style>