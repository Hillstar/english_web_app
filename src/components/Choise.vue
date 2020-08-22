<template>
    <div>
        <button @click="$emit('submit-ans', choice.id)"
        class="submit-answer"
        v-bind:class="{'correctStyle':(showAnswer && rightAnswer==choice.id), 
                    'incorrectStyle':(showAnswer && rightAnswer!=choice.id)}"
        v-bind:disabled="showAnswer">
        {{ choice.text }}</button>
    </div>
</template>

<script>
export default {
    name: "Choise",
    props: ["choice", 
            "rightAnswer",
            "showAnswer"]
}
</script>

<style scoped>
    .correctStyle {
        background-color: #2ecc71;
    }

    .incorrectStyle {
        background-color: #e74c3c;
    }

    .incorrectStyle, .correctStyle{
        cursor: default;
    }
</style>