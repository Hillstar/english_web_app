<template>
<div class="quiz" >
    <div class="quiz">
    <h1>Answer!</h1>
    <h2>SCORE: {{ score }}</h2>
    <ul>
        <h2>{{ questions[curQuestionNum].questionText }}</h2>
            <div v-bind:key="choice.id" v-for="choice in questions[curQuestionNum].choices">
            <li><Choise v-on:submit-ans="CheckChoise"
                v-bind:choice="choice"
                v-bind:rightAnswer="questions[curQuestionNum].answer"
                v-bind:showAnswer="showAnswer"></Choise></li>
            </div>
        <h2></h2>
       <button v-if="showAnswer && (curQuestionNum < maxQuestionNum - 1)" v-on:click="SwitchQuestion()">Next question</button>
    </ul>
    </div>
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
            maxQuestionNum: 3,
            curQuestionNum: 0,
            showAnswer: false,
            questions: [
                {
                    questionText: 'Maxim...',
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
                    answer: 2
                },
                {
                    questionText: 'AnnaSophia...',
                    choices: [
                        {
                            id: 0,
                            text: "looks like 19 years old"
                        },
                        {
                            id: 1,
                            text: "waiting for Kolayn"
                            
                        },
                        {
                            id: 2,
                            text: "has a nice haircut"
                        },
                        {
                            id: 3,
                            text: "lives in Russia"
                        }
                    ],
                    answer: 1
                },
                {
                    questionText: 'Gorgeous',
                    choices: [
                        {
                            id: 0,
                            text: "Опасный"
                        },
                        {
                            id: 1,
                            text: "Подозрительный"
                            
                        },
                        {
                            id: 2,
                            text: "Увлекательный"
                        },
                        {
                            id: 3,
                            text: "Очень красивый"
                        }
                    ],
                    answer: 3
                }
            ]
        }
    },
    methods:  {
        SwitchQuestion() {
            this.showAnswer = false;
            this.curQuestionNum++;
        },
        CheckChoise(answerNum) {
            if (answerNum == this.questions[this.curQuestionNum].answer)
            {
                this.score++;
                console.log(answerNum)
            }
            this.showAnswer = true;

            if(this.curQuestionNum == this.maxQuestionNum - 1)
                setTimeout(()=>{ this.$emit('quiz-ended', this.score); }, 1000);
        }
    }
}
</script>

<style>
	.quiz {
		color: #413D3D;
		font-family: 'Oswald', sans-serif;
		width: 95%;
		text-align: center;
		margin: 0 auto;
        margin-top: 5%;
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
    
    button {
        width: 220px;
        font-size: 20px;
        margin: 12px 0;
        margin-left: 2px;
        margin-right: 2px;
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
        cursor: pointer;
        background-color: #25506b;
    }
</style>