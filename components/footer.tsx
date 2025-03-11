export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-neutral-700 dark:text-neutral-300">
              © {currentYear} Saurabh Sawant. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Designed and built with ❤️ using Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
