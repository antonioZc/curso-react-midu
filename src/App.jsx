import { use } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    id: 1,
    userName: "midudev",
    name: "Miguel Angel Durán",
    isFollowing: true,
  },
  {
    id: 2,
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: true,
  },
  {
    id: 3,
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: false,
  },
  {
    id: 4,
    userName: "TMchein",
    name: "Tomas",
    isFollowing: false,
  },
];
export function App() {
  return (
    <section className="App">
      {users.map(({ id, userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={id}
            userName={userName}
            name={name}
            initialIsFollowing={isFollowing}
          ></TwitterFollowCard>
        );
      })}
    </section>
  );
}
