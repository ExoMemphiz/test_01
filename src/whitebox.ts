export function whiteBox(array: Array<string>) {
    let mi, ma;
    if (array.length === 0) {
        throw Error("No numbers");
    } else {
        mi = (ma = parseInt(array[0]));
        for (let i = 1; i < array.length; i++) {
            let obs = parseInt(array[i]);
            if (obs > ma) {
                ma = obs;
            } else if (obs < mi) {
                mi = obs;
            }
        }
        return {
            minimum: mi,
            maximum: ma
        }
    }
}
