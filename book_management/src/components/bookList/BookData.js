

export const fetchbooks = async () => {
    try {
        const response = await fetch('http://localhost:8080/booklist');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error; // or return an empty array: return [];
    }
};