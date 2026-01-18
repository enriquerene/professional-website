import React from 'react';

export type TitleProps = {
  children: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({ children }) => <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">{children}</p>;

export default Title;