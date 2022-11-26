export interface SearchSymbolDto {
  count: number
  result: SymbolDto[]
}

export interface SymbolDto {
  description: string
  displaySymbol: string
  symbol: string
  type: string
}

export interface QuoteDto {
  c: number // Current price
  d: number // Change
  dp: number // Percent change
  h: number // High price of the day
  l: number // Low price of the day
  o: number // ?
  pc: number // Previous close price
  t: number // ?
}
