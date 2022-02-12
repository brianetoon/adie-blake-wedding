<template>
    <div class="backdrop" @click.self="close">
        <div class="modal">
            <i class="material-icons close" @click="close">clear</i>
            <EmailForm />
        </div>
    </div>
</template>

<script>
import EmailForm from './EmailForm.vue'

export default {
    components: { EmailForm },
    setup(props, { emit }) {
        const close = () => emit('close')

        return { close }
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
    padding: 30px;
    display: flex;
    align-items: center;
}
.modal {
    width: 100%;
    max-width: 600px;
    background: white;
    border-radius: 10px;
    margin: 0 auto;
    padding:  50px 30px 40px;
    position: relative;
}
.close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 30px;
    color: grey;
    cursor: pointer;
}
.close:hover {
    color: var(--primary);
}
</style>