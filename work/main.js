$(document).ready(function(){
    $("#icon").click(function(){
        $('ul').toggleClass('show');
        });
    });

    $(document).ready(function(){
        $(".grid").children().hover(function(){
            $(this).find("img").toggleClass("imagerotate")
            });
        
        
        
        });