import { useId, useState } from 'react'

// Form submission destination is not yet decided (see .claude/CLAUDE.md
// open decisions). This form validates and confirms locally; wire it up to
// an email/Google Form/university system once that's chosen.
export default function JoinUs() {
  const nameId = useId()
  const emailId = useId()
  const noteId = useId()
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const email = form.email.value.trim()

    if (!email) {
      setError('Please enter an email address so we can reach you.')
      return
    }

    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-md">
        <h1 className="text-3xl font-semibold text-brand-900">Thanks for signing up!</h1>
        <p className="mt-4 text-brand-700">
          We'll be in touch soon. In the meantime, check the{' '}
          <a href="/events" className="underline">
            Events page
          </a>{' '}
          for what's coming up.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md">
      <h1 className="text-3xl font-semibold text-brand-900">Join Us</h1>
      <p className="mt-2 text-brand-700">
        Tell us a bit about yourself and we'll reach out with next steps.
        There's no time limit — take as long as you need.
      </p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor={nameId} className="block font-medium text-brand-900">
            Name (optional)
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            className="mt-1 w-full rounded-md border border-brand-300 px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor={emailId} className="block font-medium text-brand-900">
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            aria-describedby={error ? `${emailId}-error` : undefined}
            aria-invalid={error ? 'true' : undefined}
            className="mt-1 w-full rounded-md border border-brand-300 px-3 py-2"
          />
          {error && (
            <p id={`${emailId}-error`} role="alert" className="mt-1 text-sm text-red-700">
              {error}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={noteId} className="block font-medium text-brand-900">
            Anything you'd like us to know? (optional)
          </label>
          <textarea
            id={noteId}
            name="note"
            rows={4}
            className="mt-1 w-full rounded-md border border-brand-300 px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}
