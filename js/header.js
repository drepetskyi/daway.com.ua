// ----- const header
const headerContainer = document.querySelector('.all-header');
headerContainer.innerHTML += 
`<nav>
<div class="logo-img">
<img class="img-header" src="../../img/logo.png" alt="картинка для хедера">
<a href="/dawaycomua/index.html">daway.news</a>
</div>
<ul>
<li> <a href = "../../events/events.html"> Події </a> </li>
<li> <a href = "/dawaycomua/finance/finance.html"> Фінанси </a> </li>
<li> <a href = "/dawaycomua/sports/sports.html"> Спорт </a> </li>
<li> <a href = "/dawaycomua/life/life.html"> Життя </a> </li>
</ul>
<div class="mob-menu">
<div class="btn-group">
    <button type="button" class="btn btn-primiry dropdown-toggle" data-bs-toggle="dropdown">
        menu
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
        <li> <button class="dropdown-item" type="button"><a href = "/dawaycomua/events/events.html">події</a></button></li>
        <li> <button class="dropdown-item" type="button"><a href = "/dawaycomua/finance/finance.html">фінанси</a></button></li>
        <li> <button class="dropdown-item" type="button"><a href = "/dawaycomua/sports/sports.html">спорт</a></button></li>
        <li> <button class="dropdown-item" type="button"><a href = "/dawaycomua/life/life.html">життя</a></button></li>
    </ul>
</div>
</div>
</nav>
<div class="yellow-line"></div>
<div class="phrases"></div>
<div class="date" id="date"></div>
`
// ----- current date and day
const date = new Date();
const days = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];
const day = days[date.getDay()];
const mounths = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];
const mount = mounths[date.getMonth()];
document.querySelector('.date').innerHTML = day + ' ' + date.getDate() + ' ' + mount + ' ' + date.getUTCFullYear();

// ----- phrasese, random
async function fetchJson() {
    const response = await fetch('/dawaycomua/json/data-phrases.json');
    const phrase = await response.json();
    const phrasesContainer = document.querySelector('.phrases');
    let phrasesDomSrring = '';
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };
    let i = getRandomInt(phrase.data.length);
    phrasesDomSrring += `<div class="phrase"> ${phrase.data[i].phrase + ' ' + phrase.data[i].author}</div> `
    phrasesContainer.innerHTML = phrasesDomSrring;
};
fetchJson();
setInterval(fetchJson, 10000);


// -------- footer for all
document.querySelector('.main-footer').innerHTML += `
<a href="/dawaycomua/index.html">daway.news</a>
<a href="/dawaycomua/cookie.html">Про нас</a>
<div class="text-for-footer"> created by D&A.way
</div>
<!-- <div class="login">
    <a href="login.html">login</a>
</div> -->

<div id="consent-popup" class="hidden">
<p>Продовжуючи перебувати на сайті Ви погоджуєтесь з <a href="/dawaycomua/cookie.html" id="condition"> умовами його використання</a>.
    <a id="accept" href="#">Згоден</a>
</p>
</div>
`
