export default function Resources() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-brand-900">Resources</h1>
        <p className="mt-2 text-sm text-brand-600">
          Campus-specific links below are placeholders and need to be
          verified before launch — see{' '}
          <code className="rounded bg-brand-50 px-1 py-0.5">
            .claude/CLAUDE.md
          </code>
          .
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-brand-900">
          Campus Disability Services
        </h2>
        <p className="mt-2 text-brand-700">
          [Placeholder — add the office name, contact info, and link once confirmed.]
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-900">
          Mental Health Support
        </h2>
        <p className="mt-2 text-brand-700">
          [Placeholder — add campus counseling center contact info once confirmed.]
        </p>
        <p className="mt-2 text-brand-700">
          988 Suicide &amp; Crisis Lifeline (call or text 988) is available
          24/7 in the US.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-brand-900">
          Neurodiversity-Specific Resources
        </h2>
        <p className="mt-2 text-brand-700">
          [Placeholder — add links to ADHD/autism/dyslexia-specific
          organizations and communities once selected.]
        </p>
      </section>
    </div>
  )
}
