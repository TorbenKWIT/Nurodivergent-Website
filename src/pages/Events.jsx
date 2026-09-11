// Static placeholder list. Open decision (see .claude/CLAUDE.md): keep this
// static, or sync with an external calendar (e.g. Google Calendar embed)?
const events = []

export default function Events() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-semibold text-brand-900">Events</h1>

      {events.length === 0 ? (
        <p className="mt-4 text-brand-700">
          No events are scheduled yet — check back soon, or{' '}
          <a href="/join" className="underline">
            join us
          </a>{' '}
          to be notified.
        </p>
      ) : (
        <ul className="mt-6 space-y-6">
          {events.map((event) => (
            <li key={event.title} className="border-b border-brand-100 pb-6">
              <h2 className="text-xl font-semibold text-brand-900">{event.title}</h2>
              <p className="mt-1 text-sm text-brand-600">{event.when}</p>
              <p className="mt-2 text-brand-700">{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
