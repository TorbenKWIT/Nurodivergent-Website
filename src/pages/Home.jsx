import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-3xl font-semibold text-brand-900 sm:text-4xl">
          A campus community for neurodivergent students
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-700">
          The Neurodiversity Club supports and connects ADHD, autistic,
          dyslexic, and otherwise neurodivergent students, and promotes
          understanding across campus. Come as you are.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/join"
            className="rounded-md bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700"
          >
            Join Us
          </Link>
          <Link
            to="/events"
            className="rounded-md border border-brand-300 px-4 py-2 font-medium text-brand-700 hover:bg-brand-50"
          >
            Upcoming Events
          </Link>
          <Link
            to="/resources"
            className="rounded-md border border-brand-300 px-4 py-2 font-medium text-brand-700 hover:bg-brand-50"
          >
            Support Resources
          </Link>
        </div>
      </section>
    </div>
  )
}
