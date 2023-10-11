export const PADDING = 10_000;

export const numberToBigInt = (amount: number): bigint => {
  return BigInt(Math.round(amount * PADDING));
};

class Money {
  private formater: Intl.NumberFormat;
  private amount: bigint;
  constructor(amount: bigint) {
    this.amount = amount;
    this.formater = new Intl.NumberFormat('en-US', {
      style: 'currency',
      minimumFractionDigits: 2,
      currency: 'USD',
      currencyDisplay: 'narrowSymbol',
    });
  }

  static fromBigInt(amount: bigint) {
    return new Money(amount);
  }

  static fromNumber(amount: number) {
    return new Money(numberToBigInt(amount));
  }

  static fromString(stringValue: string, defaultNum: number = 0) {
    const numberAmount = parseFloat(stringValue);
    if (isNaN(numberAmount)) return this.fromNumber(defaultNum);
    return this.fromNumber(numberAmount);
  }

  toNumber() {
    const cents = BigInt(this.amount / BigInt(100));
    const dollars = Number(cents) / 100;
    return dollars;
  }

  toFormat() {
    return this.formater.format(this.toNumber());
  }
}

export default Money;
