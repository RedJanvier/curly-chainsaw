const moneyFormatter = (number: any): string =>
  number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export default moneyFormatter;
