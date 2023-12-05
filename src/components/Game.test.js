import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from './Game';

test('affiche le message du joueur actuel', () => {
  const { getByText } = render(<Game />);
  const joueurActuelMessage = getByText(/Joueur actuel/i);
  expect(joueurActuelMessage).toBeInTheDocument();
});

test('le joueur joue un coup sur une case spécifique', () => {
    const { getByTestId } = render(<Game />);
    
    const caseId = '0';
    const cell = getByTestId(`cell-${caseId}`);
    
    if (cell) {
      fireEvent.click(cell);
    } else {
      console.error('La case n\'a pas été trouvée.');
    }
  });
