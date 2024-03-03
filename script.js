var small_menu = document.querySelector(".small_menu");
var menu = document.querySelector(".menu");
    small_menu.onclick = function(){
        small_menu.classList.toggle('active');
        menu.classList.toggle('small');
    }




// Ajoutez une fonction pour récupérer les données depuis l'API
async function fetchCharacterData() {
    try {
        const response = await fetch('https://hp-api.lainocs.fr/characters');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données depuis l\'API:', error);
        return [];
    }
}

// Appel de la fonction pour récupérer les données
fetchCharacterData().then((characters) => {
    // ... Création des cartes et ajout au conteneur (comme dans votre code d'origine)
    characters.forEach((character, index) => {
        // ... Création de la carte avec les détails de l'API
    });
});


// Création des cartes avec les données de l'API
fetchCharacterData().then((characters) => {
    characters.forEach((character, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `<img src="${character.image}" alt="${character.name}"><p>${character.name}</p>`;

        // Ajout du bouton favoris avec une icône SVG
        const favoriteButton = document.createElement('button');
        favoriteButton.classList.add('favorite-button');
        favoriteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="M8 14s-1.5-2-4-2-4 2-4 2V2h12v12s-1.5-2-4-2-4 2-4 2z"/></svg>';
        favoriteButton.addEventListener('click', () => toggleFavorite(index, favoriteButton));

        // Ajoute un gestionnaire d'événements pour le clic sur chaque carte
        cardElement.addEventListener('click', () => showCardDetails(character));

        cardElement.appendChild(favoriteButton);
        cardContainer.appendChild(cardElement);
    });
});

function showCardDetails(character) {
    const detailContainer = document.getElementById('detailContainer');

    // Efface le contenu précédent du conteneur
    detailContainer.innerHTML = '';

    // Ajoute les informations détaillées de la carte depuis l'API
    const detailElement = document.createElement('div');
    detailElement.innerHTML = `
        <h2>${character.name}</h2>
        <p>Famille : ${character.house}</p>
        <img src="${character.image}" alt="${character.name}">
        <p>Yeux : ${character.eyes}</p>
        <p>Cheveux : ${character.hairs}</p>
        <p>Anniversaire : ${character.birthday}</p>
        <!-- Ajoutez d'autres informations de la carte selon vos besoins -->
    `;

    detailContainer.appendChild(detailElement);
}