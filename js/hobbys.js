/**************************RESIZE SCREEN*************************/

function reloadOnResize() {
    let initialWidth = window.innerWidth; // Stocke la largeur initiale
  
    window.addEventListener('resize', () => {
      // Si la largeur de l'écran a changé, recharge la page
      if (window.innerWidth !== initialWidth) {
        location.reload(); // Recharge la page
      }
    });
  }
  // Appelle la fonction
  reloadOnResize();


/**************************SLIDER PINCE A LINGE*************************/

// Variables essentielles
const nextButton = document.querySelector('.next');  // Le bouton "suivant"
const prevButton = document.querySelector('.prev');  // Le bouton "précédent"
const linge = document.querySelector('.linge');      // Le conteneur des pinces
const pinces = document.querySelectorAll('.linge_pince');  // Toutes les pinces à linge

let positionActuelle = 0; // Position de départ, on commence à la première pince

// Fonction pour recalculer la largeur du conteneur .linge
function recalculerLargeurLinge() {
  largeurLinge = linge.offsetWidth;  // On récupère la nouvelle largeur du conteneur
}





// Ajoute ici ton bout de code spécifique
function deplacerPinces(direction) {
  const largeurConteneur = linge.offsetWidth; // Largeur actuelle du conteneur


  const photos1et2 = [photosLogiques[3], photosLogiques[2]]; // photo_1 et photo_2
  const photos3et4 = [photosLogiques[1], photosLogiques[0]]; // photo_3 et photo_4

  if (direction === 'next') {
    // Si photo_1 ou photo_2 est fixée, on les rend invisibles
    changerVisibilite(photos1et2, 'invisible');

    // Si photo_3 ou photo_4 est fixée, on les rend visibles
    changerVisibilite(photos3et4, 'visible');
  } else if (direction === 'prev') {
    // Si photo_3 ou photo_4 est fixée, on les rend invisibles
    changerVisibilite(photos3et4, 'invisible');

    // Si photo_1 ou photo_2 est fixée, on les rend visibles
    changerVisibilite(photos1et2, 'visible');
  }






  if (window.innerWidth < 480) { // Format mobile
    if (direction === 'next' && positionActuelle < pinces.length - 1) {
      positionActuelle++;
      linge.style.transform = `translateX(-${positionActuelle * 100}%)`;
    } else if (direction === 'prev' && positionActuelle > 0) {
      positionActuelle--;
      linge.style.transform = `translateX(-${positionActuelle * 100}%)`;
    }
  } else if (window.innerWidth >= 480 && window.innerWidth < 768) { // Format tablette
    if (direction === 'next' && positionActuelle < pinces.length - 2) {
      positionActuelle += 2;
      linge.style.transform = `translateX(-${positionActuelle * (largeurConteneur / 2)}px)`;
    } else if (direction === 'prev' && positionActuelle > 0) {
      positionActuelle -= 2;
      linge.style.transform = `translateX(-${positionActuelle * (largeurConteneur / 2)}px)`;
    }
  }
}


// Ajout des événements aux boutons
nextButton.addEventListener('click', () => deplacerPinces('next'));
prevButton.addEventListener('click', () => deplacerPinces('prev'));


/*-------------------------FIN SLIDER--------------------------*/



/**************************PAIRING PHOTOS TO PINCE*************************/


const photosLogiques = [
    document.querySelector('#photo_4'),
    document.querySelector('#photo_3'),
    document.querySelector('#photo_2'),
    document.querySelector('#photo_1')
];

const associations = [
    { photo: photosLogiques[3], pince: pinces[0] },
    { photo: photosLogiques[2], pince: pinces[1] },
    { photo: photosLogiques[1], pince: pinces[2] },
    { photo: photosLogiques[0], pince: pinces[3] }
];

// Mise à jour des datasets
associations.forEach((pair, index) => {
    pair.photo.dataset.pince = `pince_${index + 1}`;
    pair.pince.dataset.photo = `photo_${4 - index}`;
});



/*-------------------------FIN PAIRING--------------------------*/





/**************************SORTIR PHOTO BAIN*************************/


const bain = document.querySelector('.bain_eau');
let currentPhotoIndex = photosLogiques.length - 1; // Commence avec la dernière photo (photo_1)


function handleBainClick() {
    if (currentPhotoIndex >= 0) {
        const photo = photosLogiques[currentPhotoIndex];

        // Ajouter la classe hover pour déclencher l'animation CSS
        photo.classList.add('hover');


        currentPhotoIndex--; // Passer à la photo suivante
    } else {

        // Désactiver l'écouteur d'événement
        bain.removeEventListener('click', handleBainClick);
    }
}

// Ajouter l'écouteur d'événement
bain.addEventListener('click', handleBainClick);



/*-------------------------FIN SORTIR PHOTO BAIN--------------------------*/








