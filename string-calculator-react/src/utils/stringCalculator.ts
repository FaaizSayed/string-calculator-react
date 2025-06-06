export function add(numbers: string): number {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const match = numbers.match(/^\/\/(.+)\n(.*)/);
      if (match) {
        delimiter = new RegExp(match[1]);
        numbers = match[2];
      }
    }
  
    const tokens = numbers.split(delimiter).map(Number);
    const negatives = tokens.filter(n => n < 0);
  
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
  
    return tokens.reduce((sum, num) => sum + num, 0);
  }
  