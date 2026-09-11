import { Link } from 'react-router-dom'
import { getAllPosts } from '../lib/posts.js'

function formatDate(date) {
  if (!date) return null
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold text-brand-900">Blog &amp; Newsletter</h1>

      {posts.length === 0 ? (
        <p className="mt-4 text-brand-700">No posts yet — check back soon.</p>
      ) : (
        <ul className="mt-6 space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-brand-100 pb-6">
              <h2 className="text-xl font-semibold">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-brand-800 hover:underline"
                >
                  {post.title}
                </Link>
              </h2>
              {post.date && (
                <p className="mt-1 text-sm text-brand-600">
                  {formatDate(post.date)}
                  {post.author ? ` · ${post.author}` : ''}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
