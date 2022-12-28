export function ResumesShow(props) {
  return (
    <div>
      <h1>Student information</h1>
      <p>Name: {props.student.last_name}</p>
      <p>Email: {props.student.email}</p>
      <p>Phone Number: {props.student.phone_number}</p>
      <p>Bio: {props.student.short_bio}</p>
      {/* <h2>Education</h2>
      <p>Start Date {props.student.education.start_date} </p>
      <p>End Date {props.student.education.end_date} </p>
      <p>Degree {props.student.education.degree} </p>
      <p>Details {props.student.education.details} </p> */}
    </div>
  );
}
