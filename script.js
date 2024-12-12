let app = document.getElementById('app');
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString('Arleth Marcos García')
  .pauseFor(300)
  .deleteAll()
  .typeString('Ingeniera en Sistemas Computacionales')
  .pauseFor(1000)
  .start();

let frase = document.getElementById('frase');
let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});
typewriterFrase
  .pauseFor(2500)
  .typeString('"...Por lo tanto, lo que debemos hacer es esforzarnos y perseverar y NUNCA RENDIRNOS."')
  .pauseFor(300)
  .deleteAll()
  .typeString('Dalai Lama IX')
  .pauseFor(1000)
  .start();

async function copiarAlPortapapeles(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    alert('Texto copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar:', err);
  }
}