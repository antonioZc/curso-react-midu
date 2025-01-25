import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <>
      <TwitterFollowCard
        userName="midudev"
        name="Miguel Angel Duran"
        initialIsFollowing={true}
      />
      <TwitterFollowCard
        userName="holamundo"
        name="Hola Mundo"
        initialIsFollowing={false}
      />
    </>
  );
}
