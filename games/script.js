document.addEventListener('DOMContentLoaded', function() {
  // Add your game details here
  const games = [
    {
      title: 'Halloween Buster (Mobile)',
      description: 'Are your fingers feeling lazy? Well, play this game busting dropping pumpkins and engage your fingers with visually challenging tasks and make your own new high score. Remember, the speed of the drop is not that slow!!',
      image: 'assets/game1.png',
      link: 'https://drive.google.com/uc?export=download&id=1pMt817T3ggcaYTNq5MeadIIHsbgQRJ8i'
    },

  ];

  const gameLinksContainer = document.getElementById('gameLinks');

  games.forEach(game => {
    const gameDiv = document.createElement('div');
    gameDiv.classList.add('game');

    const img = document.createElement('img');
    img.src = game.image;
    img.alt = game.title;
    img.classList.add('game-img');
    gameDiv.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = game.title;
    title.classList.add('game-title');
    gameDiv.appendChild(title);

    const description = document.createElement('p');
    description.textContent = game.description;
    description.classList.add('game-description');
    gameDiv.appendChild(description);

    const button = document.createElement('button');
    button.textContent = 'Download';
    button.className = 'game-button';
    button.addEventListener('click', function() {
      window.open(game.link, '_blank');
    });
    gameDiv.appendChild(button);

    gameLinksContainer.appendChild(gameDiv);
  });
});
