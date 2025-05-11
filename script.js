let container = document.getElementById("container");

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    data.results.map((char) => {
      let card = document.createElement("div");
      let img = document.createElement("img");
      let cardTitle = document.createElement("h5");
      card.className = "card p-3 shadow-lg p-3 mb-5 bg-body rounded";
      img.className = "card-img-top";
      cardTitle.className = "card-title text-center";
      cardTitle.innerText = char.name;
      img.src = char.image;

      card.appendChild(cardTitle);
      card.appendChild(img);

      container.appendChild(card);
    });
  });
