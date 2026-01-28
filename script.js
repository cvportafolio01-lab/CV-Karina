console.log("CV de Karina Hernández Trujillo cargado correctamente");


function descargarPDF() {
    const cv = document.querySelector('.cv');

    cv.classList.add('pdf');

    html2pdf().set({
        margin: 0,
        filename: 'CV_Karina_Hernandez_Trujillo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }).from(cv).save().then(() => {
        cv.classList.remove('pdf');
    });
}
