//PHONE VALIDATOR

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "NOT OK";
    phoneResult.style.color = "red";
  }
};

//TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const parentTabs = document.querySelector(".tab_content_items");

let currentTabIndex = 0;
const intervalTime = 7000;

const hideTabContent = () => {
  tabContentBlocks.forEach((tabContentBlock) => {
    tabContentBlock.style.display = "none";
  });
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (indexElement) => {
  tabContentBlocks[indexElement].style.display = "block";
  tabItems[indexElement].classList.add("tab_content_item_active");
};

const autoSlider = () => {
  setInterval(() => {
    currentTabIndex = (currentTabIndex + 1) % tabItems.length;
    hideTabContent();
    showTabContent(currentTabIndex);
  }, intervalTime);
};

showTabContent(currentTabIndex);
autoSlider();

parentTabs.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((tabItem, tabIndex) => {
      if (event.target === tabItem) {
        hideTabContent();
        showTabContent(tabIndex);
        currentTabIndex = tabIndex;
      }
    });
  }
};

//Converter

// som.addEventListener(`input`, () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "../data/converter.json");
//   request.setRequestHeader("Content-type", "application/json");
//   request.send();

//   request.addEventListener(`load`, () => {
//     const response = JSON.parse(request.response);
//     usd.value = (som.value / response.usd).toFixed(2);
//   });
// });

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const won = document.querySelector("#won");

const fetchConverterData = async () => {
  try {
    const response = await fetch("../data/converter.json");

    if (!response.ok) {
      throw new Error("Ошибка получения данных");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const converter = async (element, target1, currency) => {
  element.oninput = async () => {
    const data = await fetchConverterData();

    if (data) {
      if (currency === "som") {
        target1.value = (element.value / data.usd).toFixed(2);
        won.value = (element.value / data.won).toFixed(2);
      } else if (currency === "usd") {
        target1.value = (element.value * data.usd).toFixed(2);
        won.value = ((element.value * data.usd) / data.won).toFixed(2);
      } else if (currency === "won") {
        target1.value = (element.value * data.won).toFixed(2);
        usd.value = (element.value / data.usd).toFixed(2);
      }
      element.value === "" && (target1.value = "");
    }
  };
};

converter(som, usd, "som");
converter(usd, som, "usd");
converter(won, som, "won");

//CARD SWITCHER

const card = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
let count = 1;

async function fetchCard(cardNumber) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${cardNumber}`
    );

    if (!response.ok) {
      throw new Error("Ошибка получения данных");
    }

    const data = await response.json();

    card.innerHTML = `
      <p>${data.title}</p>
      <p style="color: ${data.completed ? "green" : "red"}">${
      data.completed
    }</p>
      <span>${data.id}</span>
    `;
  } catch (error) {
    console.error(error);
  }
}

function handleButtonClick(isNext) {
  if (isNext) {
    count = count === 200 ? 1 : count + 1;
  } else {
    count = count === 1 ? 200 : count - 1;
  }
  fetchCard(count);
}

fetchCard(count);

btnNext.onclick = () => handleButtonClick(true);
btnPrev.onclick = () => handleButtonClick(false);

//WEATHER
const cityName = document.querySelector(".cityName");
// const btnSearch = document.querySelector("#btn-search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

const DEFAULT_API = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "e417df62e04d3b1b111abeab19cea714";

//optional chaining ?.

cityName.oninput = (event) => {
  fetch(`${DEFAULT_API}?q=${event.target.value}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      city.innerHTML = data.name || "Город не найден";
      temp.innerHTML = data?.main?.temp
        ? Math.round(data?.main?.temp - 273) + "&deg;C"
        : "...";
    });
};
