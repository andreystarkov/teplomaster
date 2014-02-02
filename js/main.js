
    $(function () {

      $('.carousel').carousel({
            interval: 7000
       })


      $('.btn-catalog').click( function(){
            $(this).addClass('active');
            $('.popup-catalog').fadeToggle();
       });


      var allPanels = $('.accordion > dd').hide();

      $('.accordion > dt > a').click(function() {
        allPanels.slideUp();
        $(this).parent().next().slideDown();
        return false;
      });


    });