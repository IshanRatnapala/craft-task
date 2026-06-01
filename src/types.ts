export interface Employee {
    id: number;
    name: string;
    role: string;
    department: string;
    status: EmployeeStatus;
    startDate: string;
    skills: string[];
    avatar: string;
}

export type EmployeeStatus = 'Active' | 'On Leave' | 'Probation';