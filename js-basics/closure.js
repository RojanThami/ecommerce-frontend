//closure function defined inside another function and has access to the outer function's variables and parameters

function createGame(){
    let score = 0;

    function increaseScore(points){
        score+=points;
        console.log("Score: " + score);
    }
    function decreaseScore(points){
        score-=points;
        console.log("Score: " + score);
    }

    function getScore(){
        return score;
    }

    return {
        increaseScore,
        decreaseScore,
        getScore
    };
}

const game = createGame();

game.increaseScore(10); // Score: 10
game.decreaseScore(5); // Score: 5
console.log(game.getScore()); // 5