export const getEmployees = async () => {
    // delay for debugging
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('/data/applicants.json');
    const data = await response.json();
    return data;
}