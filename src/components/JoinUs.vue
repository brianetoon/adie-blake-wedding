<template>
    <div class="join-us">
        <div class="content">
            <img src="@/assets/images/banners/join_us_narrow.jpg">
            <!-- <h1>Join Us!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id lorem at lectus rutrum suscipit. Duis vitae nunc accumsan, mollis sem a, pharetra sem. In nec est lobortis, efficitur est non, mattis diam. Praesent fringilla et arcu a ultricies. Nulla facilisi. Curabitur volutpat ligula gravida lobortis laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.join-us {
    /* background-image: url('../assets/images/banners/join_us.webp');
    background-size: cover;
    background-position: bottom; */
}
.join-us img {
    width: 100%;
    display: block;

}
.join-us h1 {
    margin-bottom: 20px;
}
.join-us p {
    color: white;
}
.join-us .content {
    /* padding: 150px 40px; */
    /* max-width: 500px;
    margin: 0 auto; */
}

@media screen and (min-width: 680px) {
    .join-us .content {
        /* max-width: 550px;
        padding: 200px 0; */
    }
}
</style>