/**************************PENDRE PHOTO MOBILE*************************/




// Fonction pour vérifier si c'est un format mobile
function isMobile() {
    return window.innerWidth <= 480;  // Ajuste la largeur selon ton besoin
}


photosLogiques.forEach((photo, index) => {
    photo.addEventListener('click', function () {

         // Vérifier si la photo est déjà accrochée ou si ce n'est pas du mobile
        if (photo.classList.contains('accrochee') || !isMobile()) return;


        // Obtenir la pince associée
        const pinceId = photo.dataset.pince;
        const pince = document.querySelector(`#${pinceId}`);
        const pinceIndex = Array.from(pinces).indexOf(pince);

    
        // Si la pince associée n'est pas visible, déplacer le slider
        if (positionActuelle !== pinceIndex) {
            positionActuelle = pinceIndex; // Mettre à jour la position actuelle
            linge.style.transform = `translateX(-${positionActuelle * 100}%)`;
        }
    
        // Synchroniser l'accrochage après le mouvement du slider
        setTimeout(() => {
            try {
                // Calcul des positions des pince et photo avant application des marges
                const pinceCoords = pince.getBoundingClientRect();
                const photoCoords = photo.getBoundingClientRect();
                
                // Calcul des marges dynamiques pour aligner la photo à la pince
                const marginLeft = pinceCoords.left + pinceCoords.width / 2 - (photoCoords.left + photoCoords.width / 2);
                const marginTop = pinceCoords.top + pinceCoords.height / 2 - photoCoords.top;
    
                // Appliquer les marges dynamiques
                photo.style.marginLeft = `${marginLeft}px`;
                photo.style.marginTop = `${marginTop}px`;
                photo.style.transition = 'margin-top 0.5s ease, margin-left 0.5s ease';
    
                // Marquer la photo comme accrochée
                photo.classList.add('accrochee');
                pince.classList.add('occupee'); // Marquer la pince comme occupée
    
                // Ajouter l'effet de révélation (photo développement)
                setTimeout(function() {
                    const photoBlack = photo.querySelector('.photo_black');
                    if (photoBlack) {
                        photoBlack.classList.add('revele');
                    }
                }, 500);  // Délai de 500ms
    
                const updatePhotoPosition = () => {
                    const pinceCoords = pince.getBoundingClientRect();
                    const photoCoords = photo.getBoundingClientRect();
                    photo.style.left = `${pinceCoords.left + pinceCoords.width / 2 }px`;
                    photo.style.top = `${pinceCoords.top + pinceCoords.height / 2 - photoCoords.height / 2}px`;
    
                };
    
                const observer = new MutationObserver(() => {
                    updatePhotoPosition();
                });
    
                observer.observe(linge, {
                    attributes: true,
                    childList: true,
                    subtree: true
                });
    
            } catch (error) {
            }
        }, 500); // Ajustement du délai pour la transition du slider
    });    
});



/*-------------------------FIN PENDRE MOBILE--------------------------*/





/*********************ACTIVER / DESACTIVER DRAG & DROP*************************/

function deactivateDragAndDrop() {
    interact('.photo_container').draggable(false);
  }
  
  // Vérifier la taille de l'écran et conditionner l'exécution
  function checkScreenSize() {
    const isMobile = window.innerWidth < 480;
    if (isMobile) {
      // Si l'écran est plus petit que 480px, on désactive le drag and drop
      deactivateDragAndDrop();
    } else {
      // Sinon, on active le drag and drop
      activateDragAndDrop();
    }
  }
  
  // Vérification à l'initialisation
  checkScreenSize();
  
  // Vérification lors du redimensionnement
  window.addEventListener('resize', checkScreenSize);


  
/*-------------------------FIN ACTIVER / DESACTIVER D&D--------------------------*/








/**************************PENDRE PHOTO DRAG & DROP*************************/


