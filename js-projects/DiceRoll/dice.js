function dice_roll() {

    const numOfDice = document.getElementById("dice-count").value;
    const diceResults = document.getElementById("result");
    const diceImages = document.getElementById("images");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);

        console.log(value);

    }

     diceResults.textContent = `You rolled: ${values.join(", ")}`;
     diceImages.innerHTML = images.join(" ");
}