const marteauContainer = document.querySelector('.illu_marteau');

// Vérification de sécurité : si l'élément n'existe pas, on arrête le script
if (!marteauContainer) {
    console.warn("L'élément avec l'ID 'marteau' ou la classe 'illu_marteau' n'a pas été trouvé sur la page.");
    exit; // Arrête l'exécution
}

// Nom du fichier SVG (doit correspondre exactement au nom dans votre dossier 'svg/')
const marteauSvgName = 'marteau'; 

// Chargement du SVG
fetch(`svg/${marteauSvgName}.svg`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur réseau : ${response.status}`);
        }
        return response.text();
    })
    .then(svgContent => {
        // Injection du contenu SVG dans le conteneur
        marteauContainer.innerHTML = svgContent;
        
        // Optionnel : Ajouter une classe pour faciliter le styling si besoin
        marteauContainer.querySelector('svg').classList.add('marteau-svg');
    })
    .catch(error => {
        console.error(`Impossible de charger le SVG 'marteau' :`, error);
        marteauContainer.innerHTML = '<span>Erreur de chargement de l\'animation</span>';
    });


