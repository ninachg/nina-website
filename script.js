jQuery(document).ready(function(){
   $('h1').mousemove(function(e){
     var rXP = (e.pageX - this.offsetLeft-$(this).width()/2);
     var rYP = (e.pageY - this.offsetTop-$(this).height()/2);
     $('h1').css('text-shadow', +rYP/10+'px '+rXP/80+'px rgb(255, 70, 78), '+rYP/8+'px '+rXP/60+'px rgba(255,237,66,1), '+rXP/70+'px '+rYP/12+'px rgb(70,200,220)');
   });
});

