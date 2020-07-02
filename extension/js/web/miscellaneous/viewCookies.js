(function() {
    'use strict';

    window.viewCookies = function() {
      if (document.cookie) {
        const cookies = document.cookie
          .split(/; ?/)
          .map(s => {
            const [ , key, value ] = s.match(/^(.*?)=(.*)$/);
            return {
              key,
              value: decodeURIComponent(value)
            };
          });

        console.table(cookies);
      }
      else {
        console.warn('document.cookie is empty!');
      }
    };
  })();

  window.viewCookies();
