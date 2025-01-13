#### Giscus

Based on the [Giscus web component](https://github.com/giscus/giscus-component?tab=readme-ov-file#using-the-web-component) implementation.

The prop names are the same as the data- attributes shown on the [giscus website](<(https://giscus.app/)>), but written in camelCase with the data- prefix and dashes removed.

You can enable Giscus by adding the following configuration to the config file:

```ts
{
  comments: {
    giscus: {
      repo: 'moeyua/astro-theme-typography'
      repoId: 'R_kgDOKy9HOQ'
      category: 'General'
      categoryId: 'DIC_kwDOKy9HOc4CegmW'
      mapping: 'title'
      strict: '0'
      reactionsEnabled: '1'
      emitMetadata: '1'
      inputPosition: 'top'
      theme: 'light'
      lang: 'zh-CN'
      loading: 'lazy'
    }
  }
}
```
