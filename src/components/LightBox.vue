<template>
    <div class="backdrop">
        <div class="lightbox-wrap">
        
            <i class="material-icons close" @click="handleClose">clear</i>
            <i class="material-icons back" @click="next(-1)">chevron_left</i>
            <transition name="image" mode="out-in">
                <img :src="require(`@/assets/images/${folder}/fullsize/${image.lqi}`)"
                    :data-src="require(`@/assets/images/${folder}/fullsize/${image.hqi}`)"
                    :key="image" class="lazyload">
                <!-- <img :src="require(`@/assets/images/${folder}/fullsize/${image.hqi}`)" :key="image"> -->
            </transition>
            <i class="material-icons forward" @click="next(1)">chevron_right</i>

        </div>
    </div>
</template>

<script>
export default {
    props: ['image', 'folder'],
    setup(props, context) {
        const handleClose = () => context.emit('close')
        const next = (n) => context.emit('next', n)

        return { handleClose, next }
    }
}
</script>

<style>
.backdrop {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
}
.lightbox-wrap {
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1020px;
    margin: 0 auto
}
.backdrop img {
    position: relative;
    display: block;
    max-width: 80%;
    max-height: 80%;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
}
i {
    -webkit-tap-highlight-color: transparent;
}
i.material-icons {
    /* position: absolute; */
    cursor: pointer;
    color: white;
}
.close {
    position: absolute;
    font-size: 32px;
    top: 5px;
    right: 5px;
}
.back, .forward {
    font-size: 40px;
}
.back {
    left: 0px;
}
.forward {
    right: 0px;
}

/* Transition Classes */
.image-enter-from {
    right: -50%;
    transform: scale(0.4);
    opacity: 0;
}
.image-enter-to {
    right: 0;
    transform: scale(1);
    opacity: 1;
}
.image-leave-from {
    left: 0;
    transform: scale(1);
    opacity: 1;
}
.image-leave-to {
    left: -50%;
    transform: scale(0.4);
    opacity: 0;
}
.image-enter-active, .image-leave-active {
    transition: all ease-in-out 0.4s;
}
</style>