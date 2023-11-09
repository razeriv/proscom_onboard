export const useDepartmentFilter = () => useState('selected-department', () => new Object(
    {
        department: departments[0],
    }
))
