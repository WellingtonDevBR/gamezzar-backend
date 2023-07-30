"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Game",
      [
        {
          GameId: "8f33e16b-8747-4f1b-9a22-8a956d8d9a01",
          Title: "Assassin's Creed Valhalla",
          Description: `<div>
        <b>Assassin's Creed Valhalla: </b>
        <span>
          Assassin's Creed Valhalla, a brainchild of Ubisoft, is an action-adventure game that lets players traverse the Viking Age as a legendary Norse warrior. The game takes you on a journey through a beautifully open world where you can shape your character's story through warfare, political strategy, and cultural growth. The world of Valhalla is rich with traditional Norse folklore, brimming with the raw and primal atmosphere of the time.
        </span>
        </div>
        <div>
        <b>Assassin's Creed Valhalla: </b>
        <span>
          With a gripping narrative, Valhalla plunges the player into the heart of the Viking era. Engage in visceral combat, build and manage your own settlement, and see how your choices impact your clan and future. Navigating the volatile relationships of your fellow clansmen and political alliances promises a deep, complex storyline that is under your control. 
        </span>
        </div>
        <div>
        <b>Assassin's Creed Valhalla: </b>
        <span>
          As a gameplay experience, Assassin's Creed Valhalla shines in creating a sense of authenticity. Each battle is a chance to prove your worth as a Norse leader. The expansive open world is at once breathtaking and intriguing, teeming with life and secrets. The experience of being a Viking chieftain in Assassin's Creed Valhalla is full of conquest, exploration, and a quest for glory.
        </span>
        </div>`,
          ReleaseDate: new Date("2020-11-10"),
          Producer: "Ubisoft",
          OfficialLink:
            "https://assassinscreed.ubisoft.com/game/en-us/valhalla",
          Image: "ac-valhalla.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/ssrNcwxALS4",
          Slug: "assassins-creed-valhalla",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "286e79c1-b60c-4d5c-ba4c-9a60f89e6252",
          Title: "The Legend of Zelda: Breath of the Wild",
          Description: `<div>
        <b>The Legend of Zelda: Breath of the Wild: </b>
        <span>
          The Legend of Zelda: Breath of the Wild is an adventure game brought to you by Nintendo. Embark on an epic journey across the kingdom of Hyrule, solve intricate puzzles, and defeat formidable enemies to liberate Princess Zelda. The game takes the iconic series to new heights with an unprecedented level of freedom and control. 
        </span>
        </div>
        <div>
        <b>The Legend of Zelda: Breath of the Wild: </b>
        <span>
          The game encapsulates the essence of adventure, presenting a breathtaking open world waiting to be explored. With Breath of the Wild, the narrative takes a pivotal role, taking players on an immersive journey filled with captivating characters, ancient lore, and the eternal struggle between good and evil. The tale of heroism is masterfully intertwined with challenging gameplay.
        </span>
        </div>
        <div>
        <b>The Legend of Zelda: Breath of the Wild: </b>
        <span>
          The gameplay of Breath of the Wild sets a new standard for open-world games. A vast array of weapons, abilities, and paths to explore ensures every player has a unique experience. Each discovery and every strategic decision contributes to the overarching narrative, creating an incredibly immersive experience that captivates players for hours on end.
        </span>
        </div>`,
          ReleaseDate: new Date("2017-03-03"),
          Producer: "Nintendo",
          OfficialLink: "https://www.zelda.com/breath-of-the-wild/",
          Image: "zelda-breath-of-the-wild.svg",
          OfficialVideoLink: "https://www.youtube.com/embed/zw47_q9wbBE",
          Slug: "the-legend-of-zelda-breath-of-the-wild",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "2bb6349c-c9a0-47ef-9c6d-1d8e5b274ae5",
          Title: "FIFA 22",
          Description: `<div>
        <b>FIFA 22: </b>
        <span>
          FIFA 22, the latest installment in the revered football game series by EA Sports, offers the next step in the evolution of virtual football. With enhanced gameplay mechanics, state-of-the-art graphics, and innovative game modes, players are invited to experience the rush of professional football like never before. 
        </span>
        </div>
        <div>
        <b>FIFA 22: </b>
        <span>
          FIFA 22 shines in its authentic representation of the global sport. Experience the tension of the professional football pitch, master the new gameplay mechanics and immerse yourself in the unmatched atmosphere of the most competitive football leagues. The game offers a range of modes that cater to different play styles and preferences, including career mode, ultimate team, and Volta football. 
        </span>
        </div>
        <div>
        <b>FIFA 22: </b>
        <span>
          FIFA 22's gameplay is a significant upgrade from its predecessors, delivering a more immersive football experience. The cutting-edge HyperMotion technology offers realistic player movements and AI decision-making, bringing each match to life. Whether you're a seasoned player or new to the series, FIFA 22 provides a challenging, rewarding, and most importantly, fun football gaming experience.
        </span>
        </div>`,
          ReleaseDate: new Date("2021-10-01"),
          Producer: "EA Sports",
          OfficialLink: "https://www.ea.com/games/fifa/fifa-22",
          Image: "fifa-22.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/o1igaMv46SY",
          Slug: "fifa-22",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "57c76e23-3a06-41c5-b8ad-48f0fb1e8de7",
          Title: "Cyberpunk 2077",
          Description: `<div>
        <b>Cyberpunk 2077: </b>
        <span>
          Cyberpunk 2077, developed by the renowned CD Projekt Red, is a role-playing game that drops you into the dystopian, neon-lit world of Night City. The future is now, and every choice you make shapes the story around you. This game leverages advanced graphics and RPG mechanics to create an immersive experience, characterized by intricate world-building, rich narrative, and complex characters.
        </span>
        </div>
        <div>
        <b>Cyberpunk 2077: </b>
        <span>
          Night City, the game's setting, is a sprawling metropolis of the future, filled with human-like robots, rampant corporate power, and high-tech weaponry. As V, a highly skilled mercenary, you navigate this complex world, undertaking dangerous jobs and dealing with powerful entities. The game offers deep character customization, allowing you to shape V's backstory, skills, and appearance to suit your playstyle.
        </span>
        </div>
        <div>
        <b>Cyberpunk 2077: </b>
        <span>
        </span>
        </div>`,
          ReleaseDate: new Date("2020-12-10"),
          Producer: "CD Projekt Red",
          OfficialLink: "https://www.cyberpunk.net/",
          Image: "cyberpunk-2077.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/qIcTM8WXFjk",
          Slug: "cyberpunk-2077",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "a730d241-8453-43d1-8f0f-8533a10317e0",
          Title: "Super Smash Bros. Ultimate",
          Description: `<div>
        <b>Super Smash Bros. Ultimate: </b>
        <span>
          Super Smash Bros. Ultimate, developed by Nintendo, is a fast-paced fighting game where players can battle with their favorite characters from various game franchises. The title "Ultimate" is indeed apt, as the game boasts a colossal roster of characters, each with their unique abilities and combat styles. 
        </span>
        </div>
        <div>
        <b>Super Smash Bros. Ultimate: </b>
        <span>
          The gameplay in Super Smash Bros. Ultimate is characterized by its dynamic, multi-platform stages and chaotic yet strategic combat. Whether you're an avid gamer or a casual player, the game's range of difficulty levels and play modes offers something for everyone. The goal isn't just to deplete an opponent's health bar but to knock them off the stage, bringing a unique twist to the traditional fighting game format.
        </span>
        </div>
        <div>
        <b>Super Smash Bros. Ultimate: </b>
        <span>
          The game also features an extensive single-player campaign and a variety of multiplayer modes, both online and offline. From the frantic fun of eight-player battles to the strategic intensity of 1v1 fights, Super Smash Bros. Ultimate is a celebration of gaming history that brings together some of the most iconic characters in an epic clash.
        </span>
        </div>`,
          ReleaseDate: new Date("2018-12-07"),
          Producer: "Nintendo",
          OfficialLink: "https://www.smashbros.com/",
          Image: "super-smash-bros-ultimate.jpeg",
          OfficialVideoLink: "https://www.youtube.com/embed/WShCN-AYHqA",
          Slug: "super-smash-bros-ultimate",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "9bc1e70a-2c3e-4963-9b97-0c6bfa92b014",
          Title: "Call of Duty: Warzone",
          Description: `<div>
        <b>Call of Duty: Warzone: </b>
        <span>
          Call of Duty: Warzone is a captivating, free-to-play battle royale game from Activision that delivers an intense gaming experience. Set in the expansive and gritty universe of Call of Duty, Warzone thrusts players onto a vast, battle-ridden map with up to 150 other players, each with a singular objective: survival.
        </span>
        </div>
        <div>
        <b>Call of Duty: Warzone: </b>
        <span>
          Warzone goes beyond the typical battle royale framework, offering a blend of strategic gameplay, intricate map design, and high-stakes combat that's characteristic of the Call of Duty series. Players parachute onto the map with minimal equipment and must scavenge for weapons, ammo, and armor, all while navigating the ever-shrinking safe zone and fighting off enemy players.
        </span>
        </div>
        <div>
        <b>Call of Duty: Warzone: </b>
        <span>
          The game also features unique elements such as the ability to complete contracts for in-game rewards, the Gulag where eliminated players have a chance to fight for re-entry to the map, and Plunder mode where the objective is to collect as much cash as possible. With frequent updates and the introduction of new content, Call of Duty: Warzone continues to keep players on their toes, maintaining an immersive and thrilling gaming experience.
        </span>
        </div>`,
          ReleaseDate: new Date("2020-03-10"),
          Producer: "Activision",
          OfficialLink: "https://www.callofduty.com/warzone",
          Image: "call-of-duty-warzone.png",
          OfficialVideoLink: "https://www.youtube.com/embed/0E44DClsX5Q",
          Slug: "call-of-duty-warzone",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "b16d4877-605a-4c34-8911-94f7a8f47462",
          Title: "Animal Crossing: New Horizons",
          Description: `<div>
        <b>Animal Crossing: New Horizons: </b>
        <span>
          Animal Crossing: New Horizons, developed by Nintendo, is an enchanting life simulation game that invites players to live out their island paradise dreams. At the heart of the game is a unique concept: you start on a deserted island, and it's up to you to transform it into your personal sanctuary.
        </span>
        </div>
        <div>
        <b>Animal Crossing: New Horizons: </b>
        <span>
          In this delightful and relaxing simulation, players can craft tools, design their home, and decorate their island to their heart's content. You can gather resources, plant trees, fish, catch bugs, dig up fossils, and even design your own clothing. The game operates in real-time, mirroring the seasons and time of day in the real world, which directly affects the game dynamics and the activities available to you.
        </span>
        </div>
        <div>
        <b>Animal Crossing: New Horizons: </b>
        <span>
          Interactions with the charming anthropomorphic animals that visit or reside on your island add depth to the gameplay. They each have unique personalities and bring delightful surprises every day. With its open-ended gameplay, tranquil soundtrack, and the joy of creating and managing your own island paradise, Animal Crossing: New Horizons offers an immersive and therapeutic escape from reality.
        </span>
        </div>`,
          ReleaseDate: new Date("2020-03-20"),
          Producer: "Nintendo",
          OfficialLink: "https://www.animal-crossing.com/new-horizons/",
          Image: "animal-crossing-new-horizons.png",
          OfficialVideoLink: "https://www.youtube.com/embed/_3YNL0OWio0",
          Slug: "animal-crossing-new-horizons",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "1a4da6f9-2db2-4022-906a-cfc3fe18b5d9",
          Title: "Grand Theft Auto V",
          Description: `<div>
        <b>Grand Theft Auto V: </b>
        <span>
          Grand Theft Auto V, developed by Rockstar Games, is a thrilling action-adventure game that plunges players into the criminal underworld of Los Santos, a sun-soaked metropolis brimming with self-help gurus, starlets, and fading celebrities. In this vast, open-world game, players are granted an unprecedented degree of freedom in pursuing their own version of the American Dream.
        </span>
        </div>
        <div>
        <b>Grand Theft Auto V: </b>
        <span>
          The game allows players to seamlessly switch between the lives of three uniquely flawed protagonists—Michael, a retired bank robber dealing with a mid-life crisis; Franklin, a repo man trying to escape his past; and Trevor, a volatile criminal seeking his next big score. The game's narrative weaves the characters' stories together, as they carry out a series of daring heists across Los Santos.
        </span>
        </div>
        <div>
        <b>Grand Theft Auto V: </b>
        <span>
          Besides its story mode, Grand Theft Auto V also offers an expansive and dynamic multiplayer world in the form of Grand Theft Auto Online. Here, players can collaborate or compete in missions, races, and more, all while building their criminal empire. The engaging storyline, open-ended gameplay, satirical take on contemporary culture, and stunning graphics make Grand Theft Auto V a standout title that continues to draw in players even years after its release.
        </span>
        </div>`,
          ReleaseDate: new Date("2013-09-17"),
          Producer: "Rockstar Games",
          OfficialLink: "https://www.rockstargames.com/V/",
          Image: "grand-theft-auto-v.png",
          OfficialVideoLink: "https://www.youtube.com/embed/QkkoHAzjnUs",
          Slug: "grand-theft-auto-v",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "3b8a952c-fc7c-41a4-8d4d-9faff0847278",
          Title: "Minecraft",
          Description: `<div>
        <b>Minecraft: </b>
        <span>
          Minecraft, developed by Mojang Studios, is an open-ended sandbox game that allows players to express their creativity in a blocky, procedurally generated 3D world. This pioneering game provides endless possibilities as players craft their surroundings, dig mines, fight off nocturnal monsters, and gather resources to build virtually anything they can envision.
        </span>
        </div>
        <div>
        <b>Minecraft: </b>
        <span>
          The game has two primary modes. In Survival mode, players must gather all their own building materials and food. They'll encounter creatures, known as mobs, and may lose health or even experience 'death' in the game. In contrast, Creative mode offers unlimited resources for players, allowing them to construct whatever they wish without concern for survival mechanics. This has led to some players creating incredibly complex and artistic structures, from sprawling cities to replica landmarks.
        </span>
        </div>
        <div>
        <b>Minecraft: </b>
        <span>
          Minecraft also offers a multiplayer mode where players can join others on servers and participate in various types of gameplay, from cooperative building projects to player-vs-player combat. The game also features a Redstone system that allows for complex mechanical and electrical constructions, further expanding the creative possibilities. Despite its simple graphics, Minecraft's blend of exploration, creativity, and survival has made it one of the most influential and enduring games of its generation.
        </span>
        </div>`,
          ReleaseDate: new Date("2011-11-18"),
          Producer: "Mojang Studios",
          OfficialLink: "https://www.minecraft.net/",
          Image: "minecraft.png",
          OfficialVideoLink: "https://www.youtube.com/embed/MmB9b5njVbA",
          Slug: "minecraft",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "e8ff3d07-6743-4b10-af94-25109f5a0a2e",
          Title: "The Witcher 3: Wild Hunt",
          Description: `<div>
        <b>The Witcher 3: Wild Hunt: </b>
        <span>
          The Witcher 3: Wild Hunt, produced by CD Projekt Red, is a critically acclaimed role-playing game that immerses players in the role of Geralt of Rivia, a seasoned monster hunter in a fantasy world. The game blends elements of dark fantasy with a mature and intricate narrative, providing an expansive open world teeming with quests, beasts, and dynamic non-playable characters (NPCs).
        </span>
        </div>
        <div>
        <b>The Witcher 3: Wild Hunt: </b>
        <span>
          One of the game's standout features is its branching storyline. Every choice players make, from dialogue options to quest paths, can significantly impact the world around them and influence the overall story. This complexity extends to the game's combat system, which combines real-time action with strategic preparation. Geralt can use a variety of weapons and magic, as well as craft potions and bombs to gain an edge in battles against a wide array of supernatural creatures.
        </span>
        </div>
        <div>
        <b>The Witcher 3: Wild Hunt: </b>
        <span>
          The richly detailed world of The Witcher 3, from its stunning landscapes to its densely populated cities, provides a sense of depth and realism rarely seen in video games. It invites players to not only follow the main storyline but also to explore its vast world, delve into side quests, and uncover the lore behind the Northern Kingdoms. With its engaging narrative, complex characters, and deep role-playing mechanics, The Witcher 3: Wild Hunt remains one of the most captivating RPG experiences available.
        </span>
        </div>`,
          ReleaseDate: new Date("2015-05-19"),
          Producer: "CD Projekt Red",
          OfficialLink: "https://thewitcher.com/en/witcher3",
          Image: "the-witcher-3-wild-hunt.svg",
          OfficialVideoLink: "https://www.youtube.com/embed/c0i88t0Kacs",
          Slug: "the-witcher-3-wild-hunt",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Game", null, {});
  },
};
