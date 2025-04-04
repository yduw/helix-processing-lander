export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-900">
      <div className="text-center max-w-xl p-8">
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-indigo-200 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <a href="/" className="inline-flex items-center px-6 py-3 border border-transparent rounded-full text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50">
          Return Home
        </a>
      </div>
    </div>
  );
}