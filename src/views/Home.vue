<template>
    <header>
        <h1>Datacent</h1>
    </header>
    <section class="dashboard">
        <DataContainerSmall title="hellpo title">
            <template v-slot:content>
                238,53 euro
            </template>
            <template v-slot:percentage>
                25+
            </template>
            <template v-slot:time>
                in the afgelopen 5 dagen
            </template>
        </DataContainerSmall>
        <DataContainerSmall title="hellpo title">
            <template v-slot:content>
                238,53 euro
            </template>
            <template v-slot:percentage>
                25+
            </template>
            <template v-slot:time>
                in the afgelopen 5 dagen
            </template>
        </DataContainerSmall>
        <DataContainerSmall title="hellpo title">
            <template v-slot:content>
                238,53 euro
            </template>
            <template v-slot:percentage>
                25+
            </template>
            <template v-slot:time>
                in the afgelopen 5 dagen
            </template>
        </DataContainerSmall>
        <DataContainerSmall title="hellpo title">
            <template v-slot:content>
                238,53 euro
            </template>
            <template v-slot:percentage>
                25+
            </template>
            <template v-slot:time>
                in the afgelopen 5 dagen
            </template>
        </DataContainerSmall>

        <DataContainerLarge class="grid-item large" title="hellpo title">
            238.340 euro
        </DataContainerLarge>
        <DataContainerLarge class="grid-item large" title="hellpo title">
            238.340 euro
        </DataContainerLarge>
    </section>
</template>

<script setup>
import DataContainerSmall from '../components/DataContainerSmall.vue'
import DataContainerLarge from '../components/DataContainerLarge.vue'

</script>

<style scoped>
header {
    display: flex;
    padding: 2vh 0 6vh 6vh;
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
</style>