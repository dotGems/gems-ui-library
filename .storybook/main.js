module.exports = {
  stories: [
    '../stories/1_core/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/2_collections/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/3_drops/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/4_secondary_market/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/5_wallet/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/6_dotgems/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/9_utils/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  }
};
