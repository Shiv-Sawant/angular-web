export type CryptoOrderStatus = 'completed' | 'pending' | 'failed'| 'In Progress';

export interface CryptoOrder {
  id: string;
  status: CryptoOrderStatus;
  createdBy: string;
  orderDetails: string;
  orderDate: number;
  orderID: string;
  sourceName: string;
  sourceDesc: string;
  amountCrypto: number;
  amount: number;
  cryptoCurrency: string;
  currency: string;
}
