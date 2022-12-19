if ($(window).width() < 900) {   
    $(document).ready(function() {
        $('#ssoToggle').click(function() {
          $('#side_Bar').toggle();
          $('#sideBarContent').toggleClass('fullWidth')
        });
      });
      
      
 }
 