import { Suspense, useState } from 'react';
import './App.css';
import type { Employee } from './types';
import { getDepartments, getEmployees } from './api/employeeData';
import { CardGrid } from './components/CardGrid';
import { Filters } from './components/Filters';
import { ErrorBoundary, getErrorMessage } from 'react-error-boundary';
import { useFilters } from './hooks/useFilters';

function App() {
  const [fetchPromise] = useState<Promise<Employee[]>>(() => getEmployees());
  const [departmentsPromise] = useState<Promise<string[]>>(() => getDepartments());
  const {
    searchQuery,
    departmentFilter,
    sortOption,
    handleSearch,
    handleDepartmentFilter,
    handleSort,
  } = useFilters();

  return (
    <main className="mx-auto flex flex-col max-w-6xl items-center min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center">Employee Directory</h1>
      <section className="my-6 w-full p-4">
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <div className="text-center">{getErrorMessage(error)} </div>
          )}
        >
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
        </ErrorBoundary>
      </section>
      <section className="my-6 flex gap-x-16 gap-y-4 w-full p-4 justify-center">
        <ErrorBoundary
          fallbackRender={({ error }) => (
            <div className="text-center">{getErrorMessage(error)} </div>
          )}
        >
          <Suspense fallback={<div>Loading employees...</div>}>
            <CardGrid
              searchQuery={searchQuery}
              departmentFilter={departmentFilter}
              sortOption={sortOption}
              fetchPromise={fetchPromise}
            />
          </Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
}

export default App;
