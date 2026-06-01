import applicants from '../data/applicants.json';
import type { Employee } from '../types';

export const getEmployees = async (): Promise<Employee[]> => {
    return applicants.map((employee) => ({
        ...employee,
        status: employee.status as Employee['status'],
    }));
}

export const getDepartments = async () => {
    const employees = await getEmployees();
    const departments = new Set<string>();
    employees.forEach((employee: Employee) => {
        departments.add(employee.department);
    });
    return Array.from(departments);
}