import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // pasar las props como objetos muchas veces puede ser mala practica
  const midudev = {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: false,
  };

  const holaMundo = {
    userName: "holamundo",
    name: "Hola mundo",
    isFollowing: false,
  };
  return (
    <>
      <TwitterFollowCard {...midudev} />
      <TwitterFollowCard {...holaMundo} />
    </>
  );
}
