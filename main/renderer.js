const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/users'); // Replace with your API URL
        const data = await response.json();

        // Display data in your frontend
        const userList = document.getElementById('user-list');
        userList.innerHTML = data.map(user => `<li>${user.name} - ${user.email}</li>`).join('');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function on page load
document.addEventListener('DOMContentLoaded', fetchData);
