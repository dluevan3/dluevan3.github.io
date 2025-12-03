// Form validation + Session Storage
document.getElementById("fanForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const favorite = document.getElementById("favorite").value.trim();

  if (username === "" || favorite === "") {
    document.getElementById("formMessage").textContent = "Please fill out all fields.";
    return;
  }

  // Save to session storage
  sessionStorage.setItem("fanName", username);
  sessionStorage.setItem("favoriteCharacter", favorite);

  document.getElementById("formMessage").textContent =
    `Welcome, ${username}! Your favorite character is ${favorite}.`;
});

// Character Object Example
const spotlightCharacter = {
  name: "Link",
  franchise: "The Legend of Zelda",
  firstAppearance: 1986,
  weapon: "Master Sword"
};

if (document.getElementById("characterInfo")) {
  document.getElementById("characterInfo").textContent =
    `${spotlightCharacter.name} from ${spotlightCharacter.franchise} first appeared in ${spotlightCharacter.firstAppearance}. Famous weapon: ${spotlightCharacter.weapon}.`;
}

// Contact Form Validation + Session Storage
if (document.getElementById("contactForm")) {
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (email === "" || message === "") {
      document.getElementById("contactMessage").textContent = "Please fill out all fields.";
      return;
    }

    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userMessage", message);

    document.getElementById("contactMessage").textContent =
      `Thanks for reaching out! We'll reply to ${email} soon.`;
  });
}