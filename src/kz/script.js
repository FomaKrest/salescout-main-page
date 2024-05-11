const headerBurger = document.getElementById("header__burger");
const headerMenu = document.getElementById("header__menu");
const body = document.getElementById("body");

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.classList.toggle("lock");
});

function showAnswer(buttonNumber) {
  var faq__icon = document.querySelectorAll("#faq__item-icon");
  var faq__body = document.querySelectorAll("#faq__item-body");
  if (faq__body[buttonNumber].className === "faq__item-body") {
    faq__body[buttonNumber].className = "faq__item-body__active";
    faq__icon[buttonNumber].className.baseVal = "faq__item-icon__active";
  } else {
    faq__body[buttonNumber].className = "faq__item-body";
    faq__icon[buttonNumber].className.baseVal = "faq__item-icon";
  }
}

function activateButton(buttonNumber) {
  var buttons = document.getElementsByTagName("button");
  var tariff__mini = document.getElementById("tariff__mini");
  var tariff__standart = document.getElementById("tariff__standart");
  var tariff__business = document.getElementById("tariff__business");
  var tariff__pro = document.getElementById("tariff__pro");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("tariff__button-term__active");
  }
  var buttonToActivate = buttons[buttonNumber];
  buttonToActivate.classList.add("tariff__button-term__active");
  switch (buttonNumber) {
    case 1:
      tariff__mini.innerHTML = "35 000 ₸/мес";
      tariff__standart.innerHTML = "50 000 ₸/мес";
      tariff__business.innerHTML = "80 000 ₸/мес";
      tariff__pro.innerHTML = "100 000 ₸/мес";
      break;
    case 2:
      tariff__mini.innerHTML = "31 500 ₸/мес";
      tariff__standart.innerHTML = "45 000 ₸/мес";
      tariff__business.innerHTML = "72 000 ₸/мес";
      tariff__pro.innerHTML = "90 000/ ₸мес";
      break;
    case 3:
      tariff__mini.innerHTML = "28 000 ₸/мес";
      tariff__standart.innerHTML = "40 000 ₸/мес";
      tariff__business.innerHTML = "64 000 ₸/мес";
      tariff__pro.innerHTML = "80 000/ ₸мес";
      break;
  }
}

const fetchOrderStatsLast24Hours = () => {
  const url = `https://api.salescout.me/api/order/stats-last-24-hours`;

  fetch(url).then(async (data) => {
    const stats = await data.json();

    document.getElementById("orders__count").innerHTML = currencyFormat(
      stats.totalCount || 8000
    );
    document.getElementById("orders__total__price").innerHTML = currencyFormat(
      stats.totalPrice || 300000000
    );
  });
};

const currencyFormat = (num) => {
  try {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
    });
    return formatter.format(num).replace(/,/g, " ");
  } catch (e) {
    console.log(e);
    return num;
  }
};

fetchOrderStatsLast24Hours();

const setDefaultLanguageIfDirectlyOpenTheLanguagePage = () => {
  const lang = "kz";

  if (!localStorage.getItem("LOCAL_LANGUAGE")) {
    localStorage.setItem("LOCAL_LANGUAGE", lang);
  }
};

setDefaultLanguageIfDirectlyOpenTheLanguagePage();
