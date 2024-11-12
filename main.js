function handleSubmit(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji formularza

    // Zbieranie danych z formularza
    const formData = {
        ImieINazwisko: document.getElementById('ImieINazwisko').value,
        Email: document.getElementById('Email').value,
        orez: document.getElementById('orez').value,
        opis: document.getElementById('opis').value,
        pierwszaWalka: document.getElementById('pierwszaWalka').checked,


    };

    console.log(formData);

}
function fillFields() {
    document.getElementById('ImieINazwisko').value = 'Tomasz Mielecki';
    document.getElementById('Email').value = 'tomasz@NowaHuta.Krakow';
    document.getElementById('orez').value = '1';
    document.getElementById('opis').value = 'hejka jestem tomasz';
    document.getElementById('pierwszaWalka').checked = true; 

}
