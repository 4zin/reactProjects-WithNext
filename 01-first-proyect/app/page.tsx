import TwitterFollowCard from "./TwitterFollowCard";
import Footer from "./Footer";

const users = [
  {
    userName: "Horcus",
    name: "Salvador Matas Salas",
    initialIsFollowing: true,
  },
  {
    userName: "zeypherlol",
    name: "Esteban Cano",
    initialIsFollowing: false,
  },
  {
    userName: "duvanrode1o",
    name: "Duvan Rodelo",
    initialIsFollowing: true,
  },
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    initialIsFollowing: false,
  },
];
export default function Home() {
  return (
    <section className="App">
      {users.map(({ userName, name, initialIsFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={initialIsFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
      <Footer />
    </section>
  );
}
