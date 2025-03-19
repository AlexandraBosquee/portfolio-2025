/*menu navigation*/
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}


document.addEventListener("DOMContentLoaded", () => {
  // Vérifie si on a cliqué sur ".infos" avant de revenir à l'accueil
  if (sessionStorage.getItem("infosClicked") === "true") {
      setTimeout(() => {
          document.querySelector(".carte").classList.add("visible");
          document.querySelector(".f-index").classList.add("index");

          // Nettoyer après l'utilisation
          sessionStorage.removeItem("infosClicked");
      }, 250);
  }

  // Vérifie si on a cliqué sur ".landing-btn" avant de revenir à l'accueil
  if (sessionStorage.getItem("landingClicked") === "true") {
      setTimeout(() => {
          document.querySelector("#formation").classList.add("clickable");

          // Nettoyer après l'utilisation
          sessionStorage.removeItem("landingClicked");
      }, 250);
  }
});

// Capture le clic sur .infos avant que la page change
document.querySelectorAll(".infos").forEach(link => {
  link.addEventListener("click", () => {
      sessionStorage.setItem("infosClicked", "true");
  });
});

// Capture le clic sur .landing-btn avant que la page change
document.querySelectorAll(".landing-btn").forEach(button => {
  button.addEventListener("click", () => {
      sessionStorage.setItem("landingClicked", "true");
  });
});
