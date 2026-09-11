// No photos yet. When adding images, always include descriptive alt text —
// see the accessibility requirements in .claude/CLAUDE.md.
const photos = []

export default function Gallery() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-brand-900">Gallery</h1>

      {photos.length === 0 ? (
        <p className="mt-4 max-w-2xl text-brand-700">
          No photos yet — check back after our first events.
        </p>
      ) : (
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((photo) => (
            <li key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-square w-full rounded-md object-cover"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
