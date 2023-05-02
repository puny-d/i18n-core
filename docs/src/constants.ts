import { Image, Link, ArrayObject } from './readme/types'

export const langs = [
  {
    code: 'en',
    locale: 'en-US',
    name: 'English',
  },
  {
    code: 'zh',
    locale: 'zh-CN',
    name: '简体中文',
  },
]

const links = [
  {
    title: 'npm',
    href: 'https://www.npmjs.com/package/i18n-pro',
  },
  {
    title: 'github',
    href: 'https://github.com/eyelly-wu/i18n-pro',
  },
  {
    title: 'bundlesize',
    href: 'https://bundlephobia.com/package/i18n-pro',
  },
  {
    title: 'github-stars',
    href: 'https://github.com/eyelly-wu/i18n-pro/stargazers',
  },
  {
    title: 'last-commit',
    href: 'https://github.com/eyelly-wu/i18n-pro/commits/dev',
  },
  {
    title: 'github-issues',
    href: 'https://github.com/eyelly-wu/i18n-pro/issues',
  },
  {
    title: 'codecov',
    href: 'https://codecov.io/gh/eyelly-wu/i18n-pro',
  },
] as const

type LinkTitleType = ArrayObject<typeof links, 'title'>

type LinkObject = Record<LinkTitleType, Link>

export const linkObj = links.reduce((res, item) => {
  res[item.title] = item
  return res
}, {} as LinkObject)

const images = [
  {
    title: 'demo',
    alt: 'demo',
    src: 'https://s3.bmp.ovh/imgs/2023/05/02/cc60f507a8f76a81.gif',
  },
  {
    title: 'logo',
    alt: 'logo',
    src: 'https://s3.bmp.ovh/imgs/2022/06/25/3a1c742f283cf28e.png',
  },
  {
    title: 'npm-version',
    alt: 'npm-version',
    src: 'https://img.shields.io/npm/v/i18n-pro.svg?style=flat-square',
  },
  {
    title: 'npm-download',
    alt: 'npm-download',
    src: 'https://img.shields.io/npm/dm/i18n-pro',
  },
  {
    title: 'bundlesize',
    alt: 'bundlesize',
    src: 'https://img.shields.io/bundlephobia/minzip/i18n-pro?color=brightgreen&style=plastic',
  },
  {
    title: 'github-stars',
    alt: 'github-stars',
    src: 'https://img.shields.io/github/stars/eyelly-wu/i18n-pro?style=social',
  },
  {
    title: 'last-commit',
    alt: 'last-commit',
    src: 'https://img.shields.io/github/last-commit/eyelly-wu/i18n-pro/dev',
  },
  {
    title: 'github-issues',
    alt: 'github-issues',
    src: 'https://img.shields.io/github/issues-raw/eyelly-wu/i18n-pro',
  },
  {
    title: 'baidu-api-type',
    alt: 'baidu-api-type',
    src: 'https://fanyiapp.cdn.bcebos.com/api/doc/%E7%99%BE%E5%BA%A6%E7%BF%BB%E8%AF%91%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E9%80%9A%E7%94%A8%E7%BF%BB%E8%AF%91API%E6%9C%8D%E5%8A%A1%E5%8D%87%E7%BA%A7%E8%AF%B4%E6%98%8E.pdf',
  },
  {
    title: 'codecov',
    alt: 'codecov',
    src: 'https://codecov.io/gh/eyelly-wu/i18n-pro/branch/main/graph/badge.svg?token=758C46SIE7',
  },
] as const

type ImageTitleType = ArrayObject<typeof images, 'title'>

type ImageObject = Record<ImageTitleType, Image>

export const imageObj = images.reduce((res, item) => {
  res[item.title] = item
  return res
}, {} as ImageObject)
