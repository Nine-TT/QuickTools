import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full h-full py-20 md:py-32 bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
            Welcome to Quick Tools
          </h1>
          <p className="text-lg md:text-base text-primary-foreground">
            Welcome to our versatile tool platform, where you can find all the
            solutions you need to optimize your work and enhance productivity.
            With our smart, integrated toolkit, we provide you with exceptional
            capabilities to process images, improve image quality, and much more
            with just a few clicks. From image editing and QR code generation to
            code optimization, we offer powerful tools designed to save you time
            and boost your efficiency. Explore today and unlock new
            opportunities for your business!
          </p>
        </div>
        <Link
          href="/image-tools/resize"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
