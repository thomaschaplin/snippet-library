(function() {
    window.wrapElement = function(el, whatToWrapIn) {
      var newParent = document.createElement(whatToWrapIn),
          oldParent,
          nextSibling;

      if (typeof el === 'string') {
        el = document.querySelector(el);
      }

      oldParent = el.parentNode;
      nextSibling = el.nextSibling;
      newParent.appendChild(el);
      if (nextSibling) {
        oldParent.insertBefore(newParent, nextSibling);
      } else {
        oldParent.appendChild(newParent);
      }
    }

  })();
