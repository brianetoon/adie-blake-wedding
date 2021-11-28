<template>
    <div class="our-story">
        <div class="content">
            <img src="@/assets/images/our_story.png" alt="our_story" class="title">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem at lectus rutrum suscipit. Duis vitae nunc accumsan, mollis sem a, pharetra sem. In nec est lobortis, efficitur est non, mattis diam. Praesent fringilla et arcu a ultricies. Nulla facilisi. Curabitur volutpat ligula gravida lobortis laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <p>Pellentesque faucibus nibh felis, a hendrerit ante semper eu. Integer quis posuere lectus. Aliquam sapien dui, molestie sit amet nibh in, fringilla ultrices ipsum. Integer auctor nisl libero, sed efficitur sapien sagittis sed. Donec in tristique dolor. Suspendisse potenti.</p>
            <OurStoryGallery :images="images" />
        </div>
    </div>
</template>

<script>
import store from '@/store.js'
import OurStoryGallery from './OurStoryGallery.vue'

export default {
    components: { OurStoryGallery },
    setup() {
        const images = store.our_story

        return { images }
    }
}
</script>

<style>
.our-story {
    text-align: center;
    padding: 20px 30px;
    background-color: #ced2fb;
    /* background: rgb(2, 9, 49); */

}
.our-story .title {
    width: 100%;
    padding: 10px;
    margin-left: 10px;
    /* margin: 10px 0; */
    box-sizing: border-box;
    max-width: 220px;
}
</style>