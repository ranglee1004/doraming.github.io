//imageProgress
function imagesProgress() {
    var $container = $("#progress"),
        $progressBar = $container.find(".progress-bar"),
        $progressText = $container.find(".progress-text"),
        imgLoad = imagesLoaded("body"),
        imgTotal = imgLoad.images.length,
        imgLoaded = 0,
        current = 0,
        progressTimer = setInterval(updateProgress, 1000 / 60); //1초에 60번

    imgLoad.on("progress", function() {
        imgLoaded++;
    });

    function updateProgress() {
        var target = (imgLoaded / imgTotal) * 100;

        current += (target - current) * 0.1;
        $progressBar.css({width: current + '%'});
        $progressText.text(Math.floor(current) + '%');

        if (current >= 100) {
            clearInterval(progressTimer); 
            $progressBar.add($progressText)
                .delay(500)
                .animate({opacity: 0}, 250, function() {
                    $container.animate({top: '-110%' }, 1000, 'easeInOutQuint');
                    setTimeout(function(){
                        hello();                   
                    },200);
                });
            
            $("body").addClass("active");
          
            var hello_ = "";
            
            hello_ += "<span>h</span>";
            hello_ += "<span>e</span>";
            hello_ += "<span>l</span>";
            hello_ += "<span>l</span>";
            hello_ += "<span>o</span>";
            
//            text_.css({color:"#000"});
            
            $("#section1 .hello h2").html(hello_); //hello
//            $('.hello').html("ahbd");
//            text0();         
            
          
            
        }
        if (current > 99.9) {
            current = 100;
        }            
        
         
    }

}
imagesProgress();

/*text0();*/
//텍스트 애니메이션
function hello(){    
    $("#section1 .hello h2 span").each(function(i){
        setTimeout(function(){
            if ( i == 0 ){
                $("#section1 .hello h2 span").eq(i).addClass("show");
            } else {
               $("#section1 .hello h2 span").eq(i).addClass("show"); 
            }

        },650*(i+1));
    }); 
        
}

//햄버거
$('.ham').click(function(){
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});

$('.overlay-menu li').click(function(){
   $('.ham').toggleClass('active');
   $('#overlay').removeClass('open');

});


var text1 = $("#section2 h2").text().split("").join("</span><span>");
text1 = "<span>" + text1 + "</span> ";
$("#section2 h2").html(text1);


//테스트 분할
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();             

        if(wScroll >= $("#section2").offset().top - $(window).height()/2){
            $("#section2 h2 span").each(function(i){
                setTimeout(function(){
                    $("#section2 h2 span").eq(i).addClass("show");
                },100*(i+1));
            });           
        }
        if(wScroll >= $("#section3").offset().top - $(window).height()/2){
            $("#section3").addClass("show");               
        }
        if(wScroll >= $("#section4").offset().top - $(window).height()/2){
            $("#section4").addClass("show");               
        }
});

//스크롤 시 애니메이션
var cont = $("#contents > div");

