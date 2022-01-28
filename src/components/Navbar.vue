<template>
    <nav class="navbar">
        <ul class="links">
            <li v-for="(link, i) in links" :key="i" class="link">
                {{ link.name }}
            </li>
        </ul>
    </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const links = ref([
            { name: 'Our Story', anchor: '#' },
            { name: 'The Wedding', anchor: '#' },
            { name: 'Join Us', anchor: '#' },
        ])

        return { links }
    }
}
</script>

<style>
.navbar {
    padding: 10px;
    background: var(--primary);
    width: 100%;
    margin: 0 auto;
    position: -webkit-sticky;
    position: sticky;
    z-index: 1;
    top: 0;
    -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
}
.links {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    margin: 0 auto;
}
.link {
    font-family: 'goldenbook', serif;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
}
@media screen and (min-width: 680px) {
    .links {
        max-width: 480px;
    }
    .link {
        font-size: 20px;
    }
}
@media screen and (min-width: 900px) {
    .links {
        max-width: 500px;
    }

}
</style>