import { TwitterFeed } from "./TwitterFeed";

export function TwitterShow(props) {
  return (
    <div className="App">
      <h2>Twitter Feed </h2>
      <div className="container">
        {props.students.map((student) => (
          <TwitterFeed
            key={student.id}
            first_name={student.first_name}
            last_name={student.last_name}
            short_bio={student.short_bio}
            photo_url={student.photo_url}
            twitter_handle={student.twitter_handle}
          />
        ))}
      </div>
    </div>
  );
}
