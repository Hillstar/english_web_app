<template>
    <div class="result">
        <h1>Your result: {{ score }} points</h1>
        <router-link to="/" tag="button"> Home </router-link>
    </div>
</template>

<script>
export default {
    name: "Result",
    props: [
        "score"
    ]
}
</script>

<style scoped>
.result {
    font-size: 150%;
    margin-top: 5%;
}
</style>