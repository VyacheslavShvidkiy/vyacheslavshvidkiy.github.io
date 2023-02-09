// присвоил переменой объект кнопка
let startBtn = document.querySelector("#start_game");
// присвоил переменой объект блока очки
let score = document.querySelector("#score");
// присвоил переменой объект аудио
let audioPlayer = document.querySelector("audio");
// присвоил переменой объект блока игры
let game = document.querySelector("#game");
// присвоил переменой объект блока старт
let start = document.querySelector("#start");
// присвоил переменой объект картинки звука
let soundBtn = document.querySelector("#sound img");
// присвоил переменой объект блока игрока
let gamer = document.querySelector("#player");
let gamerScin = "skin_1";   //в переменную заношу значение класса
let countLifes = 3;   // присваиваю перемнной начальное колличества жизней 
let countScore = 0;   // присваиваю перемнной начальное колличесвто очков
let scoreBlock = document.querySelector("#score"); // присваиваю переменной блок очков
// на кнопку старт игры повесил событие клик - выполнение функции
 startBtn.onclick = function() {  //вешею событие клик по кнопке Старт
    startGame();   // запускаю функцию старт игры
 }
 let sound = "off";   // создал переменную для проверки состояния проигрывателя
 soundBtn.onclick = () => { // повесил событие клик на кнопку звука
    if(sound == "on") {    // условие если переменная хранит состояние вкл
        soundBtn.src = "images/mute_sound.png";     // прописываем пусть нужной картинки
        sound = "off";     // меняем значение перемнной
        audioPlayer.pause();     // ставим плеер на паузу
    // если условие не сработало
    } else {
        soundBtn.src = "images/sound_on.png";       // прописываем пусть нужной картинки
        sound = "on";       // меняем значение перемнной
        audioPlayer.play();        // включаем плеер
    }
 }
// вешаем событие нажатия кнопки на весь документ и перемадем параметр события
 document.onkeydown = (event) => {
    // условие если событие содержит нажатие кнопки равное кей коду 87
    if(event.keyCode == 87) {
        gamer.style.top = gamer.offsetTop - 40 + "px";     //  от текущей позиции игрока убавляем 20px
        if(gamer.offsetTop < 45){                          // если отступ игрока слева меньше 45
            gamer.style.top = gamer.offsetTop + "px";      // присваиваем игроку значение сверху равное отступу сверху
        }
    }
    // условие если событие содержит нажатие кнопки равное кей коду 83
    if(event.keyCode == 83) {
        gamer.style.top = gamer.offsetTop + 40 + "px";      //  к текущей позиции игрока доавляем 20px
        let deviceHeight = document.querySelector("#app").clientHeight;       //присваиваем перемнной высоту экрана главного блога     
        if(gamer.offsetTop > deviceHeight - 200) {          // если отступ игрока сверху больше больше высоты экрана минус 200
            gamer.style.top = gamer.offsetTop + "px";       // присваеваем игроку отступ сверху равный текущему отсутпу
        }
    }
    // если нажата кнопка пробел
    if (event.keyCode == 32) {
        // запускаю функцию движения пули
        createBullet();
    }
 }
// функция старт игры
 function startGame() {
    // вывел блок с игрой
    game.style.display = "block";
    //  спрятал блок старт
    start.style.display = "none";
    game.className = gamerScin;    // даем игроку класс равный переменной
    createLifes();                 // запускаем функцию создание жизней
    createScore();                 // запускаем функцию создание очков
    createEnemy();                 // запускаем функцию создание противника
 }


//  Работа с врагами
// функция ранодомного числа
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);       // получить случайное число от (min-0.5) до (max+0.5)
    return Math.round(rand);   // возврвщаем число
  }
// функция создания противника
function createEnemy() {
        let enemy = document.createElement("div");         // присваиваю переменной создание блока
        enemy.className = "enemy " + typeEnemy();          // добавляю блоку класс
        let position = randomInteger(100, document.querySelector("#app").clientHeight - 150) + "px";    // присваиваю переменно рандомное число от 100 до высоты экрана -150
        enemy.style.top = position;                       // указываю значение отступа сверху
        game.appendChild(enemy);                          // добавляю к блоку игры противника
        moveEnemy(enemy);                                 // запускаю фцнкцию движения противника и передаю туда параметры
}
// функция типа противника
function typeEnemy() {
    if(randomInteger(1, 2) == 1) {                        // если рандомное число равно 1
        return "type-1";                                  // возвращаем значение 
    } else {                                              // иначе
        return "type-2";                                  // возвращаем значение 
    }
}

// функция движения противника
function moveEnemy(enemy) {
    let timerID = setInterval(function() {                 // функция повторения действий с интервалом 80мс
        enemy.style.left = enemy.offsetLeft - 10 + "px";   // присваиваю отступ противнику отнимая 10 от его позиции
        if(enemy.offsetLeft < -100) {                      // если отступ меньше -100
            enemy.remove();                                // удаляю противника
            clearInterval(timerID);                        // сбрасываю таймер
            createEnemy();                                 // запускаю создание протвника
            die();                                         // запускаю функцию смерти
        }
    }, 90);
}


// Выстрел пули

