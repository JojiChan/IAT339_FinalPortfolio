


             //let the image folow the mouse
             $(document).bind('mousemove', function(e){
              $('#cursor').css({

                //image location
                left: e.pageX + 100,
                top: e.pageY - 400,
                
              });
            });



            //product link hovering display image
            $("#pro").hover(function(){
             $("#cursor").css("display","inline-block");
             $("#brand_1").attr("src","img/thumbnail/bolin233-11-min.jpg");
           },function(){
            $("#cursor").css("display","none");
            $("#brand_1").attr("src","bolin233-11.jpg");

          });






            //about link hovering display image
            $("#abo").hover(function(){
             $("#cursor").css("display","inline-block");
             $("#brand_1").attr("src","img/thumbnail/duck-wall-min.jpg");
           },function(){
            $("#cursor").css("display","none");
            $("#brand_1").attr("src","img/duck-wall.jpg");

          });


            //showcase link hovering display image
            $("#show").hover(function(){
             $("#cursor").css("display","inline-block");
             $("#brand_1").attr("src","img/thumbnail/game2-1-min.jpg");
           },function(){
            $("#cursor").css("display","none");
            $("#brand_1").attr("src","img/game2-1.jpg");

          });



            //citation link hovering display image
            $("#cit").hover(function(){
             $("#cursor").css("display","inline-block");
             $("#brand_1").attr("src","img/thumbnail/Pattern-05-min.jpg");
           },function(){
            $("#cursor").css("display","none");
            $("#brand_1").attr("src","img/Pattern-05.jpg");

          });


            //styleguide link hovering display image
            $("#stg").hover(function(){
             $("#cursor").css("display","inline-block");
             $("#brand_1").attr("src","img/01.jpg");
           },function(){
            $("#cursor").css("display","none");
            $("#brand_1").attr("src","img/01.jpg");

          });


             $("#wp").hover(function(){
               $("#cursor").css("display","inline-block");
               $("#brand_1").attr("src","img/poster1.jpg");
             },function(){
              $("#cursor").css("display","none");
              $("#brand_1").attr("src","img/poster1.jpg");

            });


            //product link hovering display image
    





