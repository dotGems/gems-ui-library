import { StylesProvider, ThemeProvider } from '@mui/material/styles';
// import { muiTheme } from 'storybook-addon-material-ui';
// import { muiTheme } from '../src/9_utils/stylesheet';
// export const decorators = [
//   (story) => <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>,
// ];

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};
