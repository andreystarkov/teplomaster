
    /* im@andreystarkov.ru */

    function itemMultiple($box, howMuch){
          var items = $box.html();
          for(var i = 1; i < howMuch; i++){
            $box.append(items);
          }
    }

    function loadScript(url, callback){
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        script.onreadystatechange = callback;
        script.onload = callback;

        head.appendChild(script);
    }

    function isInt(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

    $(function(){

      loadScript('js/init.js');

      var timer, isOver;

      $('.item img').click(function(){
        window.location.href = "catalog-detail.html";
      });

      // tools & events

      $('.catalog-grid .item').hover(function(){
        $(this).find('i').animate({opacity: 1});
        $(this).transition({boxShadow: '0 2px 8px rgba(86,152,201,0.7)', backgroundColor: 'rgba(255,255,255,1)'});
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

          if ($(this).parent().hasClass('cart-count')){
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

      $('.popup-catalog').mouseenter(function(){ isOver = true; });

      $('.portfolio-item').hover(function(){
        $('i', this).transition({opacity: 1});
      }, function(){
        $('i', this).transition({opacity: 0});
      });

      $('.btn-catalog').click( function(){
                $(this).addClass('active');
                $('.popup-catalog').fadeToggle();
       });

      $('.popup-catalog').mouseleave(function(){
          var _this = $(this);
          isOver = false;
          timer = setTimeout(function () {
              if(!isOver) _this.fadeToggle();
          }, 800);
      });

      var allPanels = $('.accordion > dd').hide();
      allPanels.slideDown();

      $('.accordion > dt > a').each(function(){ $(this).addClass('active') });

      $('.accordion > dt > a').click(function() {

            var target = $(this).parent().attr('class');

            if ( !($(this).hasClass('active')) ){
              $('.accordion > dt > a.active').removeClass('active');
              $(this).addClass('active');
              allPanels.slideUp();
              $(this).parent().next().slideDown();
            } else {
              $(this).removeClass('active');
              $(this).parent().next().slideUp();
            }
            return false;

      });


    });