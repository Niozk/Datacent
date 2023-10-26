<template>
    <section class="intro">
        <h1>Welkom bij <span>Datacent</span></h1>
        <h2>Begin door het geheime wachtwoord in te vullen</h2>
    </section>
    <section class="login">
        <v-text-field class="password" 
        v-model="passwordInput" label="Wachtwoord" variant="solo" hint="Pssst, wachtwoord is 12345" 
        :error-messages="passwordError" @keydown.enter="checkPassword">
        </v-text-field>
        <v-btn @click="checkPassword">Login</v-btn>
    </section>
    <Captcha />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/store.js'
import Captcha from '../components/Captcha.vue'

onMounted(() => {
    const router = useRouter();
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    
    if (isAuthenticated) {
        console.log('authenticated')
        router.push('/dashboard');
    }
})

const store = useStore();

const passwordInput = ref('')
const passwordError = ref('')

function checkPassword() {
    if (passwordInput.value == '12345') {
        passwordError.value = ''
        store.isPasswordCorrect = true;
    } else {
        passwordError.value = 'Foute wachtwoord'
        store.isPasswordCorrect = false;
    }
}
</script>

<style scoped>
.intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 10vh 30px 0 30px;
}

.intro h1 {
    text-align: center;
    font-size: 3rem;
}

.intro h1 span {
    color: var(--primary-color);
}

.intro h2 {
    text-align: center;
}

.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 100px 30px 0 30px;
}

.password {
    width: 100%;
    max-width: 400px;
}
</style>


