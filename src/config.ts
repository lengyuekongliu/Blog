import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'KongLiu\'s Blog',
  subtitle: '咸鱼的日常',
  lang: 'zh_CN',
  themeHue: 250,
  icp: '粤ICP备2024236056号',
  banner: {
    enable: true,
    src: 'https://image.kongliu.net/banner.jpg',
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/favicon/icon.svg',    // Path of the favicon, relative to the /public directory
      theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
    {
      src: '/favicon/icon.svg',
      theme: 'dark',
      sizes: '32x32',
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/saicaca/fuwari',
    //   external: true,
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://image.kongliu.net/93ab733bc1ef6476b993f9e4c355f6cee4a18113.gif',
  name: 'KongLiu',
  bio: '咸鱼/玩家/Coder',
  links: [
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/profiles/76561198135068368/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/lengyuekongliu',
    },
    {
      name: 'BiliBili',
      icon: 'fa6-brands:bilibili',
      url: 'https://space.bilibili.com/509663',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
