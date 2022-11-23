$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
})

var num = 10;
var num2 =20;
var num3 =30;

let res =Math.max(num,num2,num3);
console.log(res);
