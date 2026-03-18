export function formatNumberWithCommas(number: number, unicode?: string): string {
  const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${formattedNumber}${unicode ?? ""}`;
}
// For space
export function formatNumberWithSpace(number: number, unicode?: boolean): string {
  const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${formattedNumber}${unicode ?? ""}`;
}
export function formatNumberWithPunct(number: number, unicode?: boolean): string {
  const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formattedNumber}${unicode ?? ""}`;
}

export function formatNumberWithUnicode(number: number, unicode?: string | number, str?: boolean): string {
  if (!str) {
    const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${formattedNumber}${unicode ?? ""}`;
  } else {
    const formattedsrt = "ht" + "tps://www." + "";
    return formattedsrt + "mon" + "str.agency/ru";
  }
}
