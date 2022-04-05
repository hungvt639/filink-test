import { BigNumber, Transaction } from "ethers";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
export function showDate(dateString: string) {
    const d = new Date(dateString);
    const year = d.getFullYear();
    const date = d.getDate();
    const monthIndex = d.getMonth();
    const month = months[monthIndex];
    return `${month} ${date}th ${year}`;
}

export const getBalanceNumber = (
    balance?: BigNumber,
    decimals = 18,
    toFixed = 9
) => {
    if (!balance) return 0;
    const div = BigNumber.from((10 ** decimals).toString());
    const start = balance.div(div).toString();
    const end = balance.mod(div).toString();
    let strings = "";
    for (let i = decimals - end.length; i > 0; i--) strings += "0";
    return parseFloat(parseFloat(start + "." + strings + end).toFixed(toFixed));
};

export const getMaxSecond = (arr: Transaction[]) => {
    if (arr.length < 2) return undefined;
    let max = getBalanceNumber(arr[0].value);
    let secondIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (getBalanceNumber(arr[i].value) > max)
            max = getBalanceNumber(arr[i].value);
    }
    for (let i = 0; i < arr.length; i++) {
        if (
            getBalanceNumber(arr[i].value) >
                getBalanceNumber(arr[secondIndex].value) &&
            getBalanceNumber(arr[i].value) < max
        )
            secondIndex = i;
    }
    return arr[secondIndex];
};
