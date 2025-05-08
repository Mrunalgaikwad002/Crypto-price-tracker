import { CryptoAsset } from '../types/crypto';

// Generate random price data for charts with more realistic movements
const generateChartData = (basePrice: number) => {
  let currentPrice = basePrice;
  return Array.from({ length: 7 }, () => {
    // Generate a random change between -2% and +2%
    const change = (Math.random() - 0.5) * 0.04;
    currentPrice = currentPrice * (1 + change);
    return currentPrice;
  });
};

// Initial crypto data
export const initialCryptoData: CryptoAsset[] = [
  {
    id: 'bitcoin',
    rank: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    logo: 'https://static.vecteezy.com/system/resources/previews/019/136/486/original/bitcoin-logo-bitcoin-icon-free-free-vector.jpg',
    price: 50000,
    change1h: 0.5,
    change24h: 2.5,
    change7d: 5.7,
    marketCap: 950000000000,
    volume24h: 25000000000,
    circulatingSupply: 19000000,
    maxSupply: 21000000,
    chartData: generateChartData(50000)
  },
  {
    id: 'ethereum',
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    logo: 'https://i.pinimg.com/736x/b0/8e/54/b08e54bd5c0c7d31a5070134e10bf10c.jpg',
    price: 3000,
    change1h: -0.3,
    change24h: 1.8,
    change7d: 3.2,
    marketCap: 350000000000,
    volume24h: 15000000000,
    circulatingSupply: 120000000,
    maxSupply: 0,
    chartData: generateChartData(3000)
  },
  {
    id: 'binancecoin',
    rank: 3,
    name: 'Binance Coin',
    symbol: 'BNB',
    logo: 'https://block-builders.net/wp-content/uploads/2020/04/Binance-Coin-BNB-icon-300x300-1.png',
    price: 400,
    change1h: 1.2,
    change24h: -0.5,
    change7d: 7.8,
    marketCap: 65000000000,
    volume24h: 3000000000,
    circulatingSupply: 150000000,
    maxSupply: 170000000,
    chartData: generateChartData(400)
  },
  {
    id: 'tether',
    rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    logo: 'https://altcoinsbox.com/wp-content/uploads/2023/01/tether-logo.webp',
    price: 1,
    change1h: 0.01,
    change24h: 0.02,
    change7d: 0.03,
    marketCap: 80000000000,
    volume24h: 50000000000,
    circulatingSupply: 80000000000,
    maxSupply: 0,
    chartData: generateChartData(1)
  },
  {
    id: 'solana',
    rank: 5,
    name: 'Solana',
    symbol: 'SOL',
    logo: 'https://logos-world.net/wp-content/uploads/2024/01/Solana-Logo.jpg',
    price: 100,
    change1h: -1.5,
    change24h: -2.3,
    change7d: 4.5,
    marketCap: 40000000000,
    volume24h: 3000000000,
    circulatingSupply: 400000000,
    maxSupply: 0,
    chartData: generateChartData(100)
  }
]; 