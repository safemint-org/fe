export function ellipseAddress(address: string = '', width: number = 3): string {
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export function autoWidthVW(width: number){
  return width/1440*100+"vw"
}
