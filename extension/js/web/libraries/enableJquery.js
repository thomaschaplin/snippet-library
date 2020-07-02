(function () {

  if (!window.jQuery) {
    const dollarInUse = !!window.$;
    const script = document.createElement('script');
    script.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
    script.addEventListener('load', function () {
      console.log('jQuery loaded!');

      if (dollarInUse) {
        jQuery.noConflict();
        console.log('`$` already in use; use `jQuery`');
      }
    });

    document.body.appendChild(script);
  }

})();
