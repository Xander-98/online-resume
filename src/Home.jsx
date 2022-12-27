import { ResumesIndex } from "./ResumesIndex";

export function Home() {
  const students = [
    {
      id: 1,
      first_name: "Tester",
      last_name: "Tom",
      email: "testemail@tester.com",
      phone_number: "911",
      bio: "a short test bio to test the bio",
      linkedin: "linked",
      twitter: "tweeter",
      personal_website: "personal test",
      github: "http:github.com",
      photo: "test.image",
    },
    {
      id: 2,
      first_name: "Tested",
      last_name: "Tim",
      email: "test@testemail.com",
      phone_number: "119",
      bio: "a short test bio to test the bio whilst the bio is tested",
      linkedin: "linked",
      twitter: "tweetr",
      personal_website: "personal",
      github: "github",
      photo: "test",
    },
  ];
}

return (
  <div>
    <ResumesIndex students={students} />
  </div>
);
