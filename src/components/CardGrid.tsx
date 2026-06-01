import { use } from 'react';
import type { Employee } from '../types';
import { EmployeeCard } from './EmployeeCard';

interface CardGridProps {
  fetchPromise: Promise<Employee[]>;
  searchQuery: string;
  departmentFilter: string;
  sortOption: string;
}

export const CardGrid = ({
  fetchPromise,
  searchQuery,
  departmentFilter,
  sortOption,
}: CardGridProps) => {
  const employees = use(fetchPromise);

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(normalizedSearchQuery) ||
      employee.role.toLowerCase().includes(normalizedSearchQuery);
    const matchesDepartment = departmentFilter ? employee.department === departmentFilter : true;
    return matchesSearch && matchesDepartment;
  });

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    const startDateA = new Date(a.startDate).getTime();
    const startDateB = new Date(b.startDate).getTime();
    if (sortOption === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'name-desc') {
      return b.name.localeCompare(a.name);
    } else if (sortOption === 'startDate-asc') {
      return startDateA - startDateB;
    } else if (sortOption === 'startDate-desc') {
      return startDateB - startDateA;
    }
    return 0;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* TODO: remove */}
      {searchQuery} {departmentFilter} {sortOption}
      {!sortedEmployees.length
        ? 'No employees match your search criteria.'
        : sortedEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              role={employee.role}
              department={employee.department}
              startDate={employee.startDate}
              status={employee.status}
            ></EmployeeCard>
          ))}
    </div>
  );
};
