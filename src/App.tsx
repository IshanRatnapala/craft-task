import './App.css';

function App() {
  return (
    <main className="mx-auto flex flex-col max-w-6xl items-center min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center">Employee Directory</h1>
      <section className="my-6 flex gap-x-8 gap-y-4 w-full p-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search employees by name or role..."
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
        />
        {/* Department filter dropdown */}
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ">
          <option value="">All Departments</option>
          {/* Departments from the JSON */}
        </select>
        {/* Sort Controls */}
        <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2">
          <option value="">Sort By</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="startDate-asc">Start Date (Oldest First)</option>
          <option value="startDate-desc">Start Date (Newest First)</option>
        </select>
      </section>
      <section className="my-6 flex gap-x-16 gap-y-4 w-full p-4">
        {/* Employee Cards */}
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg w-48">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
            PS
          </div>
          <div className="text-center">
            <p className="font-semibold">Priya Sharma</p>
            <p className="text-sm font-bold text-gray-500">Role</p>
            <p className="text-sm text-gray-500">Department</p>
            <p className="text-sm text-gray-500">Start Date</p>
            {/* TODO: make color dynamic */}
            <div className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full mt-2">
              Active
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
