<template>
    <section :id="content.id">
        <div class="text-wrapper">
            <h2>{{ content.title }}</h2>
            <p v-for="(para, i) in content.text" :key="i">
                {{ para }}
            </p>
            <img :src="require(`@/assets/images/${content.icon}`)"
                v-if="content.icon" class="ab-icon" >
        </div>
        
        <div class="media">
            <Carousel :directory="content.directory" :images="content.images" 
                v-if="content.images" />
            <img :src="require(`@/assets/images/${content.image}`)"
                v-if="content.image" class="adie-and-blake">
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
.text-wrapper p:not(:last-child) {
    margin-bottom: 25px;
}

#the-wedding {
    flex-direction: row-reverse;
}

/* Dynamic Classes */
.ab-icon {
    max-width: 180px;
    margin-top: 40px;
}
.adie-and-blake {
    width: 100%;
    border-radius: 5px;
    display: none;
}

@media screen and (min-width: 1080px) {
    #join-us .text-wrapper {
        width: 50%;
        padding-right: 60px;
    }
    #join-us .media {
        width: 50%;
    }
    .adie-and-blake {
        display: block;
    }
}
</style>