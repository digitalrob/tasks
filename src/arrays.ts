/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length >= 2) {
        numbers = [numbers[0], numbers[numbers.length - 1]];
        return numbers;
    }
    if (numbers.length === 1) {
        numbers = [...numbers, ...numbers];
        return numbers;
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    numbers = numbers.map((element: number): number => element * 3);
    return numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let numArr = [];
    numArr = numbers.map((element: string): number => {
        if (isNaN(Number(element))) {
            return 0;
        } else {
            return Number(element);
        }
    });
    return numArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
//Robert Reardon!!
export const removeDollars = (amounts: string[]): number[] => {
    const amountArr = amounts.map((element: string): string =>
        element.includes("$") ? element.replace("$", "") : element
    );
    let numberARR = amountArr.map((element: string): number => Number(element));
    numberARR = numberARR.map((element: number): number => {
        if (isNaN(Number(element))) {
            return 0;
        } else {
            return Number(element);
        }
    });
    return numberARR;
};

/**
 *
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let mess_2 = messages.map((message: string): string =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    mess_2 = mess_2.filter(
        (message: string): boolean => message.charAt(message.length - 1) !== "?"
    );
    return mess_2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    words = words.filter((message: string): boolean => message.length < 4);
    return words.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let colorBool = false;
    if (colors === null) {
        return true;
    }
    colorBool = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return colorBool;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        addends = [...addends, 0];
    }
    const adds = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const plus = addends.join("+");
    return adds + "=" + [plus];
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const negativeIndex = values.findIndex((num: number): boolean => num <= -1);
    if (negativeIndex === -1) {
        const adds = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        return [...values, adds];
    } else {
        const start = values.slice(0, negativeIndex);
        const adds = start.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const end = values.slice(negativeIndex + 1, values.length);
        return [...start, values[negativeIndex], adds, ...end];
    }
}
