---
title: Home
---

# about page here

Please choose a *framework*:

<example-multiselect :options="['Vue', 'React', 'Angular', 'Svelte']"></example-multiselect>

## another options menu 

---
multiselectOptions:
  - VuePress
  - Gridsome
  - Nuxt
---

<example-multiselect :options="multiselectOptions"></example-multiselect>


## Links

<nuxt-link to="/">Nuxt Link to homepage</nuxt-link>

<a href="/">Html Link to Blog</a>

[Markdown Link to Blog](/)

<a href="https://nuxtjs.org">External link html</a>

[External Link markdown](https://nuxtjs.org)

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.


