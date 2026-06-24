import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center pt-20">
      <div className="container-px text-center">
        <p className="eyebrow">404</p>
        <h1 className="heading-display mt-3 text-4xl sm:text-5xl">This path isn’t on our map yet</h1>
        <p className="mx-auto mt-4 max-w-md text-ink/65">
          The page you’re looking for may have moved. Let’s get you back to the Silk Road.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-dark">Back to home</Link>
          <Link href="/tours" className="btn-outline">Browse tours</Link>
        </div>
      </div>
    </section>
  );
}
