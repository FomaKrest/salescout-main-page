const express = require("express");
const path = require("path");
const app = express();
const compression = require("compression");

app.use(compression());
app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});
//kz
app.get("/kz", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/kz/index.html"));
});
app.get("/kz/legal", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/kz/legal.html"));
});
app.get("/kz/analytics", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/kz/analytics.html"));
});
app.get("/kz/course", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/kz/course.html"));
});
app.get("/kz/autoprice", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/kz/index.html"));
});
app.get("/kz/turbo-analytics", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/kz/turbo-analytics.html"));
});
app.get("/kz/error-page", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "/kz/404.html"));
});
app.get("/kz/kaspi-bot-avtomatiziruyte-vash-magazin-na-kaspi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/kz/autoprices/kaspi-bot-avtomatiziruyte-vash-magazin-na-kaspi.html"
    )
  );
});

app.get(
  "/kz/moshchnyy-bot-dlya-kaspi-avtoobnovleniye-i-snizheniye-tsen",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/kz/autoprices/moshchnyy-bot-dlya-kaspi-avtoobnovleniye-i-snizheniye-tsen.html"
      )
    );
  }
);

app.get(
  "/kz/kaspi-magazin-uluchshayte-konkurentosposobnost-s-botom",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/kz/autoprices/kaspi-magazin-uluchshayte-konkurentosposobnost-s-botom.html"
      )
    );
  }
);

app.get("/kz/kaspi-bot-optimiziruyte-svoy-biznes", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/kz/autoprices/kaspi-bot-optimiziruyte-svoy-biznes.html"
    )
  );
});

app.get("/kz/bot-dlya-kaspi-magazina-avtomatiziruyte-protsessy", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/kz/autoprices/bot-dlya-kaspi-magazina-avtomatiziruyte-protsessy.html"
    )
  );
});

app.get("/kz/kaspi-bot-vash-pomoshchnik-v-monitore-tsen", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/kz/autoprices/kaspi-bot-vash-pomoshchnik-v-monitore-tsen.html"
    )
  );
});

app.get(
  "/kz/uvelichte-pribyl-s-kaspi-botom-avtosnizheniye-tsen",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/kz/autoprices/uvelichte-pribyl-s-kaspi-botom-avtosnizheniye-tsen.html"
      )
    );
  }
);

app.get("/kz/kaspi-bot-monitornig-i-obnovleniye-tsen", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/kz/autoprices/kaspi-bot-monitornig-i-obnovleniye-tsen.html"
    )
  );
});

app.get(
  "/kz/bot-kaspi-magazina-mgnovennoye-avtoobnovleniye-tsen",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/kz/autoprices/bot-kaspi-magazina-mgnovennoye-avtoobnovleniye-tsen.html"
      )
    );
  }
);

app.get(
  "/kz/kaspi-bot-dlya-prodavtsov-optimizatsiya-protsessov",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/kz/autoprices/kaspi-bot-dlya-prodavtsov-optimizatsiya-protsessov.html"
      )
    );
  }
);

app.get("/kz/snizhayte-tseny-avtomaticheski-kaspi-bot", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/kz/autoprices/snizhayte-tseny-avtomaticheski-kaspi-bot.html"
    )
  );
});

app.get(
  "/kz/kaspi-bot-uluchshite-effektivnost-vashego-magazina",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/kz/autoprices/kaspi-bot-uluchshite-effektivnost-vashego-magazina.html"
      )
    );
  }
);

app.get("/kz/monitornig-cen-na-kaspi-ispolzuyte-nash-bot", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/kz/autoprices/monitornig-cen-na-kaspi-ispolzuyte-nash-bot.html"
    )
  );
});

app.get(
  "/kz/avtoobnovleniye-tsen-na-kaspi-kaspi-bot-v-deystvii",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/kz/autoprices/avtoobnovleniye-tsen-na-kaspi-kaspi-bot-v-deystvii.html"
      )
    );
  }
);

app.get("/kz/kaspi-bot-dlya-magazinov-vash-klyuch-k-uspekhu", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/kz/autoprices/kaspi-bot-dlya-magazinov-vash-klyuch-k-uspekhu.html"
    )
  );
});
app.get("/kz/*", (req, res) => {
  res.redirect("/kz/error-page");
});
//ru
app.get("/ru", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/ru/index.html"));
});
app.get("/ru/legal", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/ru/legal.html"));
});
app.get("/ru/analytics", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/ru/analytics.html"));
});
app.get("/ru/course", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/ru/course.html"));
});
app.get("/ru/autoprice", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/ru/index.html"));
});
app.get("/ru/turbo-analytics", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "/ru/turbo-analytics.html"));
});
app.get("/ru/error-page", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "/ru/404.html"));
});
app.get("/ru/kaspi-bot-avtomatiziruyte-vash-magazin-na-kaspi", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/ru/autoprices/kaspi-bot-avtomatiziruyte-vash-magazin-na-kaspi.html"
    )
  );
});

