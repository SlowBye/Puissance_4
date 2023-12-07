# Puissance_4

## Mes fonctionnalités

    - [x] Grille 7x6
    - [x] 2 joueurs
    - [x] 4 jetons alignés (vertical, horizontal, diagonal) = win
    - [x] Match nul
    - [x] Reverse d'une colonne
    - [x] Random sur le reverse d'une colonne
    - [x] Test unitaire
    - [x] jobs/Pipeline sur etulab

### Installation

    ```npm install```

### Lancement

    ```npm start```

### Test

    les tests sont dans le fichier Game.test.js et se lancent avec la commande

    ```npm test```

    les tests sont fait avec Jest et me permette de tester les fonctions de mon jeu et je n'ai pas vu l'utilité de tester autre chose que ce que j'ai fait.

    - [x] savoir si la partie debute
    - [x] fonctionnalité de poser un jeton
    - [x] fonctionnalité de gagner une partie en alignant 4 jetons (vertical, horizontal, diagonal)

### Pipeline

    le pipeline est dans le fichier .gitlab-ci.yml et se lance automatiquement à chaque push sur la branche master
    ils testent le code et le déploie sur le serveur etulab
    ils testent a partir de mes test jest et si ils sont concluant, il déploie le code sur le serveur etulab
    ils se lancent tout les jour à 09h00.

## Consignes

    Date limite de rendu : 08/12/2023 
    Evaluation : individuelle 

    Envoi du repo git vers "ludovic.decampy@gmail.com" avec un lien vers le repo qui doit être en public.

Sujet:

    Puissance 4 
    Grille : 7x6 

    A B C D E F G 
    O O O O O O O 
    O O O O O O O 
    O O O O O O O 
    O O O O O O O 
    O O O O O O O 
    O O O O O O O 

    Notion de colonne ou on joue 
    Quand il met le jeton, il tombe au plus bas possible : Gravité !!!!

    Règle de on gagne: 
    4 jetons alignés (vertical, horizontal, diagonal)

    Cas du match nul : La grille est complète, aucun gagnant, le jeu s'arrête 

    Reverse, si les deux joueurs gagne => match nul ccx
    Rendu: 08/12/2023 

    Bonus: 
    Reverse d'une colonne
    Reverse de colonne : la gravité se réaplique

    Bonus 2: 
    Random sur le reverse d'une colonne 

    Bonus 3: 
    Limiter le nombre de reverse possible
    
    Bonus 4: 
    Multijoueur 
