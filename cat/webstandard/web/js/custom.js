//라이트박스
$(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

//윈도우 팝업
$(".window").click(function(e){
     e.preventDefault();
    //window.open("파일명", "팝업이름", "옵션설정");
    //옵션: left, top, width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("popup.html","popup01","width=800, height=590,left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});


//레이어 팝업
$(".layer").click(function(e){
    e.preventDefault();
    //$("#layer").css("display","block;");
    //$("#layer").show();
    //$("#layer").fadeIn();
    $("#layer").slideDown();
});

$("#layer .close").click(function(){
    $("#layer").slideUp();
});

//탭메뉴
//var 변수는 데이터를 저장해 주는 저장소
var $tab_list = $(".tab_menu");
$tab_list.find("ul ul").hide(); //find 찾는다.
$tab_list.find("li.active > ul").show(); 

//함수는 동작들을 저장시켜 놓는것
function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
}
$tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu); //focus(tabMenu) 탭키 순서 적용하게 됨.



//배너
//html 마크업 셋팅 -> css 연동 -> 제이쿼리 연동 -> 제이쿼리 호출 순서대로 감.

$(".ban").slick({
    infinite: true,  //무한반복
    slidesToShow: 3,
    slidesToScroll: 3, //1칸씩 옮겨서 dots가 img 갯수대로 나옴 3칸씩 움직이면 dots가 3개만 나옴
    //arrows: false //화살표 prev,next 사라짐  , arrows:true는 기본값 없어도됨;
    autoplay: true, //자동 로딩
    autoplaySpeed: 3000,
    dots: true
});

//갤러리 

  $('.gallery_img').slick({
    dots: true,
    fade: true,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
}); //속성추가는 중괄호{} 넣어줘야함 ({})

$('.pause').on('click', function(){
    $('.gallery_img').slick('slickPause');
});

$('.play').on('click', function(){
    $('.gallery_img').slick('slickPlay');
});

$('.prev').on('click', function(){
    $('.gallery_img').slick('slickPrev');
});

$('.next').on('click', function(){
    $('.gallery_img').slick('slickNext');
});






//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn").click(function(e){
    e.preventDefault(); //a링크에 #이 걸려 있어서 클릭했을때 위로 올라감 그 기능을 깨주는 명령어
    //$("#cont_nav").css("dispaly","block");
    //css에 #cont_nav {display:block}

    //$("#cont_nav").show(); //dispaly:block으로 바꿔주는 명령어
    //$("#cont_nav").fadeIn();//서서히 나타나는 요소
    //$("#cont_nav").slideDown(); //말그대로 슬라이드 다운 단점은 한번나타남
    //$("#cont_nav").toggle(); //show, hide 합쳐놓은거임.
    //$("#cont_nav").fadeToggle(); //서서히 나타났다가 없어짐.
    $("#cont_nav").slideToggle(200); //이게 젤 자연스러움
    //$(".tit .btn").addClass("on"); //자기 버튼에 on이 붙음 어떤역할 해주냐면
    //$(".tit .btn").toggleClass("on"); // addClass + removeClass 합쳐진게 toggleClass
    $(this).toggleClass("on"); //자기 자신 this
});

