async function fetchData() {
    try {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchData);
