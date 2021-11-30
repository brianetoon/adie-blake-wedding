<template>
    <nav class="navbar">
        <div class="nav-content">
            <img src="@/assets/images/ab_text.png" alt="logo">
            <ul class="links">
                <li class="link">Our Story</li>
                <li class="link">The Wedding</li>
                <li class="link">Join Us</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    text-align: center;
    padding: 20px 10px;
    background: white;
}
.nav-content {
    max-width: 480px;
    margin: 0 auto;
}
.navbar img {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
ul.links {
    padding: 10px 20px;
    margin: 0;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
}
li.link {
    text-transform: uppercase;
    color: #4a5466;
    font-size: 22px;
}
</style>