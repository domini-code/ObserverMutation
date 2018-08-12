const observer = new MutationObserver((mutationList) => {
  mutationList.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      console.log('Añadido', mutation.addedNodes[0]);
    }
    if (mutation.removedNodes.length) {
      console.log('Eliminado', mutation.removedNodes[0]);
    }
    console.log(mutation.type);
  })
});

// Indicar el target que deseamos observar
const equipos = document.querySelector('ul.equipos');

const observerOptions = {
  attributes: true,
  childList: true,
  subtree: false
};

observer.observe(equipos, observerOptions);