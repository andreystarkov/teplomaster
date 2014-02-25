
    /* im@andreystarkov.ru */

    function itemMultiple($box, howMuch){
          var items = $box.html();
          for(var i = 1; i < howMuch; i++){

            $box.append(items);
          }
    }

    $(function(){

      itemMultiple($('.catalog-grid'), 4);
      itemMultiple($('.news-list'), 4);

      function isInt(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }

      $('.carousel').carousel({
            interval: 7000
       })

      $('.point input:radio').screwDefaultButtons({ image: 'url("images/radio-sprite.png")', width: 32, height: 33});

      $('#myTab a:last').tab('show');

      var allPanels = $('.accordion > dd').hide();
      var timer;
      var isOver;

      $('.box-search').append('<div class="field-corner"></div>');
      $('.spinner').each(function(){
        $(this).html('<i class="fa fa-caret-left left"></i><input type="text" name="count"><div class="right"></div><i class="fa fa-caret-right right"></i>');
      });


      $('.catalog-grid .item').hover(function(){
        $(this).find('i').animate({opacity: 1});
        $(this).transition({boxShadow: '0 0 8px rgba(86,152,201,0.8)', backgroundColor: 'rgba(255,255,255,1)'});
      }, function(){
         $(this).find('i').animate({opacity: 0.5});
        $(this).transition({boxShadow: '0 0 0 rgba(86,152,201,0)', backgroundColor: 'rgba(255,255,255,0.9)'});
      });

      $('.spinner i').click(function(){


        var obj = $(this).parent();
        var val = $('input', obj).val();

        if(isInt(val)){

          if($(this).hasClass('left')) val--;
          if($(this).hasClass('right')) val++;
          if(val >= 1) $('input', obj).val(val);

          if ($(this).parent().hasClass('basket-count')){
              var parent = $(this).parent().parent().parent();
              var cost = $('.cost', parent).html();
              var result = parseFloat(cost) * parseFloat(val);
              console.log(cost + ' * ' + val + ' = ' + result);
              $('.total', parent).html(result);
            }

              var total = 0;
               $('.total').each(function(){
                total = total + parseFloat($(this).html());
              });

               $('.mega-total b').html(total);
          }
      });

      $('.item img').click(function(){
        window.location.href = "catalog-detail.html";
      });

      $('.popup-catalog').mouseenter(function(){ isOver = true; });

      $('.catalog-grid .line .item b').each(function(){
        $(this).append('<i>&#8399;</i>');
      });

      $('.portfolio-item').each(function(){
        $(this).append('<i class="fa fa-search"></i>');
      });

      $('.portfolio-item').hover(function(){
        $('i', this).transition({opacity: 1});
      }, function(){
        $('i', this).transition({opacity: 0});
      });

      $('.accordion > dt').each(function(i){ i++; $(this).addClass('wn-'+i); });
      $('.accordion > dt').each(function(i){ i++; $(this).addClass('wn-'+i); });
      $('.accordion > dd').each(function(i){ i++; $(this).addClass('wn-'+i); });
      $('.accordion > dd').each(function(i){ i++; $(this).addClass('wn-'+i); });
      $('.spinner input').each(function(){ $(this).val('1'); });

      $('.btn-catalog').click( function(){
                $(this).addClass('active');
                $('.popup-catalog').fadeToggle();
       });

      $('.accordion > dd a').each(function(i, ai){
        i++; a1 = $(this).html();
        // $(this).html('<i class="fa fa-angle-double-right"></i> '+a1);
        $(this).addClass('wn-'+i);
     });

      $('.popup-catalog').mouseleave(function(){
          var _this = $(this);
          isOver = false;
          timer = setTimeout(function () {
              if(!isOver) _this.fadeToggle();
          }, 800);
      });

      $('.accordion > dt > a').click(function() {

        if(!($(this).hasClass('active'))){


            var target = $(this).parent().attr('class');
            $('.'+target+' i').addClass('happy');

            $('.'+target+' a').each(function(){
                $(this).addClass('parent');
            });

           // $('.accordion > dt > a i').each(function(){
           // }, {queue: false, duration: 100});

            $('.accordion > dt > a.active').removeClass('active');

            $(this).addClass('active');

            allPanels.slideUp();
            $(this).parent().next().slideDown();
            return false;
        } else { }

      });


    });