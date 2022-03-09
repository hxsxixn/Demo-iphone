var button_audio=new Audio("https://monoame.com/awi_class/ballsound/click14.wav");

var screen_audio=new Audio("https://monoame.com/awi_class/ballsound/click18.wav");

var home_audio=new Audio("https://monoame.com/awi_class/ballsound/click23.wav");

var wiggle_audio=new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");

$(".i6").click(function(){
  $(".name").text("iPhone 6");
  $(".screen").css("width","220px");
  $(".screen").css("height","300px");
  button_audio.play();
                          });

$(".i6s").click(function(){
  $(".name").text($(this).text());
  $(".screen").css("width","200px");
  $(".screen").css("height","280px");
  button_audio.play();
                          });

$(".i7").click(function(){
  $(".name").text($(this).text());
  $(".screen").css("width","240px");
  $(".screen").css("height","340px");
  button_audio.play();
                          });

$(".i8").click(function(){
  $(".name").text("iPhone 8");
  $(".screen").css("width","220px");
  $(".screen").css("height","310px");
  button_audio.play();
                          });

var wigtime=21
setInterval(function(){
  if(wigtime<=20){
    wigtime+=1;
    console.log(wigtime);
    if(wigtime%2==0){$(".phone").css("left","-30px")}else{$(".phone").css("left","30px")};
    if(wigtime==21){$(".phone").css("left","0px")}};
},60);

$(".wiggle").click(function(){wigtime=0;
                             wiggle_audio.play();})

var ro=0;
$(".turn").click(function(){ 
  ro+=1;
  console.log(ro);
  $(".phone").css("transform","rotate("+ro*360+"deg)");
});

var pp=0;

$(".screen").click(function(){
  pp+=1;
  if(pp>2){pp=0};
  $(".pages").css("left","-"+pp*100+"%");
  screen_audio.play();
});

$(".button").click(function(){
    pp=0;
  $(".pages").css("left","0") ;
  home_audio.play();
});

$(".white").click(function(){$(".phone").css("background-color","#eee");
   button_audio.play();});
$(".gold").click(function(){$(".phone").css("background-color","#fff696");
 button_audio.play();});
$(".pink").click(function(){$(".phone").css("background-color","#ffb8f1");button_audio.play();
  button_audio.play();});
$(".blue").click(function(){$(".phone").css("background-color","#96d2ff");
  button_audio.play();});
$(".red").click(function(){$(".phone").css("background-color","#f24");
  button_audio.play();});