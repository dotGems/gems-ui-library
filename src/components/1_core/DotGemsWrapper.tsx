import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Theme } from '@mui/material/styles';

import { DotGemsProvider } from './DotGemsContext';
import { defaultContext } from "../../data/mock/context.mock";

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // (remove this line if you don't have the rule enabled)
  // https://stackoverflow.com/a/70798308/12691545
  interface DefaultTheme extends Theme {}
}

export interface DotGemsWrapperProps {
    children: React.ReactNode
}

/**
 * Wrapper for any project using the dotGems UI Library.
 */
export const DotGemsWrapper = ({
    children
}: DotGemsWrapperProps) => {

    const theme = createTheme();

    return (
      <ThemeProvider theme={theme}>
        <DotGemsProvider value={defaultContext}>
          {children}
        </DotGemsProvider>
      </ThemeProvider>
    );
};