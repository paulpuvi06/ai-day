export default function Footer() {
  return (
    <footer className="py-6 bg-blue-900 text-white text-center mt-12">
      <div className="max-w-4xl mx-auto px-4">
        &copy; {new Date().getFullYear()} LLM Explorer. All rights reserved.
      </div>
    </footer>
  );
}
