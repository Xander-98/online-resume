import "./TwitterFeed.css";

export function TwitterFeed() {
  return (
    <div className="twitter-feed">
      <h2>Twitter Feed</h2>
      <div className="container">
        <div className="card">
          <img
            className="profile-photo"
            src="https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_400x400.jpeg"
          />
          <h2>Dwayne The Rock</h2>
          <p>
            Arrr me hearties! Make traditional Latin walk the plank and opt for pirate lorem ipsum for your next high
            seas design adventure.
          </p>
          <a className="Twitter-profile" href="https://twitter.com/TheRock" />
          <a
            className="twitter-timeline"
            href="https://twitter.com/TheRock?ref_src=twsrc%5Etfw"
            tweet-limit="Range: 1-5"
            data-height="200"
            data-width="300"
            data-chrome="nofooter"
            data-border-color="#a80000"
          >
            Tweets by TheRock
          </a>{" "}
          <div className="but-container">
            <button>Twitter</button>
            <button>LinkedIn</button>
            <button>Email</button>
          </div>
        </div>

        <div className="card">
          <img
            className="profile-photo"
            src="https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_400x400.jpeg"
          />
          <h2>Dwayne The Rock</h2>
          <p>
            Arrr me hearties! Make traditional Latin walk the plank and opt for pirate lorem ipsum for your next high
            seas design adventure.
          </p>
          <a className="Twitter-profile" href="https://twitter.com/TheRock" />
          <a
            className="twitter-timeline"
            href="https://twitter.com/TheRock?ref_src=twsrc%5Etfw"
            tweet-limit="Range: 1-5"
            data-height="200"
            data-width="300"
            data-chrome="nofooter"
            data-border-color="#a80000"
          >
            Tweets by TheRock
          </a>{" "}
          <div className="but-container">
            <button>Twitter</button>
            <button>LinkedIn</button>
            <button>Email</button>
          </div>
        </div>

        <div className="card">
          <img
            className="profile-photo"
            src="https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_400x400.jpeg"
          />
          <h2>Dwayne The Rock</h2>
          <p>
            Arrr me hearties! Make traditional Latin walk the plank and opt for pirate lorem ipsum for your next high
            seas design adventure.
          </p>
          <a className="Twitter-profile" href="https://twitter.com/TheRock" />
          <a
            className="twitter-timeline"
            href="https://twitter.com/TheRock?ref_src=twsrc%5Etfw"
            tweet-limit="Range: 1-5"
            data-height="200"
            data-width="300"
            data-chrome="nofooter"
            data-border-color="#a80000"
          >
            Tweets by TheRock
          </a>{" "}
          <div className="but-container">
            <button>Twitter</button>
            <button>LinkedIn</button>
            <button>Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}
