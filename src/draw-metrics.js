const fetchStoresPositionMetrics = async () => {
  const currentDate = new Date();

  const startDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

  const url = `https://api.salescout.me/api/v2/store/position-metrics?startDate=${startDate.getTime()}&endDate=${currentDate.getTime()}`;

  return fetch(url).then((data) => data.json());
};

const start = async () => {
  const data = await fetchStoresPositionMetrics();

  const dataPoints = data.map((item) => item.averagePercentage);
  const salescoutPercent = Math.ceil(dataPoints[dataPoints.length - 1]) || 80;
  const config = {
    type: "doughnut",
    data: {
      labels:
        localStorage.getItem("LOCAL_LANGUAGE") === "kz"
          ? ["Salescout клиенттері", "Басқа магазиндер"]
          : ["Клиенты Salescout", "Другие магазины"],
      datasets: [
        {
          data: [salescoutPercent, 100 - salescoutPercent],
          backgroundColor: ["#096df5", "#e3e3e3"],
        },
      ],
    },
    options: {
      responsive: true,
      cutout: "80%",

      plugins: {
        legend: {
          display: true,
        },
        tooltip: {
          enabled: true,
          intersect: true,
          caretPadding: 5,
          caretSize: 5,
          xAlign: "left",
          yAlign: "top",
        },
      },
    },
  };

  new Chart(document.getElementById("myChart"), config);

  const doc = document.getElementById("store-position-chart");
  if (doc) {
    doc.style = "display:inherit;";
  }

  const title = document.getElementById("store-position-title");
  if (title) {
    let percent = Math.ceil(dataPoints[dataPoints.length - 1]);
    if (!percent) {
      percent = 80;
    }

    let text = `В {percent}% товарах клиенты SaleScout на первом месте`;
    if (localStorage.getItem("LOCAL_LANGUAGE") === "kz") {
      text = `{percent}% тауарларында SaleScout клиенттері бірінші орында`;
    }
    text = text.replace("{percent}", percent.toString());

    title.innerHTML = text;
  }
};

window.onload = function () {
  start();
};
