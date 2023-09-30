document.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const cardsContainer = document.getElementById("cards-container");

    data.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const cardImage = document.createElement("img");
      cardImage.src =
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hb2205-jisoo-01-003-1647422041.jpg?crop=0.997xw:0.429xh;0.00262xw,0.251xh&resize=2048:*";

      const cardTitle = document.createElement("h2");
      cardTitle.textContent = post.title;

      const cardDescription = document.createElement("p");
      cardDescription.textContent = post.body;

      card.appendChild(cardImage);
      card.appendChild(cardTitle);
      card.appendChild(cardDescription);

      cardsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Произошла ошибка при загрузке данных:", error);
  }
});
