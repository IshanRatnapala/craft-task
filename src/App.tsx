import { Suspense, useState } from 'react';
import './App.css';
import type { Employee } from './types';
import { getDepartments, getEmployees } from './api/employeeData';
import { CardGrid } from './components/CardGrid';
import { Filters } from './components/Filters';

function App() {
  const [fetchPromise] = useState<Promise<Employee[]>>(() => getEmployees());
  const [departmentsPromise] = useState<Promise<string[]>>(() => getDepartments());
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('');

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
      <section className="my-6 w-full p-4">
        <Suspense fallback={<div>Loading filters...</div>}>
          <Filters
            departmentsPromise={departmentsPromise}
            searchQuery={searchQuery}
            departmentFilter={departmentFilter}
            sortOption={sortOption}
            onSearch={handleSearch}
            onDepartmentFilter={handleDepartmentFilter}
            onSort={handleSort}
          />
        </Suspense>
      </section>
      <section className="my-6 flex gap-x-16 gap-y-4 w-full p-4">
        {/* TODO: Add error boundary here */}
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
