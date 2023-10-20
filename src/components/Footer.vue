<template>
    <footer>
        <div class="footer-content">
            <p>Niozken © 2023</p>
            <a href="https://github.com/Niozk/datacent" class="fa-brands fa-github"></a>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
    display: flex;
    justify-content: center;
    padding: 45vh 0 50px 0;
    aspect-ratio: 960/600;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: url('/layered-steps.svg');
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
    gap: 10px;
    padding: 10px;
    border: solid 1px var(--letter-color-dark);
    background-color: var(--letter-color-light);
}
</style>
