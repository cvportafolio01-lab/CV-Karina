function generarPDF() {
    const element = document.querySelector('.cv');

    document.body.classList.add('pdf');

    const opt = {
        margin: 0,
        filename: 'CV_Karina_Hernandez_Trujillo.pdf',
        pagebreak: { mode: 'avoid-all' },
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2,
            scrollY: 0,
            useCORS: true
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        document.body.classList.remove('pdf');
    });
}
