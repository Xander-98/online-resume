export function TwitterFeed() {
  return (
    <div className="twitter-feed">
      <h2>Twitter Feed</h2>
      <a class="twitter-timeline" href="https://twitter.com/TheRock?ref_src=twsrc%5Etfw">
        Tweets by TheRock
      </a>{" "}
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
  );
}
