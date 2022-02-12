<template>
    <div class="form-wrapper">
        <form @submit.prevent="submit" class="email-form">
            <h2>Let's stay in touch!</h2>
            <p>Please share your preferred email so we can stay in touch as the party plans develop.</p>

            <input type="text" v-model="firstName" placeholder="First name" required>
            <input type="text" v-model="lastName" placeholder="Last name" required>
            <input type="email" v-model="email" placeholder="Email" required>

            <button>Submit</button>
        </form>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const firstName = ref('')
        const lastName = ref('')
        const email = ref('')

        const submit = () => {
            console.log(firstName.value, lastName.value, email.value)
        }

        return { submit, firstName, lastName, email }
    }
}
</script>

<style>
form {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
}
input {
    display: block;
    width: 100%;
    padding: 12px;
    font-size: 22px;
    margin: 25px auto;
    border-radius: 5px;
    border: 1px solid black;
}
form h2 {
    font-family: 'mr-eaves-sans', sans-serif;
    font-size: 46px;
}
form button {
    margin-top: 25px;
    font-size: 22px;
    max-width: 200px;
}
</style>