import { use } from 'react';

interface FiltersProps {
  departmentsPromise: Promise<string[]>;
  searchQuery: string;
  departmentFilter: string;
  sortOption: string;
  onSearch: (query: string) => void;
  onDepartmentFilter: (department: string) => void;
  onSort: (sortOption: string) => void;
}

export const Filters = ({
  departmentsPromise,
  searchQuery,
  departmentFilter,
  sortOption,
  onSearch,
  onDepartmentFilter,
  onSort,
}: FiltersProps) => {
  const departments = use(departmentsPromise);

  return (
    <div className="flex gap-x-8 gap-y-4 ">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search employees by name or role..."
        className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
        onChange={(e) => onSearch(e.target.value)}
        value={searchQuery}
      />
      {/* Department filter dropdown */}
      <select
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 "
        onChange={(e) => onDepartmentFilter(e.target.value)}
        value={departmentFilter}
      >
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
      {/* Sort Controls */}
      <select
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ml-auto w-40"
        onChange={(e) => onSort(e.target.value)}
        value={sortOption}
      >
        <option value="">Sort By</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="startDate-asc">Start Date (Oldest First)</option>
        <option value="startDate-desc">Start Date (Newest First)</option>
      </select>
    </div>
  );
};
