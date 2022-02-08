$(document).ready(function(){
    alert("working")
    $("#backmobiledriveway").click(function(){
        console.log("clickback")
        window.location.replace("google.com")
    })

    $("#nextmobiledriveway").click(function(){
        console.log("click forward with id")
        window.location.replace("/portfolio/portfolio-pages/finearts-subpages/fennic.html")
    })
    
    });