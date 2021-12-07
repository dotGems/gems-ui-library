module.exports = {
  stories: [
    '../stories/welcome.stories.@(ts|tsx|js|jsx)',
    '../stories/0_welcome/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/1_core/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/2_blend/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/3_collections/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/4_drops/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/5_secondary_market/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/6_chain/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/7_dotgems/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/9_utils/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/**/*.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
