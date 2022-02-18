import { DotGemsWrapper } from "../src/components/1_core/DotGemsWrapper";

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
};

export const decorators = [
  (Story) => (
    <DotGemsWrapper>
      <Story/>
    </DotGemsWrapper>
  ),
];
