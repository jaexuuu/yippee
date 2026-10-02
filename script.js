const postcard = document.getElementById('postcard');

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
