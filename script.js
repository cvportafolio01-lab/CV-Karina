console.log("CV de Karina Hernández Trujillo cargado correctamente");
function descargarPDF() {
  const elemento = document.querySelector('.cv');

  const opt = {
    margin:       0,
    filename:     'CV_Karina_Hernandez_Trujillo.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 3, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(elemento).save();
}
html2pdf().set({
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  html2canvas: { scale: 2 }  // reduce tamaño
}).from(elemento).save();

