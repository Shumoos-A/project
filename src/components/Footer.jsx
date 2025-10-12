export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-600 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Evola. All rights reserved.</p>
        <p className="opacity-75">Built with React + Tailwind</p>
      </div>
    </footer>
  );
}
