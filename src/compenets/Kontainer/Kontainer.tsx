import * as React from 'react';

interface IKontainer {
  children: React.ReactNode
}

export const Kontainer: React.FC<IKontainer> = ({ children }) => {
  return (
    <div className='kontainer-div'>
      <div className='kontainer-insideDiv'></div>
      <div className='kontainer-body'>
        {children}
      </div>
      <div className='kontainer-insideDiv'></div>
    </div>
    
  );
}
1