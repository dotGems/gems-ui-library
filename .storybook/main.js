module.exports = {
  stories: [
    '../src/components/welcome.stories.@(ts|tsx|js|jsx)',
    '../src/components/0_welcome/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/1_core/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/2_blend/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/3_collections/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/4_drops/**/*.stories.@(ts|tsx|js|jsx)',
    // '../src/components/5_secondary_market/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/6_chain/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/7_dotgems/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/8_legacy/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/9_utils/**/*.stories.@(ts|tsx|js|jsx)',
    '../src/components/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: false, // type-check stories during Storybook build
  }
};
