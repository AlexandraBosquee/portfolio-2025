const cinemaContainer = document.querySelector('.cinema');

// Vérification de sécurité : si l'élément n'existe pas, on arrête le script
if (!cinemaContainer) {
    console.warn("L'élément avec l'ID 'cinema' ou la classe 'cinema' n'a pas été trouvé sur la page.");
    exit; // Arrête l'exécution
}

// Nom du fichier SVG (doit correspondre exactement au nom dans votre dossier 'svg/')
const cinemaSvgName = 'cinema'; 

// Chargement du SVG
fetch(`svg/${cinemaSvgName}.svg`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur réseau : ${response.status}`);
        }
        return response.text();
    })
    .then(svgContent => {
        // Injection du contenu SVG dans le conteneur
        cinemaContainer.innerHTML = svgContent;
        
        // Optionnel : Ajouter une classe pour faciliter le styling si besoin
        cinemaContainer.querySelector('svg').classList.add('cinema-svg');
    })
    .catch(error => {
        console.error(`Impossible de charger le SVG 'cinema' :`, error);
        cinemaContainer.innerHTML = '<span>Erreur de chargement de l\'animation</span>';
    });


