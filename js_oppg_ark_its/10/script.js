const button = document.getElementById("flip_button");
const coin_img = document.getElementById("coin_img");

const heads_rel = "heads.png"
const tails_rel = "tails.png"

const coinflip = Math.random();
if (coinflip < 0.5) {
    coin_img.src = heads_rel
    console.log("Heads");
} else {
    coin_img.src = tails_rel
    console.log("Tails");
}
