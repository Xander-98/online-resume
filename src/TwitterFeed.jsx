import "./TwitterFeed.css";
import { Home } from "./Home";

export function TwitterFeed(props) {
  return (
    <div className="twitter-feed">
      <div className="card">
        <div key={props.id}></div>
        <img src={props.photo_url} className="profile-photo"></img>
        <h3>
          {props.first_name} {props.last_name}
        </h3>
        <div className="bio">
          <p>{props.short_bio}</p>
        </div>
        <div className="twitter-container">
          <div className="but-container">
            <button>Twitter</button>
            <button>LinkedIn</button>
            <button>Email</button>
          </div>

          {props.twitter_handle ? (
            <div className="tweetfeed">
              <a
                className="twitter-timeline"
                href={props.twitter_handle}
                tweet-limit="Range: 1-5"
                data-height="200"
                data-width="300"
                data-chrome="nofooter"
                data-border-color="#a80000"
              ></a>
            </div>
          ) : (
            <p>No Twitter Feed</p>
          )}
        </div>
      </div>
    </div>
  );
}