function activateDragAndDrop() {
    interact('.photo_container').draggable({
    // Stocke les offsets lors du début du drag
    onstart: function (event) {
        const target = event.target;

        // Calculer les offsets en fonction de la position du clic sur l'élément
        const rect = target.getBoundingClientRect();
        target.dataset.offsetX = event.clientX - rect.left;
        target.dataset.offsetY = event.clientY - rect.top;

        // Appliquer le translate directement à la position du curseur
        target.style.transform = `translate(0px, 0px)`; // Initialisation sans décalage visible
    },
    
        // Gère les déplacements
        onmove: function (event) {
        const target = event.target;
    
        const offsetX = parseFloat(target.dataset.offsetX) || 0;
        const offsetY = parseFloat(target.dataset.offsetY) || 0;
    
        // Calculer les nouvelles coordonnées
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    
        // Appliquer les coordonnées ajustées (en tenant compte de l'offset)
        target.style.transform = `translate(${x - offsetX}px, ${y - offsetY}px)`;  // Ajuste la position sans double décalage
    
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    
        // Vérifier si la photo est proche de sa pince associée
        const photo = event.target;
        const pinceId = photo.dataset.pince;
        const pince = document.querySelector(`#${pinceId}`);
    
        if (pince) {
            const photoRect = photo.getBoundingClientRect();
            const pinceRect = pince.getBoundingClientRect();
    
            // Calculer les positions
            const photoX = photoRect.left + photoRect.width / 2; // Milieu du bord supérieur de la photo
            const photoY = photoRect.top; // Bord supérieur de la photo
            const pinceX = pinceRect.left + pinceRect.width / 2; // Milieu du bord supérieur de la pince
            const pinceY = pinceRect.top; // Bord supérieur de la pince
    
            // Calculer la distance
            const distance = Math.sqrt(Math.pow(photoX - pinceX, 2) + Math.pow(photoY - pinceY, 2));
    
            // Zone de tolérance (50 pixels)
            const tolerance = 50;
    
            // Si la photo est proche de la pince
            if (distance < tolerance) {
            photo.classList.add('proche'); // Ajoute une classe pour feedback visuel si besoin

            } else {
            photo.classList.remove('proche');
            }
        }
        },
    
        onend: function (event) {
        const photo = event.target;
        const pinceId = photo.dataset.pince;
        const pince = document.querySelector(`#${pinceId}`);
    
        if (pince) {
            const photoRect = photo.getBoundingClientRect();
            const pinceRect = pince.getBoundingClientRect();
    
            const photoX = photoRect.left + photoRect.width / 2;
            const photoY = photoRect.top;
            const pinceX = pinceRect.left + pinceRect.width / 2;
            const pinceY = pinceRect.top;
    
            const distance = Math.sqrt(Math.pow(photoX - pinceX, 2) + Math.pow(photoY - pinceY, 2));
    
            const tolerance = 250;
    
            // Si la photo est proche, aimanter
            if (distance < tolerance) {
            const marginLeft = pinceX - (photoRect.left + photoRect.width / 2);
            const marginTop = pinceY - photoRect.top + (photoRect.height / 4);
    
            
            // Utilisation des marges pour déplacer la photo, sur tous les écrans (desktop et mobile)
            photo.style.marginLeft = `${marginLeft}px`; // Déplace la photo horizontalement
            photo.style.marginTop = `${marginTop}px`;   // Déplace la photo verticalement

            // Mise à jour des attributs pour la position de la photo
            photo.setAttribute('data-x', marginLeft); // Met à jour la position X de la photo
            photo.setAttribute('data-y', marginTop);  // Met à jour la position Y de la photo
    

    
    
            // Ajouter la classe 'revele' sur la photo noire
            const photoBlack = photo.querySelector('.photo_black');
            if (photoBlack) {
                photoBlack.classList.add('revele');  // Ajoute la classe 'revele'
            }
    
            // Ajouter la classe 'fixe' à la photo pour l'empêcher de bouger
            photo.classList.add('fixe');

            }
        }
        }
    });
}
    
/*-------------------------FIN DRAG & DROP--------------------------*/
    




/**************************PENDRE PHOTO MOBILE*************************/


function handlePhotoHover(photo) {
  if (window.innerWidth >= 480 && window.innerWidth < 768) { // Limité au format tablette
    if (photo.id === 'photo_3' && photo.classList.contains('hover')) {
      // Vérifier si la photo 3 est FIXE avant d'exécuter next
      if (!photo.classList.contains('fixe')) {
        deplacerPinces('next'); // Simuler un clic sur "next"
      }
    }
  }
}

// Ajout de l'écouteur pour surveiller l'ajout de la classe hover à la photo
const photo3 = document.getElementById('photo_3');
photo3.addEventListener('transitionend', () => handlePhotoHover(photo3));



  function onPhotoFixed(photo) {

    }



  function changerVisibilite(photos, action) {
    photos.forEach(photo => {
      if (photo.classList.contains('fixe')) {
        if (action === 'invisible') {
          photo.classList.add('invisible');

        } else if (action === 'visible') {
          photo.classList.remove('invisible');
          photo.classList.add('visible');

        }
      }
    });
  }




  function watchForFixedPhotos() {
    const photos = document.querySelectorAll('.photo_container');
  
    photos.forEach(photo => {
      // Crée un observateur pour chaque photo
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'class' &&
            photo.classList.contains('fixe')
          ) {
  
            // Appelle une fonction ou notifie ailleurs
            onPhotoFixed(photo);
          }
        });
      });
  
      // Configure l'observateur pour surveiller les changements de classe
      observer.observe(photo, { attributes: true });
    });
  }
  

  
  watchForFixedPhotos();

  


