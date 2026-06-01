import type { EmployeeStatus } from '../types';

interface EmployeeCardProps {
  name: string;
  role: string;
  department: string;
  startDate: string;
  status: EmployeeStatus;
}

export const EmployeeCard = ({ name, role, department, startDate, status }: EmployeeCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 border rounded-lg w-48">
      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
        PS
      </div>
      <div className="text-center">
        <p className="font-semibold">{name}</p>
        <p className="text-sm font-bold text-gray-500">{role}</p>
        <p className="text-sm text-gray-500">{department}</p>
        <p className="text-sm text-gray-500">{startDate}</p>
        {/* TODO: make color dynamic */}
        <div className="inline-block px-2 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full mt-2">
          {status}
        </div>
      </div>
    </div>
  );
};
