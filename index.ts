const performanceUser = (vitoria: number, derrota: number) => {
    let level: string;
    const saldoVitorias = vitoria - derrota;

    if (vitoria <= 10) {
        level = 'Ferro';
    } else if (vitoria <= 20) {
        level = 'Bronze';
    } else if (vitoria <= 50) {
        level = 'Prata';
    } else if (vitoria <= 80) {
        level = 'Ouro';
    } else if (vitoria <= 90) {
        level = 'Diamante';
    } else if (vitoria <= 100) {
        level = 'Lendário';
    } else {
        level = 'Mítico';
    }

    return `O Herói tem saldo de vitórias de ${saldoVitorias} e está no nível ${level}.`;
}

const playerScores = performanceUser(10, 5);
console.log(playerScores); 


