(function () {
  var html = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function current() {
    return html.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  function render() {
    var isDark = current() === 'dark';
    btn.textContent = isDark ? 'Light' : 'Dark';
    btn.setAttribute('aria-label', 'Switch to ' + (isDark ? 'light' : 'dark') + ' theme');
  }

  render();

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    render();
  });
})();
