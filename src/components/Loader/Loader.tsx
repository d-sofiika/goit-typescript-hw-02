import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader: React.FC = () => {
  return (
    <Audio
      height="80"
      width="80"
      color="pink"
      ariaLabel="audio-loading"
    
    />
  );
}

export default Loader;