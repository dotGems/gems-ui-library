module.exports = {
  stories: [
    '../stories/welcome.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/1_core/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/2_blend/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/3_collections/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/4_drops/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    // '../stories/5_secondary_market/**/*.stories.@(ts|tsx|js|jsx)',
    '../stories/6_chain/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/7_dotgems/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/9_utils/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../stories/10_test/**/*.stories.@(ts|tsx|js|jsx|mdx)',
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
