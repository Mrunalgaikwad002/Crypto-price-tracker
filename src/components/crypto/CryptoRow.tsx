import React from 'react';
import styled from 'styled-components';
import { CryptoAsset } from '../../types/crypto';
import { formatNumber, formatPercentage, formatCurrency } from '../../utils/formatters';
import { LineChart } from '../charts/LineChart';

const ChangeCell = styled.td<{ value: number }>`
  color: ${props => props.value >= 0 ? '#16c784' : '#ea3943'};
`;

const ChartCell = styled.td`
  width: 150px;
`;

const NameCell = styled.td`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    border-radius: 50%;
  }
`;

interface CryptoRowProps {
  asset: CryptoAsset;
}

export const CryptoRow: React.FC<CryptoRowProps> = ({ asset }) => {
  const isPositive = asset.chartData[asset.chartData.length - 1] >= asset.chartData[0];
  const chartColor = isPositive ? '#16c784' : '#ea3943';

  return (
    <tr>
      <td>{asset.rank}</td>
      <NameCell>
        <img src={asset.logo} alt={asset.name} width="24" height="24" />
        {asset.name}
      </NameCell>
      <td>{asset.symbol}</td>
      <td>{formatCurrency(asset.price)}</td>
      <ChangeCell value={asset.change1h}>
        {formatPercentage(asset.change1h)}
      </ChangeCell>
      <ChangeCell value={asset.change24h}>
        {formatPercentage(asset.change24h)}
      </ChangeCell>
      <ChangeCell value={asset.change7d}>
        {formatPercentage(asset.change7d)}
      </ChangeCell>
      <td>{formatCurrency(asset.marketCap)}</td>
      <td>{formatCurrency(asset.volume24h)}</td>
      <td>{formatNumber(asset.circulatingSupply)}</td>
      <td>{asset.maxSupply ? formatNumber(asset.maxSupply) : '∞'}</td>
      <ChartCell>
        <LineChart data={asset.chartData} color={chartColor} />
      </ChartCell>
    </tr>
  );
}; 