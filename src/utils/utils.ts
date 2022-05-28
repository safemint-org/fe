export function ellipseAddress(address: string = '', width: number = 3): string {
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}
