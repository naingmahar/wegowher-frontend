export interface IChargeRes {
    object: string
    id: string
    location: string
    amount: number
    acquirer_reference_number: any
    net: number
    fee: number
    fee_vat: number
    interest: number
    interest_vat: number
    funding_amount: number
    refunded_amount: number
    transaction_fees: TransactionFees
    platform_fee: PlatformFee
    currency: string
    funding_currency: string
    ip: any
    refunds: Refunds
    link: any
    description: string
    metadata: Metadata
    card: Card
    source: any
    schedule: any
    linked_account: any
    customer: any
    dispute: any
    transaction: any
    failure_code: any
    failure_message: any
    status: string
    authorize_uri: string
    return_uri: string
    created_at: string
    paid_at: any
    expires_at: string
    expired_at: any
    reversed_at: any
    zero_interest_installments: boolean
    branch: any
    terminal: any
    device: any
    authorized: boolean
    capturable: boolean
    capture: boolean
    disputable: boolean
    livemode: boolean
    refundable: boolean
    partially_refundable: boolean
    reversed: boolean
    reversible: boolean
    voided: boolean
    paid: boolean
    expired: boolean
    can_perform_void: boolean
    approval_code: any
  }
  
  export interface TransactionFees {
    fee_flat: string
    fee_rate: string
    vat_rate: string
  }
  
  export interface PlatformFee {
    fixed: any
    amount: any
    percentage: any
  }
  
  export interface Refunds {
    object: string
    data: any[]
    limit: number
    offset: number
    total: number
    location: string
    order: string
    from: string
    to: string
  }
  
  export interface Metadata {}
  
  export interface Card {
    object: string
    id: string
    livemode: boolean
    location: any
    deleted: boolean
    street1: any
    street2: any
    city: string
    state: any
    phone_number: any
    postal_code: string
    country: string
    financing: string
    bank: string
    brand: string
    fingerprint: string
    first_digits: any
    last_digits: string
    name: string
    expiration_month: number
    expiration_year: number
    security_code_check: boolean
    tokenization_method: any
    created_at: string
  }
  