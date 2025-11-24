function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    const S = calculateS(a, b, c);
    const areaSquared = S * (S - a) * (S - b) * (S - c);
    if (areaSquared < 0) {
        return 0;
    }
    return Math.sqrt(areaSquared);
}

function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    const totalMarks = m1 + m2 + m3;
    const maxMarks = 300;
    return (totalMarks / maxMarks) * 100;
}

function mainFunction(m1, m2, m3) {
    const avg = calculateAverage(m1, m2, m3);
    const percent = calculatePercentage(m1, m2, m3);

    console.log("Average:", avg.toFixed(2));
    console.log("Percentage:", percent.toFixed(2) + "%");
}

function customIndexOf(sentence, char) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === char) {
            return i;
        }
    }
    return -1;
}

function deleteVowels(sentence) {
    let result = '';
    const VOWELS = 'aeiouAEIOU';
    for (let i = 0; i < sentence.length; i++) {
        if (!VOWELS.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

function countSuccessiveVowels(text) {
    let count = 0;
    const lowerText = text.toLowerCase();
    for (let i = 0; i < lowerText.length - 1; i++) {
        const char1 = lowerText[i];
        const char2 = lowerText[i + 1];
        let isVowel1 = false;
        let isVowel2 = false;

        switch (char1) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                isVowel1 = true;
        }

        switch (char2) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                isVowel2 = true;
        }

        if (isVowel1 && isVowel2) {
            count++;
        }
    }
    return count;
}