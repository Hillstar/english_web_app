<template>
<div class="quizPage">
    <h1>Answer!</h1>
    <h2>SCORE: {{ score }}</h2>
    <h2>{{ testQuestion }}</h2>
    <ul>
        <div v-bind:key="choice.id" v-for="choice in choices">
        <li><Choise v-on:submit-ans="CheckChoise"
            v-bind:choice="choice"
            v-bind:rightAnswer="answer"
            v-bind:showAnswer="showAnswer"></Choise></li>
       </div>
    </ul>
</div>
</template>

<script>
import Choise from '@/components/Choise'
export default {
    name: 'QuizPage',
    components: {
        Choise
    },
    data() {
        return {
            score: 0,
            showAnswer: false,
            testQuestion: 'Maxim...',
            choices: [
                {
                    id: 0,
                    text: "keeps his word"
                },
                {
                    id: 1,
                    text: "muscular"
                },
                {
                    id: 2,
                    text: "kidala"
                },
                {
                    id: 3,
                    text: "has white skin"
                }
            ],
            answer: 2,
        }
    },
    methods:  {
        CheckChoise (answerNum) {
            if (answerNum == this.answer)
            {
                this.score++;
                console.log("right!")
            }
            this.showAnswer = true;
        }
    }
}
</script>

<style scoped>
	.quizPage {
		color: #413D3D;
		font-family: 'Oswald', sans-serif;
		width: 95%;
		text-align: center;
		margin: 0 auto;
	}

	ul {
		list-style-type:none;
		margin: 0 auto;
		list-style:none;
		padding:0;
	}

	li {
		list-style:none;
	}
</style>