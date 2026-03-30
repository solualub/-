    const frame = document.getElementById('content-frame');

    injectNav();

    document.querySelectorAll('.nav-icon[href]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        frame.src = a.getAttribute('href');
      });
    });