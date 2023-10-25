<template>
    <section class="container">
        <p class="title">{{ title }}</p>
        <p class="content">
            <slot />
        </p>
    </section>
</template>

<script setup>
const props = defineProps({
    title: String
});
</script>

<style scoped>
.container {
    padding: 25px;
    width: 550px;
    height: 400px;
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

.content {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 2.4rem;
}

</style>


