


    $(function () {

    function isInt(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

      $('.carousel').carousel({
            interval: 7000
       })

      $('#myTab a:last').tab('show');


      $('.btn-catalog').click( function(){

                $(this).addClass('active');
                $('.popup-catalog').fadeToggle();


       });

      var allPanels = $('.accordion > dd').hide();

      $('.accordion > dt').each(function(i){ i++; $(this).addClass('wn-'+i); });
      $('.accordion > dd').each(function(i){ i++; $(this).addClass('wn-'+i); });
      $('.accordion > dd').each(function(i){ i++; $(this).addClass('wn-'+i); });

      $('.spinner').each(function(){
        $(this).html('<i class="fa fa-caret-left left"></i><input type="text" name="count"><div class="right"></div><i class="fa fa-caret-right right"></i>');
      });

      $('.catalog-grid .item input').each(function(){
        $(this).val('1');
      });
      $('.spinner').hover(function(){
        $('i', this).fadeTo(1, 500);
      }, function(){
        $('i', this).fadeTo(0.3, 500);
      });

      $('.spinner i').click(function(){
        var obj = $(this).parent();
        var val = $('input', obj).val();
        if(isInt(val)){
            if($(this).hasClass('left')) val--;
            if($(this).hasClass('right')) val++;
            $('input', obj).val(val);
        }

      });

      $('.accordion > dd a').each(function(i, ai){
        i++; a1 = $(this).html();
        $(this).html('<i class="fa fa-long-arrow-right"></i> '+a1);
        $(this).addClass('wn-'+i);

    });
      $('.accordion > dt > a').click(function() {


                if(!($(this).hasClass('active'))){

                    var target = $(this).parent().attr('class');
                    $('.'+target+' i').addClass('happy');

                    $('.'+target+' a').each(function(){
                        $(this).addClass('parent');

                    });

                    $('.accordion > dt > a').each(function(){
                        $(this).removeClass('active');

                    });

                    $(this).addClass('active');

                    allPanels.slideUp();
                    $(this).parent().next().slideDown();
                    return false;
                } else {

                }



      });


    });