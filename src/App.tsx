import { Suspense, useEffect, useState } from 'react';
import './App.css';
import type { Employee } from './types';
import { getEmployees } from './api/employeeData';
import { EmployeeCard } from './components/EmployeeCard';
import { CardGrid } from './components/CardGrid';

function App() {
  const [fetchPromise, setFetchPromise] = useState<Promise<Employee[]>>(() => getEmployees());
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

  console.log({
    searchQuery,
    departmentFilter,
    sortOption,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleDepartmentFilter = (department: string) => {
    setDepartmentFilter(department);
  };

  const handleSort = (sortOption: string) => {
    setSortOption(sortOption);
  };

  return (
    <main className="mx-auto flex flex-col max-w-6xl items-center min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center">Employee Directory</h1>
      <section className="my-6 flex gap-x-8 gap-y-4 w-full p-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search employees by name or role..."
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchQuery}
        />
        {/* Department filter dropdown */}
        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
          onChange={(e) => handleDepartmentFilter(e.target.value)}
          value={departmentFilter}
        >
          <option value="">All Departments</option>
          <option value="Departments">Departments</option>
          {/* Departments from the JSON */}
        </select>
        {/* Sort Controls */}
        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ml-auto w-40"
          onChange={(e) => handleSort(e.target.value)}
          value={sortOption}
        >
          <option value="">Sort By</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="startDate-asc">Start Date (Oldest First)</option>
          <option value="startDate-desc">Start Date (Newest First)</option>
        </select>
      </section>
      <section className="my-6 flex gap-x-16 gap-y-4 w-full p-4">
        <Suspense fallback={<div>Loading employees...</div>}>
          <CardGrid
            searchQuery={searchQuery}
            departmentFilter={departmentFilter}
            sortOption={sortOption}
            fetchPromise={fetchPromise}
          />
        </Suspense>
      </section>
    </main>
  );
}

export default App;
