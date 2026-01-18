"use client";

import React from 'react';
import { ThemeProvider as StyledThemeProvider, useTheme as useStyledTheme } from 'styled-components';
import { mainTheme, ThemeType } from '../themes/mainTheme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <StyledThemeProvider theme={mainTheme}>
      {children}
    </StyledThemeProvider>
  );
};

export const useTheme = () => useStyledTheme() as ThemeType;
