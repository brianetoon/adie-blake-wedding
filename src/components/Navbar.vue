<template>
    <nav class="navbar">
        <ul class="links">
            <li v-for="(link, i) in links" :key="i" class="link"
                @click="scroll(link.anchor)" >
                    {{ link.name }}
            </li>
        </ul>
    </nav>
</template>

<script>
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin.js'
import { ref } from '@vue/reactivity'

export default {
    setup() {
        const links = ref([
            { name: 'Our Story', anchor: 0 },
            { name: 'The Wedding', anchor: '.wedding-banner' },
            { name: 'Join Us', anchor: '.join-banner' },
        ])

        gsap.registerPlugin(ScrollToPlugin)

        const scroll = (anchor) => {
            gsap.to(window, {duration:.5, scrollTo:{y: anchor, offsetY:60}})
        }

        return { links, scroll }
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
    z-index: 999;
    top: 0;
    -moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
}
.links {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    max-width: 420px;
    margin: 0 auto;
}
.link {
    font-family: 'goldenbook', serif;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}
@media screen and (min-width: 680px) {
    .links {
        max-width: 520px;
    }
    .link {
        font-size: 20px;
    }
}
@media screen and (min-width: 1040px) {
    .links {
        max-width: 560px;
    }
}
@media screen and (min-width: 1200px) {
    .links {
        max-width: 600px;
    }
    .link {
        font-size: 22px;
    }
}
</style>