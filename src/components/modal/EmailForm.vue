<template>
    <Form @submit="submit" class="email-form" :validation-schema="schema">
        <h2>Let's stay in touch!</h2>
        <p>Please share your preferred email so we can stay in touch as the party plans develop.</p>

        <div class="field-wrapper">
            <Transition name="error">
                <ErrorMessage name="firstName" class="error" />
            </Transition>
            <Field name="firstName" v-model="firstName" type="text" placeholder="First name" />
        </div>
        <div class="field-wrapper">
            <Transition name="error">
                <ErrorMessage name="lastName" class="error" />
            </Transition>
            <Field name="lastName" v-model="lastName" type="text" placeholder="Last name" />
        </div>
        <div class="field-wrapper">
            <Transition name="error">
                <ErrorMessage name="email" class="error" />
            </Transition>
            <Field name="email" v-model="email" type="email" placeholder="Email" />
        </div>

        <button>
            <span v-if="!submitting">Submit</span>
            <span v-if="submitting">Submitting</span>
            <Spinner v-if="submitting" />
        </button>
    </Form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import Spinner from './Spinner.vue'

export default {
    components: { Field, Form, ErrorMessage, Spinner },
    emits: ['success'],
    setup(props, { emit }) {
        const submitting = ref(false)
        const firstName = ref('')
        const lastName = ref('')
        const email = ref('')

        const schema = yup.object({
            firstName: yup.string().required().label('Your first name'),
            lastName: yup.string().required().label('Your last name'),
            email: yup.string().required().email().label('Your email')
        })

        const submit = () => {
            submitting.value = true
            setTimeout(() => {
                emit('success', firstName.value, email.value)
            }, 750)
        }

        return { submit, schema, firstName, lastName, email, submitting }
    }
}
</script>

<style>
form {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    position: relative;
}
input {
    display: block;
    width: 100%;
    padding: 12px;
    font-size: 22px;
    margin: 28px auto;
    border-radius: 5px;
    border: 1px solid black;
}
form button {
    margin-top: 45px;
    font-size: 22px;
    max-width: 200px;
    background: var(--primary);
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 30px;
}
.field-wrapper {
    position: relative;
}
.error {
    color: crimson;
    font-size: 18px;
    position: absolute;
    bottom: -23px;
    right: 50%;
    transform: translateX(50%);
    white-space: nowrap;
}
.error + input {
    border: 1px solid crimson;
}

/* Transition Classes */
.error-enter-from,
.error-leave-to {
    opacity: 0;
    right: 50%;
    transform: translate(50%, -10px);
}
.error-enter-to,
.error-leave-from {
    opacity: 1;
    right: 50%;
    transform: translate(50%, 0px);
}
.error-enter-active,
.error-leave-active {
    transition: all 0.3s ease;
}

@media screen and (min-width: 1080px) {
    input, form button {
        font-size: 24px;
    }
}
</style>