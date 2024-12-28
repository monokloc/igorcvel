// Skrypt do obsługi kliknięcia przycisku i zmiany zakładek
document.getElementById("start-button").addEventListener("click", function () {
    // Ukrywamy główną zawartość
    document.getElementById("main-content").style.display = "none";

    // Pokazujemy HUD
    document.getElementById("hud").style.display = "flex";

    // Pokazujemy pierwszą zakładkę domyślnie
    changeTab('main');

    // Odtwarzamy muzykę po kliknięciu "Zacznij Teraz"
    startMusic();
});

// Funkcja zmiany aktywnej zakładki
function changeTab(tabId) {
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}

// Funkcja do wczytywania zdjęć z plików
function changeTabWithAnimation(tabId) {
    const currentTab = document.querySelector('.tab-pane.active');
    const nextTab = document.getElementById(tabId);

    if (currentTab === nextTab) return; // Nie zmieniaj, jeśli kliknięto aktywną zakładkę

    // Dodajemy animację wyjścia dla obecnej zakładki
    currentTab.classList.add('slide-out');
    currentTab.addEventListener('animationend', function onSlideOut() {
        currentTab.classList.remove('active', 'slide-out');
        currentTab.removeEventListener('animationend', onSlideOut);

        // Po zakończeniu animacji wyjścia aktywujemy nową zakładkę z animacją wejścia
        nextTab.classList.add('active', 'slide-in');
        nextTab.addEventListener('animationend', function onSlideIn() {
            nextTab.classList.remove('slide-in');
            nextTab.removeEventListener('animationend', onSlideIn);
        });
    });
}


// Funkcja do wczytywania obrazu z pliku
function loadImage(event, containerId) {
    const file = event.target.files[0];
    if (!file) return;

    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Wyczyszczenie poprzednich podglądów

    const reader = new FileReader();
    reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.alt = "Podgląd zdjęcia";
        container.appendChild(imgElement); // Dodanie podglądu obrazu do kontenera
    };
    reader.readAsDataURL(file);
}

// Funkcja do odtwarzania muzyki po kliknięciu "Zacznij Teraz"
function startMusic() {
    const musicPlayer = document.getElementById("background-music");

    // Jeśli masz plik dźwiękowy lokalnie lub z URL, załaduj go do playera
    // Załaduj dźwięk do playera
    const musicUrl = 'audio/muzyka.mp3'; // Zmień na ścieżkę do pliku audio
    musicPlayer.src = musicUrl;

    // Odtwarzamy muzykę automatycznie
    musicPlayer.play();

    // Ukrywamy panel odtwarzania muzyki (suwałek i kontrolki)
    document.getElementById("music-controls").style.display = "none";
}

// Ustawienie głośności muzyki
document.getElementById("volume").addEventListener("input", function() {
    const music = document.getElementById("background-music");
    music.volume = this.value;
});

// Skrypt do wyświetlania napisu po kliknięciu 'Zacznij Teraz'
document.getElementById("start-button").addEventListener("click", function () {
    // Wyświetlamy animowany napis
    document.getElementById("animated-text-container").style.display = "block";
	
	});

    