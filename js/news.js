const dateCurr = new Date();
const dateForCheckDate = (dateCurr.getMonth() + 1) + '-' + dateCurr.getDate() + '-' + dateCurr.getUTCFullYear();
let addTextAboutAgo = "більше року тому";
let acrticleContainer = document.querySelector('.art-news');
let addNews = ``;

async function feachNews() {

    const newsdata = await (await fetch('/dawaycomua/json/data-all.json')).json();
    const news = newsdata;

    for (let i = news.all.length - 1; i >= 0; i--) {
        let rezultInDays =  Math.round((Date.parse(dateForCheckDate) - Date.parse(news.all[i].publicDate)) / 1000 / 60 / 60 / 24);
        switch (true) {
            case rezultInDays === 0:
                addTextAboutAgo = " сьогодні";
                break;
            case rezultInDays <= 1:
                addTextAboutAgo = " вчора";
                break;
            case rezultInDays <= 4:
                addTextAboutAgo = " " + rezultInDays + " дні тому";
                break;
            case rezultInDays <= 7:
                addTextAboutAgo = " " + rezultInDays + " днів тому";
                break;
            case rezultInDays <= 30:
                addTextAboutAgo = " понад тиждень тому";
                break;
            case rezultInDays <= 365:
                addTextAboutAgo = " понад місяць тому";
                break;
        };
        addNews += `<div class="card-news" cat="${news.all[i].cat}">
                    <div class="text-for-news">
                        <div class="part-one">
                            <img class="img-for-news" src="/dawaycomua/${news.all[i].image}" alt="${news.all[i].altForImg}">
                            <div class="headline"> <h1> <a>${news.all[i].headline} </a></h1>
                                <div class="heading">${news.all[i].heading}</div>
                            </div>
                        </div>
                        <div id="fb-root"></div>
                        <p class="part-start"> <a href="/dawaycomua/${news.all[i].link}"> Читати більше...</a></p>
                        <div class="published" pub="${news.all[i].publicDate}"> Опубліковано ${addTextAboutAgo}</div>
                    </div>
                </div>
                <div class="fb-comments" data-href="https://drepetskyi.github.io/dawaycomua/" data-width="100%" data-numposts="1"></div>`;


        acrticleContainer.innerHTML = addNews;
    }

    const cardsNews = document.querySelectorAll('.card-news');
    const filter = document.querySelector('.art-news').getAttribute('category');
    cardsNews.forEach(elem => {
        elem.classList.remove('hide');
        if (elem.getAttribute('Cat') !== filter) {
            elem.classList.add('hide');
        }
    });

};

feachNews();