function createBullet() {
    let bullet = document.createElement("div");            // присваиваю перемнной создание блока
    bullet.className = "bullet";                           // добавляю блоку класс
    bullet.style.top = gamer.offsetTop + 140 + "px";       // указываю расстояние пули сверху с учетом отступа чтоб пуля соответствовала положению пушки
    bullet.style.left = gamer.offsetLeft + 140 + "px";     // указываю расстояние пули слева с учетом отступа чтоб пуля соответствовала положению пушки
    game.appendChild(bullet);                              // добавляю к блоку игры пулю
    moveBullet(bullet);                                    // запускаю функцию создание пули и передаю в нее параметр обьект пули
}
// функция движения пули
function moveBullet(bullet) {
    let timerBullet = setInterval(function() {              // создаю таймер движение пули
        bullet.style.left = bullet.offsetLeft + 10 +"px";   // передвигаю пулю по полю
        if(bullet.offsetLeft > document.querySelector("body").clientWidth) {         // если значение отступа пули больше ширины экрана
            bullet.remove();                                // удаляю пулю
            clearInterval(timerBullet);                     // останавливаю таймер
        }
        if(bullet.offsetTop != 0) {
            isBoom(bullet);                                 // запускаю фуекцию проверки столкновения пусли с противником
        }
    }, 10)
}

// функция попадания по врагу
function isBoom(bullet) {
    let enemy = document.querySelector(".enemy");           // создаю переменную с блоком врага
    if(bullet.offsetTop > enemy.offsetTop                   // делаю проверку отступов пули и врага
        && bullet.offsetTop < enemy.offsetTop + enemy.clientHeight
        && bullet.offsetLeft > enemy.offsetLeft) {
            createBoom(bullet.offsetTop, bullet.offsetLeft);      // вызываю создание взрыва и передаю параметры отступов сверху и слева
            bullet.remove();                                 // удаляю пулу
            enemy.remove();                                  // удаляю противника
            addScore();                                      // запускаю функцию добавления очков
            createEnemy();                                  // запускаю функцию зоздание противника
            console.log(bullet.offsetTop);  
    }
}
// функция уменьшения жизней
function die() {
    countLifes = countLifes - 1;                                // уменьшаю значение счетчика жизней на 1
    if(countLifes <= 0) {                                       // делау проверку условия
        endGame();                                              // запускаю функцию конец игры
    }
    createLifes();                                              // запускаю функцию создания жизней
}

// создание жизней
function createLifes() {
    let lifes = document.querySelector("#lifes");                   // присвоил переменой объект блока жизни
    lifes.innerHTML = "";                                           // вывел в текст жизни пустую строку
    let count = 0;                                                  // присвоил переменой начальное значение
    while(count < countLifes) {                                     // ппроверяю условие в цикле
        let span = document.createElement("span");                  // создаю элемент и помещаю в переменную
        lifes.appendChild(span);                                    // добавляю в блок жизней переменную с созданым элементом
        count = count + 1;                                          // увеличиваю счетчик на 1
    }
}
// функция обращения к блоку с очками и присваиванием значения
function createScore() {
    let score = document.querySelector("#score span");              // присвоил переменой объект блока очков
    score.innerText = countScore;                                   // вывел в текст значение счетчика очков
}
// функция прибавления очков
function addScore() {
    countScore = countScore + 1;                                    // счетчик очков увеличил на 1
    createScore();                                                  // вызвал функцию создания очков
}
// функция создания взрыва
function createBoom(top, left) {
    let boom = document.createElement("div");                       // создал блок
        boom.className = "boom";                                    // присвоил класс
        boom.style.top = top - 90 +"px";                            // присвоил отступ сверху
        boom.style.left = left + 20 + "px";                         // присвоил отступ слева
        boom.style.background = "url('images/boom.gif')";           // присвоил ссылку на фон
    game.appendChild(boom);                                         // добавил блок в игровое поле
    setTimeout(function () {
        boom.remove();                                              // удалил взрыв через 1 сек
    }, 1000);
}

// Функция завершения игры
function endGame() {
    let scoreBlock = document.querySelector("#end h3 span");        // присвоил переменой объект блока 
    scoreBlock.innerText = countScore;                              // вывел текст блока с очками равный счетчику
    game.innerHTML = "";                                            // убрал с игрового поля все элементы
    let endBlock = document.querySelector("#end");                  // присвоил переменой объект блока конец игры
    endBlock.style.display = "block";                               // вывел блок на экран
    let restartButton = document.querySelector("#restart");         // присвоил переменой объект кнопки перезагрузки
    restartButton.onclick = restart;
}

// функция перезарпуска игры
function restart() {
    location.reload();                                              // перезагрузка страницы
}

let selectSkin1 = document.querySelector("#skin_1");                // присвоил переменой объект блока скин 1
selectSkin1.onclick = function() {                                  // повесил клик на блок
    selectSkin1.className = "selected";                             // присвоил название класса
    selectSkin2.className = "";                                     // присвоил пустое название класса
    gamerScin = "skin_1";                                           // в переменную занес значение
    gamer.className = gamerScin;                                    // присвоил название класса
}
let selectSkin2 = document.querySelector("#skin_2");                // присвоил переменой объект блока скин 2
selectSkin2.onclick = function() {                                  // повесил клик на блок
    selectSkin2.className = "selected";                             // присвоил название класса
    selectSkin1.className = "";                                     // присвоил пустое название класса
    gamerScin = "skin_2";                                           // в переменную занес значение
    gamer.className = gamerScin;                                    // присвоил название класса
}