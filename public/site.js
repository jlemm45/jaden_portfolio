(function () {
  console.warn(
    'Hey! Want to see the src? Check out github https://github.com/jadenlemmon/jadenlemmon.com'
  );
  $(window).on('load resize', function () {
    $('#hero').height(window.innerHeight);

    var $el = $('#text-contain');
    if (window.innerWidth <= 640 || window.innerHeight <= 675) {
      var elHeight = $el.outerHeight();
      var elWidth = $el.outerWidth();

      var scale = Math.min(
        window.innerWidth / elWidth,
        window.innerHeight / elHeight
      );

      scale = scale > 1 ? 1 : scale;

      $el.css({
        transform:
          'translate(' +
          -60 * (1 - scale) * (1 - scale) +
          '%, 20%) scale(' +
          scale +
          ')',
      });
    } else {
      $el.css({
        transform: 'scale(1)',
      });
    }
  });

  $(document).on('click', 'a[href]', function (event) {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });
})();
