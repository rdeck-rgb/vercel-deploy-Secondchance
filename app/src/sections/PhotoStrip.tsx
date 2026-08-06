const PHOTOS = [
  { src: '/images/photos/bowties.jpg', alt: 'Two rescue dogs — a Bernese mountain dog and a golden retriever — sitting side by side in matching plaid bow ties', rotation: -2 },
  { src: '/images/photos/golden-puppy-closeup.jpg', alt: 'Golden retriever puppy resting her chin on the floor, looking up with big brown eyes', rotation: 1 },
  { src: '/images/photos/three-on-bed.jpg', alt: 'Golden retriever, Bernese mountain dog, and a Himalayan cat sharing the bed together', rotation: -1 },
  { src: '/images/photos/golden-couch.jpg', alt: 'Golden retriever relaxing on a couch', rotation: 2 },
  { src: '/images/photos/golden-nose.jpg', alt: 'Close-up of a golden retriever nose', rotation: -1 },
  { src: '/images/photos/golden-shoe.jpg', alt: 'Golden retriever with a shoe', rotation: 1 },
]

export function PhotoStrip() {
  return (
    <section className="bg-paper py-16 border-b-2 border-ink/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg italic text-ink/60 leading-relaxed max-w-2xl mx-auto font-serif">
          The welcoming committee at my house — the daily reminder of why this work matters.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {PHOTOS.map((p) => (
            <div
              key={p.src}
              className="overflow-hidden rounded-lg border-2 border-ink/10 bg-paper p-2 pb-6 shadow-[0_6px_0_rgba(42,31,22,0.08)]"
              style={{ transform: `rotate(${p.rotation}deg)` }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-square w-full object-cover rounded-sm transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
