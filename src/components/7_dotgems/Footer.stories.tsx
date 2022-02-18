import React from "react";

import { Meta, Story } from '@storybook/react';
import { Footer, FooterProps } from './Footer';

const meta: Meta = {
  title: 'dotGems/Footer',
  component: Footer
}

export default meta;


const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    company: "dotGems",
    releaseYear: "2022",
    logo: {
      src: '/img/dotGems_logo.png',
      alt: 'dotGems Logo',
    },
    cta: {
      label: "Apply as an artist",
      link: "https://forms.monday.com/forms/4f7995d7277d876cdea679eba924d56a?r=use1"
    },
    linkColumns: [
      {
        title: "Community",
        links: [
          {
            label: "Discord",
            logo: "/img/footer/discord.svg",
            link: "https://discord.com/invite/XhAKScPbZj",
          },
          {
            label: "Instagram",
            logo: "/img/footer/instagram.svg",
            link: "https://www.instagram.com/dotgems/",
          },
          {
            label: "Telegram",
            logo: "/img/footer/telegram.svg",
            link: "https://t.me/dotGems",
          },
          {
            label: "Twitch",
            logo: "/img/footer/twitch.svg",
            link: "https://www.twitch.tv/dotgems",
          },
          {
            label: "Twitter",
            logo: "/img/footer/twitter.svg",
            link: "https://twitter.com/dotgems_",
          },
          {
            label: "Youtube",
            logo: "/img/footer/youtube.svg",
            link: "https://www.youtube.com/channel/UCokjLRgLgerCf5ijGYhp28w",
          },
        ]
      },
      {
        title: "Other",
        links: [
          {
            label: "Pomelo",
            logo: "/img/footer/pomelo.svg",
            link: "https://www.pomelo.io",
          },
          {
            label: "Blend",
            logo: "/img/footer/blend.svg",
            link: "https://blend.dotgems.io/",
          },
        ]
      }
    ]
  }
}