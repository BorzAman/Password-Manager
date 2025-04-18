import React from 'react';

const page = () => {
  const students = [
    {
      name: "Aman Sayyad",
      course: "Computer Engineering",
      email: "amansayyad5050@gmail.com",
      github:"https://github.com/BorzAman?tab=overview&from=2025-04-01&to=2025-04-16"
    },
    {
      name: "Hitesh Pawar",
      course: "Computer Engineering",
      email: "pawarhitesh@example.com",
      github:"https://github.com/BorzAman?tab=overview&from=2025-04-01&to=2025-04-16"
    },
    {
      name: "Dipak Mote",
      course: "Computer Engineering",
      email: "dipakmote@example.com",
      github:"https://github.com/BorzAman?tab=overview&from=2025-04-01&to=2025-04-16"
    },
    {
      name: "Raj Narale",
      course: "Computer Engineering",
      email: "rajnarale@example.com",
      github:"https://github.com/BorzAman?tab=overview&from=2025-04-01&to=2025-04-16"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-cyan-200 to-cyan-200 mt-16 px-4 py-6 text-blue-900">
        
        <h1 className="text-3xl font-bold my-6 text-center">About Our Team</h1>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {students.map((student, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-blue-200 hover:shadow-lg transition">
              <div className='flex justify-between'>
                <h2 className="text-2xl font-semibold mb-2">{student.name}</h2>
                <a href={student.github}> <img src="/icon/git.png" width={40} alt="github"/> </a>
              </div>
              <p><strong>Course:</strong> {student.course}</p>
              <p><strong>Email:</strong> {student.email}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default page;
