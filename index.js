const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "terminal",
  },
  {
    tema: "node",
    class: "backend",
  },
  {
    tema: "oop",
    class: "objects",
  },
  {
    tema: "typescript",
    class: "tipado",
  },
  {
    tema: "css",
    class: "styles",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const ulTag = document.querySelector(".lista");
  const ulArray = Array.from(ulTag.children);
  ulArray.forEach((li) => {
    li.remove();
  });
  cosasQueAprendimos.forEach((item) => {
    const newLi = document.createElement("li");
    newLi.textContent = item.tema;
    newLi.className = item.class;
    ulTag.appendChild(newLi);
  });
}

main();
