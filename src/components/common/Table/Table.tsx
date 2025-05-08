import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
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

  tr:hover {
    background: #f8f9fa;
  }

  @media (max-width: 768px) {
    display: block;
    overflow-x: auto;
  }
`;

export const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
}; 