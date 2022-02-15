<template>
    <Modal @close="toggleModal" v-if="showingModal"/>

    <section id="join-us">
        <div class="join-text">
            <h2>{{ content.title }}</h2>
            <p v-for="(para, i) in content.text" :key="i">
                {{ para }}
            </p>
            <button @click="toggleModal">Enter Your Email</button>
        </div>
        <img src="../assets/images/join_us/adie_and_blake.webp" class="adie-and-blake">
        <img src="../assets/images/join_us/ab.png" class="ab-icon">
    </section>
</template>

<script>
import Modal from './modal/Modal.vue'
import { ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

export default {
    props: ['content'],
    components: { Modal },
    setup() {
        const showingModal = ref(false)

        watch(showingModal, () => {
            if (showingModal.value === true) {
                document.body.classList.add('modal-open')
            } else {
                document.body.classList.remove('modal-open')
            }
        })

        const toggleModal = () => {
            if (showingModal.value === false) {
                showingModal.value = true
            } else {
                showingModal.value = false
            }
        }

        return { toggleModal, showingModal }
    }
}
</script>

<style>
#join-us {
    padding: 0 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}
.join-text {
    max-width: 460px;
    margin: 0 auto;
    grid-column: span 2;
}
.adie-and-blake {
    grid-column: span 2;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 5px;
}
.ab-icon {
    max-width: 180px;
    grid-column: span 2;
    margin: 0 auto;
}
.modal-open {
  overflow: hidden;
}

@media screen and (min-width: 680px) {
    #join-us {
        padding: 0 40px;
        gap: 50px;
    }
    .join-text {
        max-width: 660px;
    }
    .ab-icon {
        max-width: 200px;
    }
}

@media screen and (min-width: 1080px) {
    #join-us {
        gap: 60px;
    }
    .join-text {
        grid-column: span 1;
    }
    .adie-and-blake {
        grid-column: span 1;
        max-width: 100%;
    }
    .ab-icon {
        max-width: 230px;
    }
}

@media screen and (min-width: 1200px) {
    #join-us {
        gap: 80px;
    }
    .ab-icon {
        max-width: 230px;
    }
}
@media screen and (min-width: 1450px) {
    #join-us {
        gap: 100px;
    }
    .ab-icon {
        max-width: 280px;
    }
}
</style>