<template>
    <div class="grid">
        <div class="grid-image" v-for="(image, index) in images" :key="index">
            <img :src="require(`@/assets/images/${folder}/thumbnails/${image}`)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['images', 'folder'],
    setup(props) {
        // console.log(props.images)
        // console.log(props.folder)
    }
}
</script>

<style>

</style>