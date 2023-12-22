function showInfoAndPlaySound(planetName) {
    // Play the sound associated with the clicked planet
    playPlanetSound(planetName);
  }
  
  function playPlanetSound(planetName) {
    // Create an audio element
    const audio = new Audio();
  
    // Set the source of the audio file based on the clicked planet
    audio.src = `./sounds/${planetName.toLowerCase()}.mp3`;
  
    // Play the audio
    audio.play();
  }
  
  function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();
  
  
