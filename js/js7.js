function over(){     

 var brand1 = document.getElementById("brand1");
 var cursor = document.getElementById("cursor");
 // $("#brand1").attr('src', 'img/cv.jpg');
 if (cursor.style.display = "none"){ cursor.style.display = "inline-block";}
 else{
       // document.getElementById("brand1").src = "img/cv.jpg";
     }




                // obj.style.background = "pink";

              }

              function out(){
               var cav = document.getElementById("cav");
               var cursor = document.getElementById("cursor");
               if (cursor.style.display = "inline-block"){ cursor.style.display = "none";}





             }


             $(document).bind('mousemove', function(e){
              $('#cursor').css({
                left: e.pageX + 5,
                top: e.pageY - 200
              });
            });



             $("#cav").hover(function(){
               $("#brand_1").attr("src","img/cv.jpg");
             },function(){
              $("#brand_1").attr("src","img/cv.jpg");
            });




             $("#con").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/clot.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/clot.jpg");

            });

             $("#hm").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/hm.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/hm.jpg");

            });
             $("#tnf").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/tnf.jpeg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/tnf.jpeg");

            });

             $("#ud").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/undercover.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/tnf.jpeg");

            });
             $("#wp").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/wtaps.jpeg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/tnf.jpeg");

            });
              $("#vv").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/visvim.jpeg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/tnf.jpeg");

            });
