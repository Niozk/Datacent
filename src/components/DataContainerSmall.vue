<template>
    <section class="container">
        <p class="title">{{ title }}</p>
        <div class="data-container">
            <p class="content">
                <slot name="content" />
            </p>
            <p class="percentage" :class="colorClass">
                <i :class="[iconClass, colorClass]"></i>
                <slot name="percentage">{{ percentage }}</slot>
            </p>
            <p class="time">
                <slot name="time" />
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const percentage = ref(props.percentage);

const props = defineProps({
    title: String,
    percentage: Number
});

const colorClass = computed(() => {
    return {
        negative: percentage.value < 0,
        positive: percentage.value >= 0,
    };
});

const iconClass = computed(() => {
    return percentage.value >= 0 ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down';
});
</script>

<style scoped>
.container {
    padding: 25px;
    width: 300px;
    height: 275px;
    background-color: #ffffff;
    border-radius: 25px;
    box-shadow: 0px 10px 15px -3px #0000001a;
}

.title {
    padding: 0 0 20px 0;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--secondary-color);
}

.data-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.content {
    font-weight: bold;
    font-size: 2.4rem;
}

.percentage {
    font-size: 1.4rem;
}

.percentage i {
    font-size: 1.3rem;
}

.time {
    font-size: 1rem;
    color: var(--letter-color-grey);
}

.negative {
  color: red;
}

.positive {
  color: green;
}

@media only screen 
and (max-width: 1500px) {
    .container {
        width: 400px;
        height: 350px;
    }
}

@media only screen 
and (max-width: 560px) {
    .container {
        width: 275px;
        height: 275px;
    }

    .title {
        font-size: 1.2rem;
    }

    .content {
        font-size: 2rem;
    }

    .percentage {
        font-size: 1.3rem;
    }

    .time {
        font-size: 0.9rem;
    }
}
</style>


