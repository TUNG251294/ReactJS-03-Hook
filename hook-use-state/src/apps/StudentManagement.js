import { useState } from 'react';
import '../App.css'

function StudentManagement(){
    const[studentList, setStudentList] = useState([{name: 'Thanh Tung',email: 'tung@gmail',country: 'Viet Nam'}]);
    const[form, setForm] = useState({
        name: '',
        email: '',
        country: ''

    });
    const[isValid, setIsValid] = useState(false);

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setIsValid(!form.name || !form.email || !form.country);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn trình duyệt reload khi submit form
        if (isValid) {
            setStudentList([...studentList, form]);
            setForm({ name: '', email: '', country: '' });
        }
    };
    return(
        <div>
            <h1>Student List</h1>
                <label>Name: <input name = 'name' type='text' value={form.name} onChange = {handleChange}/></label>
                <label>Email: <input name = 'email' type='text' value={form.email} onChange = {handleChange}/></label>
                <label>Country: <input name = 'country' type='text' value={form.country} onChange = {handleChange}/></label>
                <button onClick={handleSubmit}>Submit</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default StudentManagement;