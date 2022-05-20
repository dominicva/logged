export default function containsObject(...data: any[]): boolean {
  return data.some(value => value instanceof Object);
}
