
   $(function() {
     
  
      $("<select/>").appendTo(".menu-contextual .selectMenu");

      $(".menu-contextual li a").each(function() {
       var el = $(this);
       $("<option />", {
           "value"   : el.attr("href"),
           "text"    : el.text()
       }).appendTo(".menu-contextual select");
      });
      $(".menu-contextual select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
   
   });

   $(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
  $( document ).on( "mobileinit", function() {
$.mobile.table.prototype.options.initSelector = ".table";
});
});