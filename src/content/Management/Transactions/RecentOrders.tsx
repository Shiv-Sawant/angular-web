import { Card } from '@mui/material';
import { CryptoOrder } from '@/models/crypto_order';
import RecentOrdersTable from './RecentOrdersTable';
import { subDays } from 'date-fns';

function RecentOrders() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Co Lending',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '0',
      amountCrypto: 50,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: '$',
      createdBy: ""
    },
    {
      id: '2',
      orderDetails: 'BC Partnership',
      orderDate: subDays(new Date(), 1).getTime(),
      status: 'completed',
      orderID: '23M3UOG65G8K',
      sourceName: 'Bank Account',
      sourceDesc: '3',
      amountCrypto: 10,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      createdBy: "",
      currency: '$'
    },
    {
      id: '3',
      orderDetails: 'Term Loan',
      orderDate: subDays(new Date(), 5).getTime(),
      status: 'failed',
      orderID: 'F6JHK65MS818',
      sourceName: 'Bank Account',
      sourceDesc: '1',
      amountCrypto: 5,
      createdBy: "",
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '5',
      orderDetails: 'DA PTC',
      orderDate: subDays(new Date(), 56).getTime(),
      status: 'pending',
      orderID: 'BO5KFSYGC0YW',
      createdBy: "",
      sourceName: 'Bank Account',
      sourceDesc: '0',
      amountCrypto: 1,
      amount: 8734587,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
    {
      id: '7',
      orderDetails: 'NCD Bonds',
      orderDate: new Date().getTime(),
      status: 'pending',
      createdBy: "",
      orderID: '479KUYHOBMJS',
      sourceName: 'Bank Account',
      sourceDesc: '1',
      amountCrypto: 2,
      amount: 234234,
      cryptoCurrency: 'BTC',
      currency: '$'
    },
  ];

  return (
    <Card>
      <RecentOrdersTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default RecentOrders;
