export default function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-white">
      {/* Navbar */}
      <nav className="absolute top-4 right-6">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Login</button>
      </nav>
      
      {/* Hero Section */}
      <h1 className="text-5xl font-bold text-center drop-shadow-lg">
        Google Olympic VIT Bhopal
      </h1>
      
      <p className="mt-4 text-lg text-center opacity-90">
        Join us for an electrifying event filled with challenges and innovation!
      </p>
      
      {/* Register Buttons */}
      <div className="mt-6 space-x-4 flex justify-center">
        <a href="https://forms.gle/AVi47sbTLNg5yHu69 " className="px-6 py-3 text-lg bg-gray-800 text-white rounded-2xl shadow-lg hover:bg-gray-700">
          Register as VIT Student
        </a>
        <a href="https://forms.gle/WHWZ7bD8kigezw1i9 " className="px-6 py-3 text-lg bg-gray-800 text-white rounded-2xl shadow-lg hover:bg-gray-700">
          Register as Non-VIT Student
        </a>
      </div>
    </div>
  );
}
