export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      
      {/* Hero Section */}
      <div className="px-10 pt-16">
        <h1 className="text-4xl font-bold mb-4">
          Praktikum Next.js Pages Router
        </h1>
        <p className="text-gray-300">
          Mahasiswa D4 Pengembangan Web
        </p>
      </div>

      {/* Footer Section */}
      <div className="border-t border-gray-700 mt-20 px-10 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          
          <div>
            <h3 className="font-semibold mb-2">Next Routing App</h3>
            <p className="text-gray-400">
              Project praktikum Pemrograman Framework menggunakan Next.js Pages Router.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Home</li>
              <li>Profile</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Follow</h3>
            <p className="text-gray-400">
              Instagram | LinkedIn | GitHub
            </p>
          </div>

        </div>

        <div className="text-center text-gray-500 text-xs mt-10">
          © 2026 Vinsens Chint Naiak. All rights reserved.
        </div>
      </div>

    </div>
  );
}