import { DotGemsProvider } from "../src/components/1_core/DotGemsContext";
import { defaultContextModel } from "../src/data/Context.data";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <DotGemsProvider value={defaultContextModel}>
      <Story/>
    </DotGemsProvider>
  ),
];
