const pomBtn = document.querySelector(".tecla_pom");
const clapBtn = document.querySelector(".tecla_clap");
const timBtn = document.querySelector(".tecla_tim");

const puffBtn = document.querySelector(".tecla_puff");
const splashBtn = document.querySelector(".tecla_splash");
const toimBtn = document.querySelector(".tecla_toim");

const pshBtn = document.querySelector(".tecla_psh");
const ticBtn = document.querySelector(".tecla_tic");
const tomBtn = document.querySelector(".tecla_tom");

const pomSound = document.querySelector("#som_tecla_pom");
const clapSound = document.querySelector("#som_tecla_clap");
const timSound = document.querySelector("#som_tecla_tim");

const puffSound = document.querySelector("#som_tecla_puff");
const splashSound = document.querySelector("#som_tecla_splash");
const toimSound = document.querySelector("#som_tecla_toim");

const pshSound = document.querySelector("#som_tecla_psh");
const ticSound = document.querySelector("#som_tecla_tic");
const tomSound = document.querySelector("#som_tecla_tom");

pomBtn.onclick = tocaSomPom;



function tocaSomPom() {
    pomSound.play();
}