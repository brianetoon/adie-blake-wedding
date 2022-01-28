<template>
    <div class="carousel">
        <img src="@/assets/icons/left_arrow.svg" @click="next(-1)" class="arrow">
        <img :src="require(`@/assets/images/${directory}/${currentImage}`)" class="carousel-image" >
        <img src="@/assets/icons/right_arrow.svg" @click="next(1)" class="arrow">
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ['directory', 'images'],
    setup(props) {
        const images = ref(props.images)
        const currentIndex = ref(0)
        const currentImage = ref(images.value[currentIndex.value])

        const next = (n) => {
            currentIndex.value += n

            if (currentIndex.value < 0) {
                currentIndex.value = images.value.length -1
            }
            if (currentIndex.value >= images.value.length) {
                currentIndex.value = 0
            }
            currentImage.value = images.value[currentIndex.value]
        }
        
        return { currentImage, next }
    }
}
</script>

<style>
.carousel {
    width: 100%;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 520px;
}
.carousel-image {
    margin: 0 auto;
    border-radius: 5px;
    width: calc(100% - 80px);
}
.arrow {
    width: 40px;
    cursor: pointer;
}

@media screen and (min-width: 680px) {
    .carousel {
        margin: 60px auto;
        max-width: 550px;
    }
}
</style>