<template>
    <div class="success">
        <h2>Thank you!</h2>
        <p>Thank you {{ name }}! We will contact you at {{ email }} to keep you up to date on our party plans.</p>
        <img src="../../assets/images/join_us/ab.png" class="ab-icon">
    </div>
</template>

<script>
export default {
    props: ['name', 'email']
}
</script>

<style>

</style>