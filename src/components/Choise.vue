<template>
    <div>
        <button @click="$emit('submit-ans', choice.id)" 
        class="submit-answer"
        v-bind:class="{'correctStyle':(showAnswer && rightAnswer==choice.id), 
                    'incorrectStyle':(showAnswer && rightAnswer!=choice.id)}">
        {{ choice.text }}</button>
    </div>
</template>

<script>
export default {
    name: "Choise",
    props: ["choice", 
            "rightAnswer",
            "showAnswer"],
    data () {
        return {
        }
    }
}
</script>

<style scoped>
    button {
        width: 220px;
        font-size: 20px;
        margin: 12px 0;
        padding: 10px 0;
        background-color: #184059;
        color: #fff;
        font-family: 'Oswald', sans-serif;
        border-radius: 1000px;
        outline: none;
        border: none;
    }

    button:active {
        background-color: #467a9b;
    }

    button:hover {
        background-color: #25506b;
    }

    .correctStyle {
        background-color: #2ecc71;
    }

    .incorrectStyle {
        background-color: #e74c3c;
    }

    .correctStyle:hover {
        background-color: #2ecc71;
    }

    .incorrectStyle:hover {
        background-color: #e74c3c;
    }
</style>