$(window).scroll(function(){
var wScroll = $(this).scrollTop();


 //스크롤시 로고 색상변경
if(wScroll >= $("#section1").offset().top -$(window).height()/1.5){
    $("#Layer_1").removeClass("black");      
}    
if(wScroll >= $("#section2").offset().top -$(window).height()/1.5){
    $("#Layer_1").addClass("black");      
}

if(wScroll >= $("#section3").offset().top -$(window).height()/1.5){
    $("#Layer_1").removeClass("black");
}

if(wScroll >= $("#section4").offset().top -$(window).height()/1.5){
    $("#Layer_1").addClass("black");
}
//스크롤시 메뉴색상 변경
if(wScroll >= $("#section1").offset().top -$(window).height()/1.5){
    $(".ham").removeClass("black");
}   
if(wScroll >= $("#section2").offset().top -$(window).height()/1.5){
    $(".ham").addClass("black");        
} 

if(wScroll >= $("#section3").offset().top -$(window).height()/1.5){
    $(".ham").removeClass("black");
} 

if(wScroll >= $("#section4").offset().top -$(window).height()/1.5){
    $(".ham").addClass("black");
}     



//이미지 트렌지션 #section2
if(wScroll >= $("#section2  .sec3 .work01").offset().top -$(window).height()/1.5){
    $("#section2  .sec3 .work01").addClass("show");

}else {
    $("#section2  .sec3 .work01").removeClass("show");                
}

if(wScroll >= $("#section2 .sec3 .img01 img").offset().top -$(window).height()/1.5){
    $("#section2 .sec3 .img01 img").addClass("show");

}else {
    $("#section2 .sec3 .img01 img").removeClass("show");       
}

if(wScroll >= $("#section2 .sec3 .work02").offset().top -$(window).height()/1.5){
    $("#section2 .sec3 .work02").addClass("show");
}else {
    $("#section2 .sec3 .work02").removeClass("show");
}

if(wScroll >= $("#section2 .sec3 .img02 img").offset().top -$(window).height()/1.5){
    $("#section2 .sec3 .img02 img").addClass("show");

}else {
    $("#section2 .sec3 .img02 img").removeClass("show");                
}

if(wScroll >= $("#section2 .sec3 .work03").offset().top -$(window).height()/1.5){
    $("#section2 .sec3 .work03").addClass("show");
}else {
    $("#section2 .sec3 .work03").removeClass("show");
}  

if(wScroll >= $("#section2 .sec3 .img03 img").offset().top -$(window).height()/1.5){
    $("#section2 .sec3 .img03 img").addClass("show");

}else {
    $("#section2 .sec3 .img03 img").removeClass("show");                
} 

if(wScroll >= $("#section2 .sec3 .work04").offset().top -$(window).height()/1.5){
    $("#section2 .sec3 .work04").addClass("show");
}else {
    $("#section2 .sec3 .work04").removeClass("show");
}

if(wScroll >= $("#section2 .sec3 .img04 img").offset().top -$(window).height()/1.5){
    $("#section2 .sec3 .img04 img").addClass("show");

}else {
    $("#section2 .sec3 .img04 img").removeClass("show");                
}   

if(wScroll >= $("#section2 .sec3 .work05").offset().top -$(window).height()/1.5){
    $("#section2 .sec3 .work05").addClass("show");
}else {
    $("#section2 .sec3 .work05").removeClass("show");
}

    
        
    
/*
if(wScroll >= $("#section3 .skill2").offset().top -$(window).height()/1.5){
    $("#section3 .skill2").addClass("show");
}else {
    $("#section3 .skill2").removeClass("show");
}    

    
     /*  if(wScroll >= $("#section2 .sec3 .img05 img").offset().top -$(window).height()/1.5){
        $("#section2 .sec3 .img05 img").addClass("show");

    }else {
        $("#section2 .sec3 .img05 img").removeClass("show");                
    }*/
    


        
//#section3
/*if(wScroll >= $("#section3 .sec2 .work01").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .work01").addClass("show");
}else {
    $("#section3 .sec2 .work01").removeClass("show");                
}

if(wScroll >= $("#section3 .sec2 .img01 img").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .img01 img").addClass("show");

}else {
    $("#section3 .sec2 .img01 img").removeClass("show");       
}

if(wScroll >= $("#section3 .sec2 .work02").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .work02").addClass("show");
}else {
    $("#section3 .sec2 .work02").removeClass("show");
}

if(wScroll >= $("#section3 .sec2 .img02 img").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .img02 img").addClass("show");

}else {
    $("#section3 .sec2 .img02 img").removeClass("show");                
}

if(wScroll >= $("#section3 .sec2 .work03").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .work03").addClass("show");
}else {
    $("#section3 .sec2 .work03").removeClass("show");
}

if(wScroll >= $("#section3 .sec2 .img03 img").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .img03 img").addClass("show");

}else {
    $("#section3 .sec2 .img03 img").removeClass("show");                
}

if(wScroll >= $("#section3 .sec2 .work04").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .work04").addClass("show");
}else {
    $("#section3 .sec2 .work04").removeClass("show");
}

if(wScroll >= $("#section3 .sec2 .img04 img").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .img04 img").addClass("show");

}else {
    $("#section3 .sec2 .img04 img").removeClass("show");                
}

if(wScroll >= $("#section3 .sec2 .img04_1 img").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .img04_1 img").addClass("show");

}else {
    $("#section3 .sec2 .img04_1 img").removeClass("show");                
}

if(wScroll >= $("#section3 .sec2 .work05").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .work05").addClass("show");
}else {
    $("#section3 .sec2 .work05").removeClass("show");
}

if(wScroll >= $("#section3 .sec2 .img05 img").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .img05 img").addClass("show");

}else {
    $("#section3 .sec2 .img05 img").removeClass("show");                
}

if(wScroll >= $("#section3 .sec2 .img06 img").offset().top -$(window).height()/1.5){
    $("#section3 .sec2 .img06 img").addClass("show");

}else {
    $("#section3 .sec2 .img06 img").removeClass("show");                
}*/
  

    
if(wScroll >= $("#section3 .sec3 h2").offset().top -$(window).height()/1.5){
    $("#section3  .sec3 h2").addClass("show");               
} else {
    $("#section3  .sec3 h2").removeClass("show");
}


 if(wScroll >= $(".sec3 h2").offset().top -$(window).height()/1.5){
    $("#section3 .sec3 h2").addClass("show");               
}else {
    $("#section3 .sec3 h2").removeClass("show");
}



if(wScroll >= $(".propile_img").offset().top -$(window).height()/1.5){
    $(".propile_img").addClass("show");               
}else {
    $(".propile_img").removeClass("show");
}            

 if(wScroll >= $(".propile_img .propile_name").offset().top -$(window).height()/1.5){
    $(".propile_img .propile_name").addClass("show");               
}else {
    $(".propile_img .propile_name").removeClass("show");
}


//section2 about
if(wScroll >= $(".sec1").offset().top){
    $("#Layer_1").removeClass("black");
    $(".menu").removeClass("black");
}

if(wScroll >= $(".sec2").offset().top){
    $("#Layer_1").addClass("black");
    $(".menu").addClass("black");
}

if(wScroll >= $(".sec3").offset().top){
    $("#Layer_1").removeClass("black");
    $(".menu").removeClass("black");
}

          

if(wScroll >= $(".sec3 .work_column .project2").offset().top){
    $(".sec3 .work_column .skill-bar").addClass("show");
}                
            
    

//conact 팝업
$('#pop').hide();
$('.content_but p').click(function(){
    $('#pop').css('display','block');
    $('form').css('background','rgba(0,0,0,1)');            
});

$('button').click(function(){
    $('#pop').css('display','none');
});


   

});

