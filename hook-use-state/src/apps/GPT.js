import React, { useState } from 'react';

function StudentManagement() {
  const [studentList, setStudentList] = useState([
    {name: 'Tung Huynh', phone: '0987654321', email: 'tunghuynh@gmail.com'}
  ]);
  const [form, setForm] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setIsValid(!form.name || !form.phone || !form.email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      if (selectedIndex > -1) {
        // Editing an existing student
        const updatedList = [...studentList];
        updatedList[selectedIndex] = form;
        setStudentList(updatedList);
      } else {
        // Adding a new student
        setStudentList([...studentList, form]);
      }
      // Reset form
      setForm({ name: '', phone: '', email: '' });
      setSelectedIndex(-1);
    }
  };

  const handleEdit = (student, index) => {
    setForm(student);
    setSelectedIndex(index);
  };

  const handleDelete = (index) => {
    const updatedList = studentList.filter((student, i) => i !== index);
    setStudentList(updatedList);
  };

  return (
    <div>
      <h1>Student List</h1>

      <form onSubmit={handleSubmit}>
        <h2>{selectedIndex > -1 ? 'Edit Student' : 'Add Student'}</h2>
        <label>
          Name:
          <input name="name" type="text" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input name="phone" type="text" value={form.phone} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input name="email" type="text" value={form.email} onChange={handleChange} />
        </label>
        <button type="submit" disabled={!isValid}>
          {selectedIndex > -1 ? 'Update' : 'Add'}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handleEdit(student, index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentManagement;
