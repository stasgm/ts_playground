import { sum, divide } from '../utils';

describe('utils test suit', () => {
  it('should return 4', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });

  it('should return 2', () => {
    const result = divide(4, 2);
    expect(result).toBe(2);
  });

  it('should return error (approach with arrow function)', () => {
    expect(() => {
      divide(4, 0);
    }).toThrow('Cannot be divided by zero');
  });

  it('should return error (approach with try\\catch)', () => {
    try {
      divide(4, 0);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Cannot be divided by zero');
    }
  });

  test.todo('just test todo method');

  test.skip('just test skip method', () => {
    // test
  });
});
