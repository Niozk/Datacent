<template>
    <header>
        <h1>Datacent</h1>
        <button class="logout" @click="logout">Logout</button>
    </header>
    <section class="dashboard">
        <DataContainerSmall v-for="(item, index) in store.numberData.datasets" :key="index" class="grid-item small" :title="item.title" :percentage="item.percentage">
            <template v-slot:content>
                {{ item.content }}
            </template>
            <template v-slot:percentage>
                {{ item.percentage }}
            </template>
            <template v-slot:time>
                {{ item.time }}
            </template>
        </DataContainerSmall>

        <DataContainerLarge class="grid-item large" title="Winstmarge">
            <Bar :data="store.dataBar" :options="store.optionsBar" class="stats"/>
        </DataContainerLarge>
        <DataContainerLarge class="grid-item large" title="Marktaandeel">
            <Pie :data="store.dataPie" :options="store.optionsPie" class="stats" />
        </DataContainerLarge>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from '@/stores/data.js'
import DataContainerSmall from '../components/DataContainerSmall.vue'
import DataContainerLarge from '../components/DataContainerLarge.vue'
import {
    Chart as ChartJS,
    Title,
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar, Pie } from 'vue-chartjs'

onMounted(() => {
    const router = useRouter();
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    
    if (!isAuthenticated) {
        console.log('not authenticated')
        router.push('/');
    }
})

const router = useRouter();

function logout() {
    localStorage.removeItem('authenticated');
    router.push('/');
}

const store = useStore();

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
ChartJS.register(ArcElement, Tooltip, Legend)

</script>

<style scoped>
header {
    display: flex;
    gap: 20px;
    padding: 2vh 0 8vh 6vh;
}

h1 {
    font-size: 2.5rem;
    color: var(--primary-color);
}

.dashboard {
    display: grid;
    justify-items: center;
    gap: 40px 15px;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 30px;
    padding: 30px 40px;
    background-color: #F3F4F6;
    border: 1px solid #dadadb;
    border-radius: 15px;
}

.grid-item.large {
    grid-column: span 2;
}

.stats {
    height: 275px;
}

@media only screen 
and (max-width: 1500px) {
    .grid-item.large {
        grid-column: span 2;
    }

    .grid-item.small {
        grid-column: span 2;
    }

    .stats {
        height: 250px;
    }
}

@media only screen 
and (max-width: 990px) {
    .dashboard {
        grid-template-columns: repeat(2, 1fr);
        padding: 30px 0;
    }
}

@media only screen 
and (max-width: 560px) {
    .dashboard {
        margin: 0 0;
    }

    .stats {
        height: 210px;
    }
}
</style>