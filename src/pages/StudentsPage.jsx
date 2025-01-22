import React, { useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchStudents = async () => {
    const querySnapshot = await getDocs(collection(db, 'students'));
    setStudents(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'students'), formData);
    fetchStudents();
    setModalOpen(false);
  };

  return (
    <div className="students-page">
      <button onClick={() => setModalOpen(true)}>Add Student</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Roll Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.section}</td>
              <td>{student.rollNumber}</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="modal">
          <form onSubmit={handleAddStudent}>
            {Array.from({ length: 12 }).map((_, i) => (
              <input
                key={i}
                placeholder={`Field ${i + 1}`}
                onChange={(e) => setFormData({ ...formData, [`field${i + 1}`]: e.target.value })}
                required
              />
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;