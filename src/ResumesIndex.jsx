export function ResumesIndex(props) {
  return (
    <div>
      <h1>All Resumes</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>{student.first_name}</h2>
          <img src={student.photo} />
          <p>Bio: {student.bio}</p>
        </div>
      ))}
    </div>
  );
}
