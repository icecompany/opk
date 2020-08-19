'use strict';
function open(elem) {
    location.href = `${elem}.html`;
}

function selectDate(dat) {
    let cards = document.querySelectorAll(".card");
    $(cards).hide();
    $(`.${dat}`).show();
    let dates = document.querySelectorAll(".dates > button");
    dates.forEach(function (elem) {
        elem.className = "btn btn-outline-secondary";
        if (elem.id === dat) elem.className = "btn btn-outline-danger";
    });
}

function goHome() {
    location.href = "/";
}

window.onload = function () {
    document.addEventListener('contextmenu', event => event.preventDefault());
    let cards = document.querySelectorAll(".card");
    cards.forEach(function (card) {
        card.addEventListener('click', () => {open(card.id)}, false);
    });
    let dates = document.querySelectorAll(".dates > button");
    dates.forEach(function (elem) {
        elem.addEventListener('click', () => {selectDate(elem.id)}, false);
    });
    let home = document.querySelector("#home");
    if (home !== null) home.addEventListener('click', () => {goHome()}, false);

    loadLang();
}

let Lang = {
    ru: {
        event: {
            head: 'Мероприятие',
            date: 'Дата',
            time: 'Время',
            place: 'Место проведения',
            sponsor: 'Ороганизатор',
            contacts: 'Контакты организатора',
        },
        button: {
            back: 'Назад',
            more: 'Подробнее',
        }
    }
};

function loadLang() {
    let head = document.querySelector("#event-head");
    if (head !== null) head.textContent = Lang.ru.event.head;
    let date = document.querySelectorAll(".lang-date");
    if (date !== null) date.forEach(function(elem) {elem.textContent = Lang.ru.event.date;});
    let tm = document.querySelectorAll(".lang-time");
    if (tm !== null) tm.forEach(function(elem) {elem.textContent = Lang.ru.event.time;});
    let place = document.querySelectorAll(".lang-place");
    if (place !== null) place.forEach(function(elem) {elem.textContent = Lang.ru.event.place;});
    let sponsor = document.querySelectorAll(".lang-sponsor");
    if (sponsor !== null) sponsor.forEach(function(elem) {elem.textContent = Lang.ru.event.sponsor;});
    let contacts = document.querySelectorAll(".lang-contacts");
    if (contacts !== null) contacts.forEach(function(elem) {elem.textContent = Lang.ru.event.contacts;});
    let back = document.querySelector("#btn-back");
    if (back !== null) back.textContent = Lang.ru.button.back;
    let more = document.querySelectorAll(".btn-more");
    if (more !== null) more.forEach(function(elem) {elem.textContent = Lang.ru.button.more;});
}
