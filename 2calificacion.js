const nota = parseFloat(prompt("Por favor, ingresa tu nota:"));

let calificacion;

if (nota >= 0 && nota < 3) {
  calificacion = "Muy deficiente";
} else if (nota < 5) {
  calificacion = "Insuficiente";
} else if (nota < 6) {
  calificacion = "Suficiente";
} else if (nota < 7) {
  calificacion = "Bien";
} else if (nota < 9) {
  calificacion = "Notable";
} else if (nota <= 10) {
  calificacion = "Sobresaliente";
} else {
  calificacion = "La nota ingresada no es válida";
}

document.write("Tu calificación es: " + calificacion);
