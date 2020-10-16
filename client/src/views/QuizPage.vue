<template>
    <div class="quizPage">
        <Quiz v-if="!isQuizEnded" v-on:quiz-ended="StopQuiz"/>
        <Result v-if="isQuizEnded" 
            v-on:reboot-quiz="RestartQuiz()"
            v-bind:score="score"/>
    </div>
</template>

<script>
import Quiz from '@/components/Quiz.vue'
import Result from '@/components/Result'
export default {
    name: 'QuizPage',
    components: {
        Quiz,
        Result
    },
    data() {
        return {
            isQuizEnded: false,
            score: 0
        }
    },
    methods:  {
        StopQuiz(curScore) {
            this.isQuizEnded = true;
            this.score = curScore;
        }
    }
}
</script>