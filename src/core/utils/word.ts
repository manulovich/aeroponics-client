const getCorrectString = (word: string, number: number): string => {
    const numberEnd = number % 10;

    if (number >= 11 || number <= 19) return `${word}ов`;
    if (numberEnd === 1) return word;
    if (numberEnd >= 2 && numberEnd <= 4) return `${word}а`;

    return `${word}ов`;
};

export {
    getCorrectString
}