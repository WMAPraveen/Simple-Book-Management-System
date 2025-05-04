export const updateBook = async (book) => {
    const response = await fetch(`http://localhost:8080/updatebook`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }