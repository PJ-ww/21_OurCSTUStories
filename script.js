const form = document.getElementById('guestForm');
const guestTable = document.getElementById('guestTable').getElementsByTagName('tbody')[0];
const otherRadio = document.getElementById('other');
const otherGenderInput = document.getElementById('other_gender');

otherRadio.addEventListener('change', () => {
    otherGenderInput.disabled = !otherRadio.checked;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const studentId = document.getElementById('id').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    
    if (!/^\d{10}$/.test(studentId)) {
        alert("กรุณาใส่รหัสนักศึกษาเป็นตัวเลข 10 หลัก");
        return;
    }

    if (gender === 'อื่นๆ') {
        gender = otherGenderInput.value || 'ระบุไม่ครบ';
    }
    const faculty = document.getElementById('faculty').value;

    const newRow = guestTable.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${studentId}</td>
        <td>${gender}</td>
        <td>${faculty}</td>
    `;

    form.reset();
    otherGenderInput.disabled = true;
});
