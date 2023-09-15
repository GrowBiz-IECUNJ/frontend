export interface Inevstor {
  id: number
  name: string,
  photo: string,
  business_category: string,
  description: string,
  criteria: string,
  investor: Investor,
  portfolio: Portfolio
}

interface Investor {
  id: number
  name: string
  photo: string
  description: string
}

interface Portfolio {
  id: number
  title: string
  photo: string
  description: string
}