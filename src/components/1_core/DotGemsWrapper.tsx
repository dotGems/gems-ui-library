import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { DotGemsProvider } from './DotGemsContext';
import { defaultContext } from "../../data/mock/context.mock";

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