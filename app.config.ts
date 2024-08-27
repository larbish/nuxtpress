interface HeaderLink {
  title: string
  to: unknown // TODO: Improve type
}

const headerLinks: HeaderLink[] = [
  { title: 'Blog', to: '/blog' },
  { title: 'Docs', to: '/docs/getting-started' },
]

export default defineAppConfig({
  nuxtPress: {
    title: 'NuxtPress',
    logoSrc: 'https://anu-vue.netlify.app/logo.svg',
    header: {
      links: headerLinks,
    },
  },
})
