$(function(){
    $(".header_menu>li").mouseenter(function(){
        $(".subbg").stop().slideDown();
    });
    $(".header_menu>li").mouseleave(function(){
        $(".subbg").stop().slideUp();
    });
    
    $(".header_menu>li").mouseenter(function(){
        $("#header").css("background","#fff");
        $("#top").css("background","#fff");
        $(".header_menu>li>a").css("color","#232323");
    });
    $(".header_menu>li").mouseleave(function(){
        
        $("#header").css("background","none");
        $("#top").css("background","none");
        $(".header_menu>li>a").css("color","#fff");
        
    });

});