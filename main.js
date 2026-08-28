const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduced) document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
else {
  const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
