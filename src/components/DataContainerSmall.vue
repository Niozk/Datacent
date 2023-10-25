<template>
    <section class="container">
        <p class="title">{{ title }}</p>
        <div class="data-container">
            <p class="content">
                <slot name="content" />
            </p>
            <p class="percentage" :class="colorClass">
                <slot name="percentage" />
            </p>
            <p class="time">
                <slot name="time" />
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const testnumber = ref(-5); //TEEEEEESTT

const props = defineProps({
    title: String
});

const colorClass = computed(() => {
    return {
        negative: testnumber.value < 0,
        positive: testnumber.value >= 0,
    };
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
</style>


