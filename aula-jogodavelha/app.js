document.addEventListener("DOMContentLoaded", function() {
  const board = document.querySelector('.board');
  const cells = [];
  let currentPlayer = 'X';
  let winner = null;

  // Criar as células do tabuleiro
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cells.push(cell);
    cell.addEventListener('click', () => {
      if (!cell.textContent && !winner) {
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });
    board.appendChild(cell);
  }

  // Array das combinações vencedoras
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  // Função para checar o vencedor
  function checkWinner() {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
        cells[a].style.color = 'red';
        cells[b].style.color = 'red';
        cells[c].style.color = 'red';
        winner = currentPlayer;
        alert(`esse cara do ${winner} é foda!`);
        break;
      }
    }
  }
});