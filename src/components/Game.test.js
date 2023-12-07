import React from 'react';
import { render, fireEvent,waitFor,cleanup  } from '@testing-library/react';
import Game from './Game';
process.env.NODE_ENV = 'test';

test('affiche le message du joueur actuel', () => {
  const { getByText } = render(<Game />);
  const joueurActuelMessage = getByText(/Joueur actuel/i);
  expect(joueurActuelMessage).toBeInTheDocument();
});

afterEach(cleanup);

test('le joueur joue un coup sur une case aleatoire', () => {
  const { getByTestId } = render(<Game />);
  
  const caseId = Math.floor(Math.random() * 42);
  const cell = getByTestId(`cell-${caseId}`);
  
  if (cell) {
    fireEvent.click(cell);
  } else {
    console.error('La case n\'a pas été trouvée.');
  }
});

afterEach(cleanup);

test("le joueur gagne verticalement", async () => {
  const { getByTestId, queryAllByText } = render(<Game />);
  const tab = [41, 34, 27, 20];
  const tab2 = [40, 33, 26, 19];

  for (let i = 0; i < tab.length; i++) {
    const cell = getByTestId(`cell-${tab[i]}`);
    const cell2 = getByTestId(`cell-${tab2[i]}`);
    fireEvent.click(cell);
    if(tab2[i]) {
      fireEvent.click(cell2);
    }
  }

  await waitFor(() => {
    const joueurActuelMessage = queryAllByText((content, element) => {
      return element.textContent === "rouge a gagné.";
    });
    expect(joueurActuelMessage.length).toBeGreaterThan(0);
  });
});

afterEach(cleanup);

test("le joueur gagne horizontalement", async () => {
  const { getByTestId, queryAllByText } = render(<Game />);
  const tab = [41, 40, 39, 38];
  const tab2 = [35, 36, 37, 25];

  for (let i = 0; i < tab.length; i++) {
    const cell = getByTestId(`cell-${tab[i]}`);
    const cell2 = getByTestId(`cell-${tab2[i]}`);
    fireEvent.click(cell);
    if(tab2[i]) {
      fireEvent.click(cell2);
    }
  }

  await waitFor(() => {
    const joueurActuelMessage = queryAllByText((content, element) => {
      return element.textContent === "rouge a gagné.";
    });
    expect(joueurActuelMessage.length).toBeGreaterThan(0);
  });
});

afterEach(cleanup);

test("le joueur gagne diagonal", async () => {
  const { getByTestId, queryAllByText } = render(<Game />);
  const tab = [41, 33, 38, 25, 37, 17];
  const tab2 = [40, 39, 32, 31, 24,20];

  for (let i = 0; i < tab.length; i++) {
    const cell = getByTestId(`cell-${tab[i]}`);
    const cell2 = getByTestId(`cell-${tab2[i]}`);
    fireEvent.click(cell);
    if(tab2[i]) {
      fireEvent.click(cell2);
    }
  }

  await waitFor(() => {
    const joueurActuelMessage = queryAllByText((content, element) => {
      return element.textContent === "rouge a gagné.";
    });
    expect(joueurActuelMessage.length).toBeGreaterThan(0);
  });
});

afterEach(cleanup);

// test("Egalité", async () => {
//   const { getByTestId, queryAllByText } = render(<Game />);
//   const rouge = [41,34,26,19,13,6]; [39,32,25,18,12,5]; [37,30,23,16,10,3] 
//   const jaune = [40,33,27,20,14,7]; [38,31,24,17,11,4]; [36,29,22,15,9,2] 


//   for (let i = 0; i < tab2.length; i++) {
//     const cell = getByTestId(`cell-${tab[i]}`);
//     const cell2 = getByTestId(`cell-${tab2[i]}`);
//     if(tab[i]) {
//       fireEvent.click(cell);
//     }
//     fireEvent.click(cell2);
//   }

//   await waitFor(() => {
//     const joueurActuelMessage = queryAllByText((content, element) => {
//       return element.textContent === "Personne n' a gagné.";
//     });
//     expect(joueurActuelMessage.length).toBeGreaterThan(0);
//   });
// });