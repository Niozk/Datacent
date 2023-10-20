<template>
    <v-dialog v-model="store.isPasswordCorrect" width="500">
        <template v-slot:default="{ isActive }">
            <v-card title="Ben jij wel een echt mens?">
                <v-card-text>
                    Ik vertrouw je niet helemaal. Als je dit kan oplossen, krijg je toegang tot de dashboard.
                    <br><br>
                    Vindt de driehoek.
                </v-card-text>
                <div class="puzzle">
                    <button @click="checkAnswer('square')">
                        <img src="/square.png" alt="square">
                    </button>
                    <button @click="checkAnswer('circle')">
                        <img src="/circle.png" alt="circle">
                    </button>
                    <button @click="checkAnswer('triangle')">
                        <img src="/triangle.png" alt="triangle">
                    </button>
                </div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Sluiten" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup>
import { useStore } from '@/stores/store.js'
const store = useStore();

function checkAnswer(selectedButton) {
    if (selectedButton == 'triangle') {
        console.log('Good button');
    } else {
        console.log('Bad button');
    }
}
</script>

<style scoped>
.puzzle {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 50px;
}

@media only screen 
and (max-width: 460px) {
    .puzzle {
        gap: 20px;
        padding: 25px;
    }

    .puzzle button img {
        width: 60px;
    }
}
</style>
  