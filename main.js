const defaultTop = { src: "imgs/IMG_2510.PNG", type: "top", offset: -25 };
const defaultBody = { src: "imgs/IMG_2515.PNG", type: "body", offset: -70 };
const defaultEyes = { src: "imgs/IMG_2521.PNG", type: "eyes", offset: -35 };
const options = [
  defaultEyes,
  { src: "imgs/IMG_2520.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2522.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2523.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2524.PNG", type: "eyes", offset: -35 },
  defaultTop,
  { src: "imgs/IMG_2511.PNG", type: "top", offset: -25 },
  { src: "imgs/IMG_2512.PNG", type: "top", offset: -25 },
  { src: "imgs/IMG_2513.PNG", type: "top", offset: -25 },
  { src: "imgs/IMG_2514.PNG", type: "top", offset: -25 },
  defaultBody,
  { src: "imgs/IMG_2516.PNG", type: "body", offset: -70 },
  { src: "imgs/IMG_2517.PNG", type: "body", offset: -70 },
  { src: "imgs/IMG_2518.PNG", type: "body", offset: -70 },
  { src: "imgs/IMG_2519.PNG", type: "body", offset: -70 },
];

const q = (query) => document.querySelector(query);

const $canvas = q(".canvas");
const $canvasAnimation = q(".canvas-container__animation");
const $options = q(".options__list");
const $random = q(".js-random");
const $save = q(".js-save");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio || 1;

const size = 300;

const selected = {
  top: defaultTop,
  body: defaultBody,
  eyes: defaultEyes,
};

canvas.width = size * dpr;
canvas.height = size * dpr;
canvas.style.width = `${size}px`;
canvas.style.height = `${size}px`;
ctx.scale(dpr, dpr);

document.body.appendChild(canvas);

const drawCanvas = () => {
  ctx.clearRect(0, 0, 300, 300);
  [...$canvas.children].forEach((el) => {
    ctx.drawImage(el, 0, 0);
  });

  $save.href = canvas.toDataURL();
};

const select = (option) => {
  const $img = document.createElement("img");

  $img.className = `layer layer-${option.type}`;
  $img.src = option.src;

  q(`.layer-${option.type}`).replaceWith($img);
  $canvasAnimation.classList.add("canvas--selection");
  selected[option.type] = option;
  drawCanvas();
  updateHash();
};

const hash = (option) => option.src.slice(9, 13);

const updateHash = () => {
  location.hash = `${hash(selected.top)}${hash(selected.body)}${hash(
    selected.eyes
  )}`;
};

const decodeHash = () => {
  if (location.hash.length !== 13) return;

  const hash = location.hash.slice(1);

  const get = (start, end) => {
    const option = options.find((o) => o.src.includes(hash.slice(start, end)));
    if (option) select(option);
  };

  get(0, 4);
  get(4, 8);
  get(8, 12);
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

$random.addEventListener("click", () => {
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

window.addEventListener("load", () => {
  decodeHash();
  drawCanvas();
});