app.get(
  "/ru/moshchnyy-bot-dlya-kaspi-avtoobnovleniye-i-snizheniye-tsen",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/ru/autoprices/moshchnyy-bot-dlya-kaspi-avtoobnovleniye-i-snizheniye-tsen.html"
      )
    );
  }
);

app.get(
  "/ru/kaspi-magazin-uluchshayte-konkurentosposobnost-s-botom",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/ru/autoprices/kaspi-magazin-uluchshayte-konkurentosposobnost-s-botom.html"
      )
    );
  }
);

app.get("/ru/kaspi-bot-optimiziruyte-svoy-biznes", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/ru/autoprices/kaspi-bot-optimiziruyte-svoy-biznes.html"
    )
  );
});

app.get("/ru/bot-dlya-kaspi-magazina-avtomatiziruyte-protsessy", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/ru/autoprices/bot-dlya-kaspi-magazina-avtomatiziruyte-protsessy.html"
    )
  );
});

app.get("/ru/kaspi-bot-vash-pomoshchnik-v-monitore-tsen", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/ru/autoprices/kaspi-bot-vash-pomoshchnik-v-monitore-tsen.html"
    )
  );
});

app.get(
  "/ru/uvelichte-pribyl-s-kaspi-botom-avtosnizheniye-tsen",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/ru/autoprices/uvelichte-pribyl-s-kaspi-botom-avtosnizheniye-tsen.html"
      )
    );
  }
);

app.get("/ru/kaspi-bot-monitornig-i-obnovleniye-tsen", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/ru/autoprices/kaspi-bot-monitornig-i-obnovleniye-tsen.html"
    )
  );
});

app.get(
  "/ru/bot-kaspi-magazina-mgnovennoye-avtoobnovleniye-tsen",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/ru/autoprices/bot-kaspi-magazina-mgnovennoye-avtoobnovleniye-tsen.html"
      )
    );
  }
);

app.get(
  "/ru/kaspi-bot-dlya-prodavtsov-optimizatsiya-protsessov",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/ru/autoprices/kaspi-bot-dlya-prodavtsov-optimizatsiya-protsessov.html"
      )
    );
  }
);

app.get("/ru/snizhayte-tseny-avtomaticheski-kaspi-bot", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/ru/autoprices/snizhayte-tseny-avtomaticheski-kaspi-bot.html"
    )
  );
});

app.get(
  "/ru/kaspi-bot-uluchshite-effektivnost-vashego-magazina",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/ru/autoprices/kaspi-bot-uluchshite-effektivnost-vashego-magazina.html"
      )
    );
  }
);

app.get("/ru/monitornig-cen-na-kaspi-ispolzuyte-nash-bot", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/ru/autoprices/monitornig-cen-na-kaspi-ispolzuyte-nash-bot.html"
    )
  );
});

app.get(
  "/ru/avtoobnovleniye-tsen-na-kaspi-kaspi-bot-v-deystvii",
  (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        "src",
        "/ru/autoprices/avtoobnovleniye-tsen-na-kaspi-kaspi-bot-v-deystvii.html"
      )
    );
  }
);

app.get("/ru/kaspi-bot-dlya-magazinov-vash-klyuch-k-uspekhu", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "src",
      "/ru/autoprices/kaspi-bot-dlya-magazinov-vash-klyuch-k-uspekhu.html"
    )
  );
});
app.get("/xdls", (req, res) => {
  res.header("X-FRAME-OPTIONS", `ALLOW-FROM https://app.salescout.me`);
  res.header("Content-Security-Policy", `frame-ancestors https://app.salescout.me`);

  res.sendFile(path.join(__dirname, "src", "xdls.html"));
});
app.get("/ru/*", (req, res) => {
  res.redirect("/ru/error-page");
});
app.get("*", (req, res) => {
  const originalUrl = req.originalUrl;
  res.redirect("/?originalUrl=" + originalUrl);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Client started at port ${PORT}`);
});
