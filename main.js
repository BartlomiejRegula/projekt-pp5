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

};




function handleSubmit2(event) { 
    event.preventDefault();

    // Zbieranie odpowiedzi dla pierwszego pytania
    const winningCheckboxes = [
        document.getElementById('btncheck1'),
        document.getElementById('btncheck2'),
        document.getElementById('btncheck3')
    ];

    const winningAnimals = [];
    winningCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            if (label) {
                winningAnimals.push(label.textContent.trim());
            }
        }
    });

    // Zbieranie odpowiedzi dla drugiego pytania
    const fightingCheckboxes = [
        document.getElementById('btncheck4'),
        document.getElementById('btncheck5'),
        document.getElementById('btncheck6')
    ];

    const fightingAnimals = [];
    fightingCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            if (label) {
                fightingAnimals.push(label.textContent.trim());
            }
        }
    });

    // Wyświetlenie wyników
    console.log("Z którym zwierzęciem byś wygrał:", winningAnimals);
    console.log("Z którym zwierzęciem najchętniej byś zawalczył:", fightingAnimals);
}


