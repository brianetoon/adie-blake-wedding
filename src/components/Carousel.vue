<template>
    <div class="carousel">
        <img src="@/assets/icons/left_arrow.svg" @click="next(-1)" class="arrow">
        <div class="slide">
            <img src="@/assets/images/our_story/low_quality/1.jpg" class="placeholder">
            <transition :name="transitionName">
                <img :src="require(`@/assets/images/${directory}/low_quality/${currentImage}`)" 
                    :data-src="require(`@/assets/images/${directory}/high_quality/${currentImage}`)"
                    class="carousel-image lazyload" :key="currentIndex">
            </transition>
        </div>
        <img src="@/assets/icons/right_arrow.svg" @click="next(1)" class="arrow">
        <p class="caption">Photo {{ currentIndex + 1 }} of {{ images.length }}</p>
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
        const transitionName = ref("slide-next")

        const next = (n) => {
            n === 1
                ? transitionName.value = "slide-next"
                : transitionName.value = "slide-prev"

            currentIndex.value += n

            if (currentIndex.value < 0) {
                currentIndex.value = images.value.length -1
            }
            if (currentIndex.value >= images.value.length) {
                currentIndex.value = 0
            }
            currentImage.value = images.value[currentIndex.value]
        }
        
        return { currentImage, currentIndex, next, transitionName }
    }
}
</script>

<style>
.carousel {
    width: 100%;
    margin: 50px auto;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
}
.slide {
    width: calc(100% - 80px);
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    z-index: 99;
}
.placeholder {
    width: 100%;
    visibility: hidden;
    display: block;
}
.carousel-image {
    margin: 0 auto;
    border-radius: 5px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.arrow {
    width: 40px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
.caption {
    color: var(--primary);
    font-size: 20px;
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
}

@media screen and (min-width: 680px) {
    .carousel {
        margin: 60px auto;
    }
}
@media screen and (min-width: 1200px) {
    .caption {
        font-size: 22px;
        bottom: -40px;
    }
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
    transition: transform 0.4s ease-in-out;
}
.slide-next-enter-from {
    transform: translate(100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
    transition: transform 0.4s ease-in-out;
}
.slide-prev-enter-from {
    transform: translate(-100%);
}
</style>