declare module 'react-loader-spinner' {
  import React from 'react';

  interface AudioProps {
    height: string | number;
    width: string | number;
    color?: string;
    ariaLabel?: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClass?: string;
  }

  export const Audio: React.FC<AudioProps>;
}