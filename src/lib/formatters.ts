export function formatNumber(num: number | null | undefined): string {
    if (!num) return "0";
    if (num < 10000) return num.toLocaleString("en-US");
    const kValue = Math.floor(num / 1000);
    return `${kValue}k${num % 1000 === 0 ? "" : "+"}`;
}
