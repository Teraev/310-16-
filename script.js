function arabicToRoman(num) {
    const map = [
        { roman: 'M', arabic: 1000 },
        { roman: 'CM', arabic: 900 },
        { roman: 'D', arabic: 500 },
        { roman: 'CD', arabic: 400 },
        { roman: 'C', arabic: 100 },
        { roman: 'XC', arabic: 90 },
        { roman: 'L', arabic: 50 },
        { roman: 'XL', arabic: 40 },
        { roman: 'X', arabic: 10 },
        { roman: 'IX', arabic: 9 },
        { roman: 'V', arabic: 5 },
        { roman: 'IV', arabic: 4 },
        { roman: 'I', arabic: 1 }
    ];

    let result = '';

    for (let i = 0; i < map.length; i++) {
        while (num >= map[i].arabic) {
            result += map[i].roman;
            num -= map[i].arabic;
        }
    }

    return result;
}

console.log(arabicToRoman(99));
