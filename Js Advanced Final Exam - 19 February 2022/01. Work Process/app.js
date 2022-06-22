function solve() {
    const input = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        birthDate: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
    };

    const tbody = document.getElementById('tbody');
    const salaryText = document.getElementById('sum');

    document.getElementById('add-worker').addEventListener('click', hire);

    let totalSalary = 0;

    function hire(event) {
        event.preventDefault();

        // read input fields
        const firstName = input.firstName.value;
        const lastName = input.lastName.value;
        const email = input.email.value;
        const birthDate = input.birthDate.value;
        const position = input.position.value;
        const salary = input.salary.value;

        // add salary to total salary
        totalSalary += Number(salary);

        // validate input
        if (!firstName || !lastName || !email || !birthDate || !position || !salary) {
            return;
        }

        // create tr item
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${birthDate}</td>
            <td>${position}</td>
            <td>${salary}</td>
            <td>
                <button class="fired">Fired</button>
                <button class="edit">Edit</button>
            </td>`;

        // add functionality to buttons
        const editBtn = tr.querySelector('.edit');
        editBtn.addEventListener('click', edit);
        const firedBtn = tr.querySelector('.fired');
        firedBtn.addEventListener('click', fired);

        // append to first list
        tbody.appendChild(tr);

        // add salary to total salary element;
        salaryText.textContent = totalSalary.toFixed(2);

        // clear input fields
        input.firstName.value = '';
        input.lastName.value = '';
        input.email.value = '';
        input.birthDate.value = '';
        input.position.value = '';
        input.salary.value = '';

        function edit() {
            // read list item content

            // populate input fields
            input.firstName.value = firstName;
            input.lastName.value = lastName;
            input.email.value = email;
            input.birthDate.value = birthDate;
            input.position.value = position;
            input.salary.value = salary;

            // remove tr item from table
            // tr.remove();
            tbody.removeChild(tr);

            // subtract salary from total salary
            totalSalary -= salary;

            // add salary to total salary element;
            salaryText.textContent = totalSalary.toFixed(2);
        }

        function fired() {
            // remove tr selected tr element from the table
            // tbody.removeChild(tr);
            tr.remove();

            // subtract salary from total salary
            totalSalary -= salary;

            // add salary to total salary element;
            salaryText.textContent = totalSalary.toFixed(2);
        }
    }
}
solve()