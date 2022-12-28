export function ResumesIndex(props) {
  return (
    <div>
      <h1>All Resumes</h1>
      {props.students.map((student) => (
        <div key={student.id}>
          <h2>{student.first_name}</h2>
          <img src={student.photo_url} />
          <button type="button" className="btn btn-primary" onClick={() => props.onSelectStudent(student)}>
            More Info
          </button>
        </div>
      ))}
    </div>
  );
}
