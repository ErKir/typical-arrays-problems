
export function min (array) {
    if (array.length === 0 || array === undefined) {
        return 0;
    }
    const sorted = array.sort((a, b) => a - b);
    return sorted[0];
};

export function max (array) {
    if (array.length === 0 || array === undefined) {
        return 0;
    }
    const sorted = array.sort((a, b) => b - a);
    return sorted[0];
}

export function avg (array) {
    if (array.length === 0 || array === undefined) {
        return 0;
    }
    const sum = array.reduce((item, acc) => acc + item, 0);
    const average = sum / (array.length + 1);
};
