function reverseLine() {
    const randomChance = Math.random() * 100;
    if (randomChance <= 10) {
        const randomRowIndex = Math.floor(Math.random() * 6);
        const startIndex = randomRowIndex * 7;

        const line = tableau.slice(startIndex, startIndex + 7);
        const reversedLine = line.map(token => (token === 'rouge' ? 'jaune' : token === 'jaune' ? 'rouge' : 'blanc'));

        const newTab = [...tableau];
        newTab.splice(startIndex, 7, ...reversedLine);
        updateTableau(newTab);
    }
}