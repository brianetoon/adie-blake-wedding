<template>
    <div class="backdrop" @click.self="handleClose">
        <div class="modal">
            <i class="material-icons close" @click="handleClose">clear</i>
            <Transition name="fade" mode="out-in">
                <EmailForm @success="handleSuccess" v-if="!success" />
                <Success :contact="contact" v-else />
            </Transition>
        </div>
    </div>
</template>

<script>
import EmailForm from './EmailForm.vue'
import Success from './Success.vue'
import { onMounted, ref } from '@vue/runtime-core'
import gsap from 'gsap'

export default {
    components: { EmailForm, Success },
    setup(props, { emit }) {
        const close = () => emit('close')
        const success = ref(false)
        const contact = ref(null)

        let animation

        const handleClose = () => {
            animation.reverse()
        }

        onMounted(() => {
            gsap.set('.backdrop', {opacity:0})
            gsap.set('.modal', {y:-300, opacity:0})
            animation = gsap.timeline({duration:0.3, onReverseComplete:close})
                .to('.backdrop', {opacity:1})
                .to('.modal', {y:0, opacity:1, ease:'back'}, '-=0.2')
        })

        const handleSuccess = (_contact) => {
            contact.value = _contact
            success.value = true
        }

        return { handleClose, handleSuccess, success, contact }
    }
}
</script>

<style>
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.65);
    width: 100%;
    height: 100%;
    z-index: 9999;
    padding: 20px;
    display: flex;
    align-items: center;
}
.modal {
    width: 100%;
    max-width: 600px;
    background: white;
    border-radius: 10px;
    margin: 0 auto;
    padding:  50px 15px 30px;
    position: relative;
}
.modal h2 {
    font-family: 'mr-eaves-sans', sans-serif;
    font-size: 46px;
    white-space: normal;
}
.close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
    color: gray;
    cursor: pointer;
}
.close:hover {
    color: var(--primary);
}

/* Transition Classes */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}

@media screen and (min-width: 440px) {
    .backdrop {
        padding: 30px;
    }
    .modal {
        padding: 50px 30px 40px;
    }
}

@media screen and (min-width: 680px) {
    .modal {
        padding: 50px 40px 40px;
    }   
}

</style>