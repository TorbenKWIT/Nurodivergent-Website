import matter from 'gray-matter'

// Eagerly load every Markdown file in src/content/blog as raw text so
// front matter (title/date/author/tags) can be parsed at build time.
const modules = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = matter(raw)
    return {
      slug: slugFromPath(path),
      title: data.title ?? slugFromPath(path),
      date: data.date ?? null,
      author: data.author ?? null,
      tags: data.tags ?? [],
      content,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getAllPosts() {
  return posts
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
