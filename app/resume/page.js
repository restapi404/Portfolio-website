export default function Resume() {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p>Download the full resume to see more details.</p>
      <a href="/resume.docx" download className="text-blue-500 hover:text-red-600">Resume</a>
    </div>
  );
}