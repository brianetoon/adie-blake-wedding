<template>
    <div class="banner" :class="content.banner">
        <h1>{{ content.banner_title }}</h1>
    </div>
</template>

<script>
export default {
    props: ['content']
}
</script>

<style>
/* Dynamic Classes */
.main-banner {
    background-image: url('../assets/images/banners/main.webp');
}
.wedding-banner {
    background-image: url('../assets/images/banners/wedding.webp');
}
.join-banner {
    background-image: url('../assets/images/banners/join_us.jpg');
}
</style>