const header = $('header');
const menuBtn = $('#menu-btn');
const closemenuBtn = $('#close-menu-btn');

$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20){
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
});

menuBtn.on("click",function(){
    header.toggleClass("show-mobile-menu");
});

closemenuBtn.on("click",function(){
    menuBtn.trigger("click");
});