<template>
    <div class="backdrop">
        <div class="modal-content">
            <h2>Hello, I am a modal.</h2>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}
.modal-content {
    margin: 80px auto;
    display: block;
    max-width: 60%;
    background: white;
    border-radius: 5px;
    position: relative;
    text-align: center;
    padding: 20px;
}
</style>