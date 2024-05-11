// Проверяем, есть ли значение LOCAL_LANGUAGE в localStorage
const localLanguage = localStorage.getItem("LOCAL_LANGUAGE");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const originalUrl = urlParams.get("originalUrl");

if (localLanguage === "ru") {
  window.location.href = originalUrl ? `/ru${originalUrl}` : "/ru";
} else if (localLanguage === "kz") {
  window.location.href = originalUrl ? `/kz${originalUrl}` : "/kz";
} else {
  window.location.href = originalUrl ? `/ru${originalUrl}` : "/ru";
}
