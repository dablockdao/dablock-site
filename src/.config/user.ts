import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'Dablock',
    subtitle: '混乱を予想',
    author: 'DablockDAO',
    description: 'Expect Chaos.',
    website: 'https://dablock.com/',
    pageSize: 5,
    socialLinks: [
      {
        name: 'github',
        href: ' https://github.com/dablockdao/',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'twitter',
        href: 'https://x.com/lvweb3/',
      },
      {
        name: 'twitter',
        href: 'https://x.com/dablockdao/',
      },
      {
        name: 'youtube',
        href: 'https://youtube.com/@LV5 ',
      },
    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    footer: [
      '© %year <a target="_blank" href="https://x.com/dablockdao">%author</a> & <a target="_blank" href="https://x.com/lvweb3">LV</a>',
      'Part of <a target="_blank" href="https://polkadotecosystem.com/">Polkadot Ecosystem</a>.',
      'Proudly supported by <a target="_blank" href="https://polkadot.com//">Polkadot DAO</a>',
    ],
  },
  appearance: {
    theme: 'dark',
    locale: 'en-us',
    colorsLight: {
      primary: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#000000',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@dablockdao',
  },
  rss: {
    fullText: true,
  },
  comment: {
    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
