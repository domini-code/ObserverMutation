const equiposFutbol_array = ['Betis', 'Espanyol', 'Valencia', 'Sevilla'];
setTimeout(function addTeam() {
  const equipos = document.querySelector('ul.equipos');
  const equipo = document.createElement('li');
  equipo.textContent = equiposFutbol_array[parseInt(Math.random() * equiposFutbol_array.length, 10)];
  equipos.appendChild(equipo);
  equipo.classList.add("newClass");
}, Math.random() * 1000)

setTimeout(function removeTeam() {
  const equipos = document.querySelector('ul.equipos');
  equipos.removeChild(equipos.querySelector('li'));
}, Math.random() * 3000 + 3000)