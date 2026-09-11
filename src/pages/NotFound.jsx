import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-semibold text-brand-900">Page not found</h1>
      <p className="mt-4 text-brand-700">
        <Link to="/" className="underline">
          Back to home
        </Link>
      </p>
    </div>
  )
}
