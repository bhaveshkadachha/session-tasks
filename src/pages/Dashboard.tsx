import { useSearchParams } from "react-router-dom";

export default function DashboardPage() {
  const [searchParams] = useSearchParams()
  const email = searchParams.get('email')
  
  const userName = "John Doe";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center px-4">
      <div className="max-w-2xl bg-white rounded-xl shadow-lg p-10 text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome, {email}!
        </h1>
        <p className="text-gray-600 text-lg">
          We're glad to have you back. Explore your dashboard or get started on something new.
        </p>

        {/* Logout Button */}
        <div className="pt-4">
          <button
            className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 rounded-md text-sm font-medium transition duration-200"
          >
            Logout
          </button>
        </div>

        <div className="pt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} YourAppName. All rights reserved.
        </div>
      </div>
    </div>
  );
}
