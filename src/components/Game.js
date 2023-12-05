import Cell from './Cell'
import '../styles/Game.css'
import {useState} from "react";

function Game()
{
    const [joueurActuel, updateJoueurActuel] = useState('rouge')
    const [gagne, updateGagne] = useState(false)
    const [tableau, updateTableau] = useState(Array(42).fill('blanc'))
    const [historique, updateHistorique] = useState([Array(42).fill('blanc')])
    const [coupActuel, updateCoupActuel] = useState(0)
    return(
        <div className={'game'}>
            {gagne === false ?
                (<span>Joueur actuel : {joueurActuel}</span>)
                :
                (<span>{joueurActuel} a gagné.</span>)}
            <div className={'board'}>
                <div>
                    {createCase(0)}
                    {createCase(1)}
                    {createCase(2)}
                    {createCase(3)}
                    {createCase(4)}
                    {createCase(5)}
                    {createCase(6)}
                </div>
                <div>
                    {createCase(7)}
                    {createCase(8)}
                    {createCase(9)}
                    {createCase(10)}
                    {createCase(11)}
                    {createCase(12)}
                    {createCase(13)}
                </div>
                <div>
                    {createCase(14)}
                    {createCase(15)}
                    {createCase(16)}
                    {createCase(17)}
                    {createCase(18)}
                    {createCase(19)}
                    {createCase(20)}
                </div>
                <div>
                    {createCase(21)}
                    {createCase(22)}
                    {createCase(23)}
                    {createCase(24)}
                    {createCase(25)}
                    {createCase(26)}
                    {createCase(27)}
                </div>
                <div>
                    {createCase(28)}
                    {createCase(29)}
                    {createCase(30)}
                    {createCase(31)}
                    {createCase(32)}
                    {createCase(33)}
                    {createCase(34)}
                </div>
                <div className = {'row'}>
                    {createCase(35)}
                    {createCase(36)}
                    {createCase(37)}
                    {createCase(38)}
                    {createCase(39)}
                    {createCase(40)}
                    {createCase(41)}
                </div>
            </div>

            {gagne ? (<button className={'new'} onClick={()=>newgame()}>Rejouer</button>) : null}
        </div>
    )

    function updateGame(indice) {
        const col = indice % 7;
        const ligne = getEmptyRow(col);
      
        if (coupPossible(ligne)) {
            const newTab = [...tableau];
            newTab[ligne] = joueurActuel === 'rouge' ? 'rouge' : 'jaune';
            const randomChance = Math.random() * 100;
            if (randomChance <= 50) {
                // reverseColumn(col); // Appel de la fonction pour inverser la colonne
            }
          updateTableau(newTab);
          updateHistorique(historique.concat([newTab]));
          updateCoupActuel(coupActuel + 1);
          if (win(newTab)) {
            updateGagne(true);
          } else {
            joueurActuel === 'rouge' ? updateJoueurActuel('jaune') : updateJoueurActuel('rouge');
          }
          if (egalité(newTab)) {
            updateGagne(true);
            updateJoueurActuel('Personne n\'');
        }
        }
      }
      
      function coupPossible(ligne) {
        return ligne >= 0 && tableau[ligne] === 'blanc';
      }
      
      function getEmptyRow(col) {
        for (let row = 35 + col; row >= 0; row -= 7) {
          if (tableau[row] === 'blanc') {
            return row;
          }
        }
        return -1;
      }
      
    function createCase(indice)
    {
        const couleurCase = tableau[indice];
        return (<Cell id={indice} data={`cell-${indice}`}  key = {indice} onClick = {()=>updateGame(indice)} couleur = {couleurCase} jouable = {coupPossible(indice) && !gagne} gagne = {gagne}/>)
    }

    function win(tab)
    {
        for (var i = 0; i < 6; i++)
        {
            for (var j = 0; j < 4; j++)
            {
                if (tab[7*i+j] === tab[7*i+j+1] && tab[7*i+j+1] === tab[7*i+j+2] && tab[7*i+j+2] === tab[7*i+j+3] && tab[7*i+j] !== 'blanc')
                {
                    return true
                }
            }
        }
        for (var col = 0; col < 7; col++)
        {
            for (var lig = 0; lig < 3; lig++)
            {
                if (tab[col + 7 * lig] === tab[col + 7 * (lig + 1)] && tab[col + 7 * (lig + 1)] === tab[col + 7 * (lig + 2)] && tab[col + 7 * (lig + 2)] === tab[col + 7 * (lig + 3)] && tab[col + 7 * (lig + 3)] !== 'blanc')
                {
                    return true
                }
            }
        }
        var diagWin = [
            [3, 9, 15, 21],
            [4, 10, 16, 22],
            [5, 11, 17, 23],
            [6, 12, 18, 24],
            [10, 16, 22, 28],
            [11, 17, 23, 29],
            [12, 18, 24, 30],
            [13, 19, 25, 31],
            [17, 23, 29, 35],
            [18, 24, 30, 36],
            [19, 25, 31, 37],
            [20, 26, 32, 38],
        ]
        for (let i = 0; i < diagWin.length; i++)
        {
            const [a, b, c, d] = diagWin[i];
            if (tab[a] !== 'blanc' && tab[b] === tab[a] && tab[c] === tab[b] && tab[d] === tab[c])
            {
                return true;
            }
        }
        const diagInvWin = [
            [0, 8, 16, 24],
            [1, 9, 17, 25],
            [2, 10, 18, 26],
            [3, 11, 19, 27],
            [7, 15, 23, 31],
            [8, 16, 24, 32],
            [9, 17, 25, 33],
            [10, 18, 26, 34],
            [14, 22, 30, 38],
            [15, 23, 31, 39],
            [16, 24, 32, 40],
            [17, 25, 33, 41]
        ]
        for (let i = 0; i < diagInvWin.length; i++)
        {
            const [a, b, c, d] = diagInvWin[i];
            if (tab[a] !== 'blanc' && tab[b] === tab[a] && tab[c] === tab[b] && tab[d] === tab[c])
            {
                return true;
            }
        }
        return false
    }
    
    function newgame()
    {
        updateGagne(false)
        updateTableau(Array(42).fill('blanc'))
    }

    function egalité(tab) {
        return tab.every(cell => cell !== 'blanc');
    }
    // function reverseColumn(colIndex) {
    //     const newTab = [...tableau]; // Créez une nouvelle copie du tableau
      
    //     console.log("newTab avant inversion :", newTab); // Ajout d'un point de contrôle
      
    //     const col = [];
    //     for (let i = colIndex; i < tableau.length; i += 7) {
    //       col.push(tableau[i]);
    //     }
      
    //     col.reverse();
      
    //     console.log("col inversée :", col); // Ajout d'un point de contrôle
      
    //     for (let i = colIndex, j = 0; i < tableau.length; i += 7, j++) {
    //       newTab[i] = col[j]; // Mettez à jour la nouvelle copie du tableau
    //     }
      
    //     console.log("newTab après inversion :", newTab); // Ajout d'un point de contrôle
      
    //     updateTableau(newTab); // Mettez à jour l'état du tableau avec la nouvelle copie
    //   }
}

export default Game;