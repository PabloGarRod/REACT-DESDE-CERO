import { useState } from "react";
import "./App.css";

import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    {
      username: "mondongona__",
      name: "Mondongo",
      isFollowing: true,
    },

    { username: "matfos_", name: "Matfos", isFollowing: false },
    {
      username: "policiometro",
      name: "El Policiometro",
      isFollowing: true,
    },
    {
      username: "lordolordor",
      name: "Lordo",
      isFollowing: true,
    },
    {
      username: "infusionlogica",
      name: "Infusion ideologica",
      isFollowing: false,
    },
  ];
  return (
    <section className="App">
      {users.map(({ username, isFollowing, name }) => {
        return (
          <TwitterFollowCard
            key={username}
            username={username}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
