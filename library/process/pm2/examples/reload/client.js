var id = 0;
(function test(params) {
  fetch(`/?id=${++id}`);
  fetch(`/?id=${++id}`);
  fetch(`/?id=${++id}`);
  fetch(`/?id=${++id}`);
  fetch(`/?id=${++id}`);
  fetch(`/?id=${++id}`);
  if (id < 30) {
    setTimeout(() => {
      test();
    }, 2000);
  }
})();
