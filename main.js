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
    const $img = document.createElement("img");

    $img.className = `layer layer-${o.type}`;
    $img.src = o.src;

    document.querySelector(`.layer-${o.type}`).replaceWith($img);
    $canvasAnimation.classList.add("canvas--selection");
  });

  $li.appendChild($button);
  $options.appendChild($li);
});

$canvasAnimation.addEventListener("animationend", () => {
  $canvasAnimation.classList.remove("canvas--selection");
});
