function addPhoto(thumbnailUrl) {
    const img = document.createElement('img'); //создаем блок для картинки
    img.src = thumbnailUrl;//передаем картинку ссылочкой
    document.querySelector('.main_gallery').appendChild(img);// добавляем картинку в дерево
}

let currentPage = Math.ceil(Math.random()*600);

function addPage(currentPage) {
    document.querySelector('.preloader').setAttribute('style', 'display: inline;');

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=8&_page=' + currentPage)
        .then(response => response.json())
        .then(data => {
                for (let item of data) {
                    addPhoto( item['thumbnailUrl'])
                }
                document.querySelector('.preloader').setAttribute('style', 'display: none;'); //скрыть котика
                document.querySelector('.error').setAttribute('style', 'display: none;');
            }
        ).catch((error) => {
        console.log(error);
        document.querySelector('.error').setAttribute('style', 'display: inline;')
    });
}

//addPage(currentPage);//добавляем первый раз

document.querySelector('.more').addEventListener("click", function () { //по нажатию кнопочки
    let currentPage = Math.ceil(Math.random()*600); //случайная страница
    addPage(currentPage); //добавляем на страницу
})