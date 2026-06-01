import { useState } from "react";

export const useFilters = () => {
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

    return {
        searchQuery,
        departmentFilter,
        sortOption,
        handleSearch,
        handleDepartmentFilter,
        handleSort,
    };
};
