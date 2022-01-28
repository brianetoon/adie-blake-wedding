<template>
    <div class="grid">
        <div class="grid-image" v-for="(image, index) in images" :key="index">
            <img :src="require(`@/assets/images/${folder}/thumbnails/${image.thumb}`)"
                @click="handleClick(index)" >
        </div>
    </div>
    <transition name="lightbox" appear>
        <LightBox v-if="lightBoxImg"
                :image="lightBoxImg"
                :folder="folder"
                @next="nextImg"
                @close="lightBoxImg = null" />
    </transition>
</template>

<script>
import { ref } from '@vue/reactivity'
import LightBox from './LightBox.vue'
import { watch } from '@vue/runtime-core'

export default {
    components: { LightBox },
    props: ['images', 'folder'],
    setup(props) {
        const currentIndex = ref(null)
        const lightBoxImg = ref(null)

        const handleClick = (index) => {
            currentIndex.value = index
            lightBoxImg.value = props.images[currentIndex.value]
        }

        const nextImg = (n) => {
            currentIndex.value += n
            if (currentIndex.value < 0) {
                currentIndex.value = props.images.length - 1
            }
            if (currentIndex.value >= props.images.length) {
                currentIndex.value = 0
            }
            lightBoxImg.value = props.images[currentIndex.value]
        }

        // prevent scrolling if lightbox is open
        watch(lightBoxImg, () => {
            if (lightBoxImg.value) {
                document.body.classList.add('modal-open')
            } else {
                document.body.classList.remove('modal-open')
            }
        })

        return { handleClick, lightBoxImg, nextImg }
    }
}
</script>

<style>

</style>