console.log("vamo");

const options = [
  { src: "imgs/IMG_2521.PNG", type: "eyes", offset: -35 },
  { src: "imgs/IMG_2510.PNG", type: "top", offset: -25 },
];

const $canvas = document.querySelector(".canvas");
const $options = document.querySelector(".options__list");

$options.appendChild;

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

    $img.className = "layer";
    $img.src = o.src;

    $canvas.appendChild($img);
  });

  $li.appendChild($button);
  $options.appendChild($li);
});
