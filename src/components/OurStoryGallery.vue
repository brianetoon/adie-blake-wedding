<template>
    <div class="grid">
        <div class="grid-image" v-for="(image, index) in images" :key="index">
            <img :src="require(`@/assets/images/our_story/${image}`)">
        </div>
    </div>
</template>

<script>
export default {
    props: ['images'],
    setup(props) {
        console.log(props.images)
    }
}
</script>

<style>
.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 12px;
    padding: 10px 0;
}
.grid-image img {
    display: block;
    width: 100%;
    /* height: 100%; */
}
.our-story .grid-image:nth-child(1),
.our-story .grid-image:nth-child(2) {
    grid-column: span 3;
}
.our-story .grid-image:nth-child(3) {
    grid-column: span 4;
    grid-row: 2/4;
}
.our-story .grid-image:nth-child(4) {
    grid-column: span 2;
}
.our-story .grid-image:nth-child(5) {
    grid-column: span 2;
}
.our-story .grid-image:nth-child(6),
.our-story .grid-image:nth-child(7) {
    grid-column: span 3;
}
</style>