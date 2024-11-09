"use strict";

var xhr = new XMLHttpRequest();
xhr.addEventListener('load', function () {
  console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
//# sourceMappingURL=backend-practice.dev.js.map
