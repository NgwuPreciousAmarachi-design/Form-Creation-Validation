// 1. Initialize async function
async function fetchUserData() {

    // 2. Define API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Select data container
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 5. Clear loading message
        dataContainer.innerHTML = '';

        // 6. Create and append user list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 8. Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);