 // Initial Data
        let employees = [
            { id: 101, name: "Alice Johnson", dept: "HR", status: "Present" },
            { id: 102, name: "Bob Smith", dept: "Engineering", status: "Present" },
            { id: 103, name: "Charlie Davis", dept: "Marketing", status: "Absent" }
        ];

        // DOM Elements
        const tableBody = document.getElementById('employee-table-body');
        const presentCountEl = document.getElementById('present-count');
        const absentCountEl = document.getElementById('absent-count');
        const nameInput = document.getElementById('new-name');
        const deptInput = document.getElementById('new-dept');
        const emptyMsg = document.getElementById('empty-msg');

        // Render Function
        function renderTable() {
            tableBody.innerHTML = ''; 
            let presentCount = 0;
            let absentCount = 0;

            if (employees.length === 0) {
                emptyMsg.style.display = 'block';
            } else {
                emptyMsg.style.display = 'none';
            }

            employees.forEach((emp, index) => {
                if(emp.status === 'Present') presentCount++;
                else absentCount++;

                const rowClass = emp.status === 'Absent' ? 'table-danger' : 'table-success';

                const row = `
                    <tr class="${rowClass}">
                        <td>${emp.id}</td>
                        <td class="fw-bold">${emp.name}</td>
                        <td><span class="badge bg-secondary">${emp.dept}</span></td>
                        <td>
                            <div class="btn-group" role="group">
                                <button type="button" 
                                    class="btn btn-sm btn-success ${emp.status === 'Present' ? 'active' : ''}" 
                                    onclick="updateStatus(${index}, 'Present')">Present</button>
                                <button type="button" 
                                    class="btn btn-sm btn-danger ${emp.status === 'Absent' ? 'active' : ''}" 
                                    onclick="updateStatus(${index}, 'Absent')">Absent</button>
                            </div>
                        </td>
                        <td class="text-center">
                            <button class="btn btn-sm btn-outline-danger" onclick="deleteEmployee(${index})" title="Delete Employee">
                                <i class="bi bi-trash3"></i> Delete
                            </button>
                        </td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });

            presentCountEl.innerText = presentCount;
            absentCountEl.innerText = absentCount;
        }

        // Update Status Function
        function updateStatus(index, newStatus) {
            if (employees[index].status !== newStatus) {
                employees[index].status = newStatus;
                renderTable();
            }
        }

        // Add Employee Function
        function addEmployee() {
            const name = nameInput.value.trim();
            const dept = deptInput.value;

            if (name === "" || dept === "") {
                alert("Please enter a Name and select a Department.");
                return;
            }

            // Find Max ID to prevent duplicates if rows are deleted
            const maxId = employees.length > 0 ? Math.max(...employees.map(e => e.id)) : 100;

            employees.push({
                id: maxId + 1,
                name: name,
                dept: dept,
                status: "Present"
            });

            nameInput.value = "";
            deptInput.value = "";
            renderTable();
        }

        // NEW FUNCTION: Delete Employee
        function deleteEmployee(index) {
            if(confirm("Are you sure you want to delete " + employees[index].name + "?")) {
                employees.splice(index, 1); // Remove 1 item at 'index'
                renderTable(); // Refresh the table
            }
        }

        // Initial Render
        renderTable();