console.log("vamo");

const options = [
  { src: "imgs/IMG_2521.PNG", type: "eyes" },
  { src: "imgs/IMG_2510.PNG", type: "top" },
];

const $canvas = document.querySelector(".canvas");
const $options = document.querySelector(".options__list");

$options.appendChild;

options.forEach((o, i) => {
  const $li = document.createElement("li");
  const $button = document.createElement("button");

  $button.textContent = i;
  $button.addEventListener("click", () => {
    const $img = document.createElement("img");

    $img.className = "layer";
    $img.src = o.src;

    $canvas.appendChild($img);
  });

  $li.appendChild($button);
  $options.appendChild($li);
});
