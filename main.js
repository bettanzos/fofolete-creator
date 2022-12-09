const options = [
  { src: "imgs/IMG_2521.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2520.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2522.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2523.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2524.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2510.PNG", type: "top", offset: -25 },
  { src: "imgs/IMG_2511.PNG", type: "top", offset: -25 },
  { src: "imgs/IMG_2512.PNG", type: "top", offset: -25 },
  { src: "imgs/IMG_2513.PNG", type: "top", offset: -25 },
  { src: "imgs/IMG_2514.PNG", type: "top", offset: -25 },
  { src: "imgs/IMG_2515.PNG", type: "body", offset: -70 },
  { src: "imgs/IMG_2516.PNG", type: "body", offset: -70 },
  { src: "imgs/IMG_2517.PNG", type: "body", offset: -70 },
  { src: "imgs/IMG_2518.PNG", type: "body", offset: -70 },
  { src: "imgs/IMG_2519.PNG", type: "body", offset: -70 },
];

const $canvas = document.querySelector(".canvas");
const $canvasAnimation = document.querySelector(".canvas-container__animation");
const $options = document.querySelector(".options__list");
const $random = document.querySelector(".button");

const select = (option) => {
  const $img = document.createElement("img");

  $img.className = `layer layer-${option.type}`;
  $img.src = option.src;

  document.querySelector(`.layer-${option.type}`).replaceWith($img);
  $canvasAnimation.classList.add("canvas--selection");
};

options.forEach((o) => {
  const $li = document.createElement("li");
  const $button = document.createElement("button");

  const $img = document.createElement("img");

  $img.className = "option__img";
  $img.src = o.src;
  $img.width = 100;
  $img.style.transform = `translate(-50%, ${o.offset}px)`;

  $button.appendChild($img);
  $button.className = "option";
  $button.style.backgroundImage = `url(${o.src})`;
  $button.addEventListener("click", () => {
    select(o);
  });

  $li.appendChild($button);
  $options.appendChild($li);
});

$canvasAnimation.addEventListener("animationend", () => {
  $canvasAnimation.classList.remove("canvas--selection");
});

$random.addEventListener("click", (e) => {
  const eyesIndex = Math.round(Math.random() * 4);
  const bodyIndex = Math.round(Math.random() * 4);
  const topIndex = Math.round(Math.random() * 4);

  const eyes = options.filter((o) => o.type === "eyes")[eyesIndex];
  const body = options.filter((o) => o.type === "body")[bodyIndex];
  const top = options.filter((o) => o.type === "top")[topIndex];

  select(eyes);
  select(top);
  select(body);
});
