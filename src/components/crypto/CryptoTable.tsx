import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CryptoAsset } from '../../types/crypto';
import { CryptoRow } from './CryptoRow';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 20px 0;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
  }
`;

export const CryptoTable: React.FC = () => {
  const cryptoAssets = useSelector((state: RootState) => state.crypto) as CryptoAsset[];

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {cryptoAssets.map((asset: CryptoAsset) => (
            <CryptoRow key={asset.id} asset={asset} />
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default CryptoTable; 