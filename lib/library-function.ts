export function decodeAndReplace(input: any): string {
    // Use decodeURIComponent to replace %20 with spaces
    const decodedString = decodeURIComponent(input);
    return decodedString;
  }

export function convertToLower(input: any): string {
  return input.toLowerCase();
}

export function capitalizeEachWord(input: string): string {
  return input
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}