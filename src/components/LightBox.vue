<template>
    <div class="backdrop">
        <i class="material-icons close" @click="handleClose">clear</i>
        <i class="material-icons back" @click="next(-1)">chevron_left</i>
        <transition name="image" mode="out-in">
            <img :src="require(`@/assets/images/${folder}/fullsize/${image}`)" 
                :key="image">
        </transition>
        <i class="material-icons forward" @click="next(1)">chevron_right</i>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
}
.backdrop img {
    position: relative;
    margin: 0 auto;
    display: block;
    max-width: 80%;
    max-height: 80%;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
}
i.material-icons {
    position: absolute;
    cursor: pointer;
    color: white;
}
.close {
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