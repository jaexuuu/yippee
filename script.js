const ACCESS_PASSWORD = 'baby';

const pageShell = document.getElementById('page-shell');
const passwordScreen = document.getElementById('password-screen');
const passwordInput = document.getElementById('password-input');
const unlockButton = document.getElementById('unlock-button');
const passwordError = document.getElementById('password-error');
const postcard = document.getElementById('postcard');

const revealPage = () => {
  if (passwordScreen) {
    passwordScreen.style.display = 'none';
  }

  if (pageShell) {
    pageShell.classList.remove('app-hidden');
  }
};

const unlockPostcard = () => {
  const enteredPassword = passwordInput?.value.trim() || '';

  if (enteredPassword === ACCESS_PASSWORD) {
    revealPage();
    return;
  }

  if (passwordError) {
    passwordError.textContent = 'Wrong :(';
  }

  if (passwordInput) {
    passwordInput.value = '';
    passwordInput.focus();
  }
};

if (unlockButton) {
  unlockButton.addEventListener('click', unlockPostcard);
}

if (passwordInput) {
  passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      unlockPostcard();
    }
  });
}

if (postcard) {
  const toggleCard = () => {
    postcard.classList.toggle('is-flipped');
  };

  postcard.addEventListener('click', toggleCard);
  postcard.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard();
    }
  });
}
