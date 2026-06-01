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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {employees.map((employee) => (
        <EmployeeCard
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
