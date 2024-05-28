export interface ICardRes {
    card: Card
    charge_status: string
    created_at: string
    id: string
    livemode: boolean
    location: string
    object: string
    used: boolean
  }

  interface Card {
    bank: string
    brand: string
    city: string
    country: string
    created_at: string
    deleted: boolean
    expiration_month: number
    expiration_year: number
    financing: string
    fingerprint: string
    first_digits: any
    id: string
    last_digits: string
    livemode: boolean
    location: any
    name: string
    object: string
    phone_number: any
    postal_code: string
    security_code_check: boolean
    state: any
    street1: any
    street2: any
    tokenization_method: any
  }
  