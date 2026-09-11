import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../lib/posts.js'

function formatDate(date) {
  if (!date) return null
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-brand-900">Post not found</h1>
        <p className="mt-4 text-brand-700">
          <Link to="/blog" className="text-brand-700 underline">
            Back to the blog
          </Link>
        </p>
      </div>
    )
  }

  return (
    <article className="max-w-2xl">
      <Link to="/blog" className="text-sm text-brand-700 underline">
        &larr; Back to the blog
      </Link>
      <h1 className="mt-4 text-3xl font-semibold text-brand-900">{post.title}</h1>
      {post.date && (
        <p className="mt-1 text-sm text-brand-600">
          {formatDate(post.date)}
          {post.author ? ` · ${post.author}` : ''}
        </p>
      )}
      <div className="prose mt-6 max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}
