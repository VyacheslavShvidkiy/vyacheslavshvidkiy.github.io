let burgerBtn = document. querySelector('.burger_menu');
let nav = document. querySelector('.nav');
let body = document.getElementsByTagName('body');
burgerBtn.addEventListener('click',function(){
    burgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
    // body.toggle('lock');
});

const select = document.querySelector('select');
const allLang = ['en', 'ua'];
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#'+ lang;
    location.reload();
}

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    for (let key in langArr){
        document.querySelector('.lng-'+ key).innerHTML = langArr[key][hash];
    }
}
changeLanguage();

  $(document).ready(function(){
    $('#spy').scrollSpy({
        offset: 0,
        scrollDuration: 0,
        scrollEasing:'swing',
        activeClass:'active',
        anchors: ['a[href*=\\#]'],
    });
    $('.burger_menu').click(function(event){
        $('body').toggleClass('lock');
        if  ($(window).scrollTop() > 600);
            $('body').removeClass('lock');
    });
    $(window).scroll(function(){
        if  ($(window).scrollTop() > 300)
            $('#spy').animate({'bottom':'0px'});
            else
            $('#spy').stop(true).animate({'bottom':'-120px'});   
        }); 
  }); 