import { convertPLNToUSD } from './../convertPLNtoUSD';

// ? Grzechu: te test miały wyrzucać w Ćw. 2 błędy, bo ten kod był niby źle 
// ? napisany, ale on zawsze zdawał testy. Ja też nie widze w nim błedu. :( 

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('1')).toBeNaN();
    expect(convertPLNToUSD('A')).toBeNaN();
    expect(convertPLNToUSD('one')).toBeNaN();
    expect(convertPLNToUSD('null')).toBeNaN();
    expect(convertPLNToUSD('NaN')).toBeNaN();
  });

  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  });

  it('should return Error when input is not number or not string', () => {
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });

  it('should return Error when input is < 0', () => {
    expect(convertPLNToUSD(-12)).toBe('$0.00');
    expect(convertPLNToUSD(-4)).toBe('$0.00');
    expect(convertPLNToUSD(-0, 5)).toBe('$0.00');
  });
});