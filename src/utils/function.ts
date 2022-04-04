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
