
document.addEventListener("DOMContentLoaded", () => {
  
    // Vérifie si on a cliqué sur ".landing-btn" avant de revenir à l'accueil
    if (sessionStorage.getItem("landingClicked") === "true") {
        setTimeout(() => {
            document.querySelector("#formation").classList.add("clickable");
  
            // Nettoyer après l'utilisation
            sessionStorage.removeItem("landingClicked");
        }, 250);
    }
  });
  
  // Capture le clic sur .landing-btn avant que la page change
  document.querySelectorAll(".landing-btn").forEach(button => {
    button.addEventListener("click", () => {
        sessionStorage.setItem("landingClicked", "true");
    });
  });
  