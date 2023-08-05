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
In addition to its compelling gameplay, Cyberpunk 2077 features a dynamic open-world environment that reacts to your actions and decisions. Whether you choose to forge alliances with various factions or go against the grain, the consequences of your choices ripple through the city, influencing the lives of its inhabitants and altering the game's outcome. The freedom to explore Night City at your own pace adds another layer of immersion, revealing hidden secrets, side quests, and unexpected encounters that make each playthrough unique.
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
          Image: "the-witcher-3-wild-hunt.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/c0i88t0Kacs",
          Slug: "the-witcher-3-wild-hunt",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "4a8fb386-aed6-4db9-998a-dccef6a5b5cd",
          Title: "Red Dead Redemption 2",
          Description: `<div>
<b>Red Dead Redemption 2: </b>
<span>
Red Dead Redemption 2, developed by Rockstar Games, is an action-adventure game set in the late 1800s. It tells the story of Arthur Morgan, a member of the Van der Linde gang, as he navigates the harsh realities of the wild west.
</span>
 </div>
 <div>
 <b>Red Dead Redemption 2: </b>
 <span>
   The game is highly regarded for its meticulously detailed and expansive open world, where players can interact with the environment and its inhabitants in ways that shape their character’s story. From hunting wildlife to robbing banks, the choices you make influence the world around you.
 </span>
 </div>
 <div>
 <b>Red Dead Redemption 2: </b>
 <span>
   Red Dead Redemption 2’s immersive narrative, detailed world-building, and dynamic gameplay mechanics have made it one of the most celebrated games of its generation.
 </span>
 </div>`,
          ReleaseDate: new Date("2018-10-26"),
          Producer: "Rockstar Games",
          OfficialLink: "https://www.rockstargames.com/reddeadredemption2/",
          Image: "red_dead_redemption_2.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/eaW0tYpxyp0",
          Slug: "red-dead-redemption-2",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "e5a2c6de-1f90-4435-85db-1d8bf3d28b2f",
          Title: "God of War",
          Description: `<div>
    <b>God of War: </b>
    <span>
      God of War, developed by Santa Monica Studio, is an action-adventure game that reimagines the iconic character Kratos in a new setting steeped in Norse mythology. In this installment, Kratos is not just a warrior but also a father, guiding his son Atreus through a hostile world.
    </span>
    </div>
    <div>
    <b>God of War: </b>
    <span>
      The game introduces a more intimate and narrative-driven experience, featuring combat mechanics that intertwine Kratos and Atreus’s abilities. The world is sprawling yet tightly designed, filled with secrets to uncover and mythological beasts to defeat.
    </span>
    </div>
    <div>
    <b>God of War: </b>
    <span>
      God of War is celebrated for its narrative depth, innovative combat, and stunning visual design. It has received critical acclaim, marking a successful new chapter in the God of War saga.
    </span>
    </div>`,
          ReleaseDate: new Date("2018-04-20"),
          Producer: "Santa Monica Studio",
          OfficialLink: "https://godofwar.playstation.com/",
          Image: "god-of-war-ragnarok.png",
          OfficialVideoLink: "https://www.youtube.com/embed/2Dlq_3HMBts",
          Slug: "god-of-war",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "d8bf7bb0-c56b-4596-b8df-9855d3b14d81",
          Title: "The Last of Us Part II",
          Description: `<div>
    <b>Last Of Us Part II: </b>
    <span>
      The Last Of Us Part II, developed by Naughty Dog, is an action-adventure game that continues the story of Ellie and Joel in a post-apocalyptic world. In this sequel, players primarily control Ellie, who confronts the devastating physical and emotional repercussions of her actions.
    </span>
    </div>
    <div>
    <b>Last Of Us Part II: </b>
    <span>
      With brutal combat systems and a captivating narrative, The Last Of Us Part II delves into the darkest corners of human nature. The game's detailed world and atmospheric storytelling combine to create a memorable gaming experience.
    </span>
    </div>
    <div>
    <b>Last Of Us Part II: </b>
    <span>
      The Last Of Us Part II is widely regarded as a landmark in video game storytelling, with a profound narrative that examines the morality of vengeance and the cycle of violence.
    </span>
    </div>`,
          ReleaseDate: new Date("2020-06-19"),
          Producer: "Naughty Dog",
          OfficialLink:
            "https://www.playstation.com/en-us/games/the-last-of-us-part-ii/",
          Image: "the-last-of-us-2.png",
          OfficialVideoLink: "https://www.youtube.com/embed/btmN-bWwv0A",
          Slug: "the-last-of-us-part-ii",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "aa441166-9398-4c76-8d30-b6335fbb88e2",
          Title: "Mass Effect: Legendary Edition",
          Description: `<div>
    <b>Mass Effect: Legendary Edition: </b>
    <span>
      Mass Effect: Legendary Edition is an iconic trilogy remastered by BioWare, offering an enriched role-playing experience. It invites players into the vast universe of Mass Effect, where they command the starship Normandy as Commander Shepard, a character whose actions and decisions have galaxy-wide implications.
    </span>
    </div>
    <div>
    <b>Mass Effect: Legendary Edition: </b>
    <span>
      The Legendary Edition features all the single-player content from the original trilogy and more than 40 DLCs. The game mechanics, character models, and visual effects have been improved, and the updated graphics breathe new life into the beloved universe. Players will engage in intense combat, explore numerous planets, and interact with a variety of characters each with their own stories and motives.
    </span>
    </div>
    <div>
    <b>Mass Effect: Legendary Edition: </b>
    <span>
      With its rich storytelling, comprehensive world-building, and complex characters, Mass Effect: Legendary Edition is praised for bringing together the epic saga in one cohesive experience. The trilogy’s depth and decision-based narrative make it one of the most acclaimed franchises in gaming history.
    </span>
    </div>`,
          ReleaseDate: new Date("2021-05-14"),
          Producer: "BioWare",
          OfficialLink:
            "https://www.ea.com/games/mass-effect/mass-effect-legendary-edition",
          Image: "mass-effect-lengendary-edition.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/J_gEzOZKyE4",
          Slug: "mass-effect-legendary-edition",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "62c12214-d242-4be1-a2a2-c1b7638d33a2",
          Title: "Dark Souls III",
          Description: `<div>
          <b>Dark Souls III: </b>
          <span>
            Dark Souls III, developed by FromSoftware, is an action RPG known for its challenging gameplay and deep lore. It invites players to traverse through haunting landscapes in a dark and twisted world teeming with fearsome beasts, devious traps, and hidden secrets.
          </span>
          </div>
          <div>
          <b>Dark Souls III: </b>
          <span>
            The game features intense combat mechanics that require strategic timing and precision. Players can customize their characters and weapons, offering a wide range of tactical options to tackle the formidable enemies and bosses.
          </span>
          </div>
          <div>
          <b>Dark Souls III: </b>
          <span>
            Dark Souls III has been praised for its atmospheric world design, deep lore, and unforgiving but rewarding combat. It stands as a worthy installment in the acclaimed Souls series.
          </span>
          </div>`,
          ReleaseDate: new Date("2016-04-12"),
          Producer: "FromSoftware",
          OfficialLink: "https://www.darksouls3.com/us/",
          Image: "dark-souls-3.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/_zDZYrIUgKE",
          Slug: "dark-souls-iii",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "cbe23b98-a436-4a8c-a244-5f546c7c1df6",
          Title: "The Elder Scrolls V: Skyrim",
          Description: `<div>
    <b>The Elder Scrolls V: Skyrim: </b>
    <span>
      The Elder Scrolls V: Skyrim, developed by Bethesda Game Studios, is an open-world action RPG that immerses players in the detailed and diverse province of Skyrim. As the Dragonborn, players undertake an epic journey to defeat Alduin, a dragon prophesied to destroy the world.
    </span>
    </div>
    <div>
    <b>The Elder Scrolls V: Skyrim: </b>
    <span>
      The game offers vast landscapes to explore, ranging from snowy mountains to lush forests, along with a deep leveling system that allows for extensive character customization. Players can choose to follow the main storyline or embark on numerous side quests, interacting with various factions and creatures along the way.
    </span>
    </div>
    <div>
    <b>The Elder Scrolls V: Skyrim: </b>
    <span>
      Skyrim's rich lore, freedom of exploration, and detailed world-building have earned it numerous awards and acclaim as one of the greatest video games of all time.
    </span>
    </div>`,
          ReleaseDate: new Date("2011-11-11"),
          Producer: "Bethesda Game Studios",
          OfficialLink: "https://elderscrolls.bethesda.net/en/skyrim",
          Image: "skyrim.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/JSRtYpNRoN0",
          Slug: "the-elder-scrolls-v-skyrim",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "fa823ddb-3b19-4eb9-b06e-1e11dc2b7a3a",
          Title: "Horizon Zero Dawn",
          Description: `<div>
    <b>Horizon Zero Dawn: </b>
    <span>
      Horizon Zero Dawn, developed by Guerrilla Games, is an action RPG set in a post-apocalyptic world where mechanized creatures dominate the wilds. Players control Aloy, a hunter and archer, as she ventures through a world teeming with ancient relics and futuristic technologies.
    </span>
    </div>
    <div>
    <b>Horizon Zero Dawn: </b>
    <span>
      The game blends traditional combat with stealth and tactics against a variety of robotic creatures. Its engaging story, filled with mystery and discovery, unfolds as players explore diverse landscapes and unearth the truth behind the fallen world.
    </span>
    </div>
    <div>
    <b>Horizon Zero Dawn: </b>
    <span>
      Horizon Zero Dawn has been praised for its unique setting, complex characters, and engaging combat mechanics. It offers a compelling vision of a future world that fuses the primitive and the technologically advanced.
    </span>
    </div>`,
          ReleaseDate: new Date("2017-02-28"),
          Producer: "Guerrilla Games",
          OfficialLink: "https://www.guerrilla-games.com/play/horizon",
          Image: "horizon-zero-dawn.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/wzx96gYA8ek",
          Slug: "horizon-zero-dawn",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "97a3cf71-0a4a-42c7-ba7c-b7853fb2c577",
          Title: "Ghost of Tsushima",
          Description: `<div>
          <b>Ghost of Tsushima: </b>
          <span>
            Ghost of Tsushima, developed by Sucker Punch Productions, is an action-adventure game set in the late 13th century. Players take on the role of Jin Sakai, one of the last samurai on Tsushima Island during the first Mongol invasion of Japan.
          </span>
          </div>
          <div>
          <b>Ghost of Tsushima: </b>
          <span>
            The game features an expansive open-world environment for players to explore, with diverse landscapes, rich culture, and detailed characters. Players can navigate the world with traditional samurai techniques or adopt the dishonorable tactics of the "Ghost" as they seek to reclaim their homeland.
          </span>
          </div>
          <div>
          <b>Ghost of Tsushima: </b>
          <span>
            With its stunning visual design, thoughtful storytelling, and engaging combat, Ghost of Tsushima provides a deeply immersive samurai experience. It has been praised for its beautifully crafted world and the depth of its protagonist's journey.
          </span>
          </div>`,
          ReleaseDate: new Date("2020-07-17"),
          Producer: "Sony Interactive Entertainment",
          OfficialLink:
            "https://www.suckerpunch.com/category/games/ghost-of-tsushima/",
          Image: "ghost-of-tsushima.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/Zbq7BnsQhrw",
          Slug: "ghost-of-tsushima",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "4d3fe717-cd81-45cc-a5e5-df7535c925df",
          Title: "Doom Eternal",
          Description: `<div>
          <b>Doom Eternal: </b>
          <span>
            Developed by id Software, Doom Eternal is a first-person shooter game that propels players into the role of the Doom Slayer, an ancient warrior who battles the demonic forces of Hell. The game features a pulse-pounding soundtrack and intense gameplay that is both challenging and rewarding.
          </span>
          </div>
          <div>
          <b>Doom Eternal: </b>
          <span>
            The game offers a range of destructive weapons and unique power-ups, challenging players to strategize their approach against an onslaught of demons. With its relentless pacing, hardcore combat, and intricate level design, Doom Eternal is a modern masterpiece of first-person shooter games.
          </span>
          </div>
          <div>
          <b>Doom Eternal: </b>
          <span>
            Doom Eternal is highly praised for its fast-paced action, detailed world-building, and refined gameplay mechanics. It builds upon the legacy of the Doom franchise, offering a challenging and exciting gaming experience that pushes the boundaries of the first-person shooter genre.
          </span>
          </div>`,
          ReleaseDate: new Date("2020-03-20"),
          Producer: "id Software",
          OfficialLink: "https://bethesda.net/game/doom",
          Image: "doom-eternal.png",
          OfficialVideoLink: "https://www.youtube.com/embed/2HOClc6Svg4",
          Slug: "doom-eternal",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "6b3dce55-6c4f-4891-a0d5-5f57236e119f",
          Title: "BioShock Infinite",
          Description: `<div>
          <b>BioShock Infinite: </b>
          <span>
            BioShock Infinite, developed by Irrational Games, is a first-person shooter with strong narrative and role-playing elements. Players assume the role of Booker DeWitt, a troubled detective tasked to rescue Elizabeth, a mysterious woman with powerful abilities, trapped in the floating city of Columbia.
          </span>
          </div>
          <div>
          <b>BioShock Infinite: </b>
          <span>
            The game's narrative is one of its strongest points, tackling themes of American exceptionalism, racism, and the nature of reality. With its intense combat, unique setting, and complex characters, BioShock Infinite offers a profound and riveting gaming experience.
          </span>
          </div>
          <div>
          <b>BioShock Infinite: </b>
          <span>
            BioShock Infinite is lauded for its compelling storytelling, immersive world-building, and dynamic gameplay mechanics. It is considered a standout entry in the BioShock series, offering a deeply engaging and thought-provoking gaming experience.
          </span>
          </div>`,
          ReleaseDate: new Date("2013-03-26"),
          Producer: "Irrational Games",
          OfficialLink: "https://www.bioshockinfinite.com/",
          Image: "bioshock-infinite.png",
          OfficialVideoLink: "https://www.youtube.com/embed/5gBVZj6ROV0",
          Slug: "bioshock-infinite",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "85c7a517-e9ac-4d9a-b5b4-90c9e33d2b0f",
          Title: "Hollow Knight",
          Description: `<div>
        <b>Hollow Knight: </b>
        <span>
          Developed by Team Cherry, Hollow Knight is an action-adventure game that plunges players into the role of the Hollow Knight, a small and mysterious warrior exploring the insect kingdom of Hallownest. The game combines beautiful hand-drawn art with challenging platforming and combat.
        </span>
        </div>
        <div>
        <b>Hollow Knight: </b>
        <span>
          The game offers a vast interconnected world for players to explore, filled with grueling enemies, challenging bosses, and intriguing lore. With its tough but fair difficulty curve, Hollow Knight offers a rewarding gaming experience for those willing to face its challenges.
        </span>
        </div>
        <div>
        <b>Hollow Knight: </b>
        <span>
          Hollow Knight is highly praised for its intricate world design, deep lore, and challenging gameplay mechanics. It's an engrossing adventure that draws players in with its haunting atmosphere and keeps them hooked with its rewarding challenges.
        </span>
        </div>`,
          ReleaseDate: new Date("2017-02-24"),
          Producer: "Team Cherry",
          OfficialLink: "https://hollowknight.com/",
          Image: "hollow-knight.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/UAO2urG23S4",
          Slug: "hollow-knight",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "a71b7f70-b2a4-4c95-91e5-0c4a6e6b0176",
          Title: "Celeste",
          Description: `<div>
          <b>Celeste: </b>
          <span>
            Celeste, developed by Matt Makes Games, is a precision platformer game that tells the story of Madeline, a young woman battling her inner demons as she ascends Celeste Mountain. The game is renowned for its tight controls, challenging gameplay, and sensitive portrayal of mental health issues.
          </span>
          </div>
          <div>
          <b>Celeste: </b>
          <span>
            The game challenges players with over 700 screens of hardcore platforming, each offering their own unique challenges. Despite its difficulty, Celeste is widely praised for its accessible design, offering optional assists that allow players of all skill levels to enjoy Madeline's journey.
          </span>
          </div>
          <div>
          <b>Celeste: </b>
          <span>
            Celeste stands out for its beautiful pixel art, uplifting story, and finely tuned gameplay. It's a challenging but rewarding journey that offers both an engaging platforming experience and a meaningful exploration of mental health.
          </span>
          </div>`,
          ReleaseDate: new Date("2018-01-25"),
          Producer: "Matt Makes Games",
          OfficialLink: "http://www.celestegame.com/",
          Image: "celeste.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/io6UQbURg3U",
          Slug: "celeste",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "fd0f7b82-a27e-4d91-a2f4-038b23939b38",
          Title: "Super Mario Odyssey",
          Description: `<div>
          <b>Super Mario Odyssey: </b>
          <span>
            Super Mario Odyssey is a platform game developed by Nintendo. Players embark on a captivating journey across various worlds as Mario, trying to rescue Princess Peach from Bowser. The game introduces the new mechanic of Mario's cap, Cappy, which can be thrown at objects or enemies to control them.
          </span>
          </div>
          <div>
          <b>Super Mario Odyssey: </b>
          <span>
            Super Mario Odyssey is acclaimed for its inventive level design, precise controls, and stunning visuals. Each world is unique and filled with secrets to discover, offering endless fun and challenge.
          </span>
          </div>
          <div>
          <b>Super Mario Odyssey: </b>
          <span>
            As a testament to its design and gameplay, Super Mario Odyssey is considered one of the best games in the Super Mario series, and one of the best games for the Nintendo Switch. It's a fantastic journey that offers hours of exploration, excitement, and enjoyment.
          </span>
          </div>`,
          ReleaseDate: new Date("2017-10-27"),
          Producer: "Nintendo",
          OfficialLink: "https://supermario.nintendo.com/",
          Image: "super-mario-odyssey.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/u6oPBIVjf8E",
          Slug: "super-mario-odyssey",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "f02f9874-461d-4e8c-a8c6-8d1c9a4d2dea",
          Title: "Resident Evil 2 Remake",
          Description: `<div>
          <b>Resident Evil 2 Remake: </b>
          <span>
            Resident Evil 2 Remake is a survival horror game developed and published by Capcom. The game revisits the horrifying events in Raccoon City, where players take on the roles of Leon S. Kennedy and Claire Redfield as they attempt to escape from a zombie apocalypse.
          </span>
          </div>
          <div>
          <b>Resident Evil 2 Remake: </b>
          <span>
            The game breathes new life into the classic horror title, boasting modernized gameplay mechanics, enhanced graphics, and expanded narratives. Its successful balance of tension, challenge, and fun has garnered widespread acclaim.
          </span>
          </div>
          <div>
          <b>Resident Evil 2 Remake: </b>
          <span>
            Resident Evil 2 Remake is a masterclass in horror game design, retaining the dread and intensity that made the original game iconic while updating the experience for the modern era. It's a terrifying, absorbing, and challenging game that's not for the faint of heart.
          </span>
          </div>`,
          ReleaseDate: new Date("2019-01-25"),
          Producer: "Capcom",
          OfficialLink: "http://www.residentevil2.com/",
          Image: "resident-evil-2-remake.png",
          OfficialVideoLink: "https://www.youtube.com/embed/bR68Z3-H0ig",
          Slug: "resident-evil-2-remake",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "de7029af-934d-4b3b-8e9d-507d81a2c176",
          Title: "Uncharted 4: A Thief's End",
          Description: `<div>
          <b>Uncharted 4: A Thief's End: </b>
          <span>
            Uncharted 4: A Thief's End, developed by Naughty Dog, is the thrilling conclusion to the saga of the charismatic treasure hunter, Nathan Drake. In this action-adventure game, players traverse through various locations around the globe in search of a fabled pirate treasure.
          </span>
          </div>
          <div>
          <b>Uncharted 4: A Thief's End: </b>
          <span>
            The game intricately melds exploration, puzzle-solving, and cinematic combat sequences. Switching between the engaging story of Nathan Drake and his companions, it captures players with its dynamic character interactions and visually stunning environments.
          </span>
          </div>
          <div>
          <b>Uncharted 4: A Thief's End: </b>
          <span>
            Uncharted 4: A Thief's End stands as a testament to the narrative-driven games, delivering an immersive experience through its detailed world, compelling story, and seamless gameplay. It remains an iconic title within the Uncharted series and the broader action-adventure genre.
          </span>
          </div>`,
          ReleaseDate: new Date("2016-05-10"),
          Producer: "Naughty Dog",
          OfficialLink:
            "https://www.playstation.com/en-us/games/uncharted-4-a-thiefs-end-ps4/",
          Image: "uncharted-4.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/y1Rx-Bbht5E",
          Slug: "uncharted-4-a-thiefs-end",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "475f57a2-ccda-4d46-8b2a-3895368a1528",
          Title: "Metal Gear Solid V: The Phantom Pain",
          Description: `<div>
        <b>Metal Gear Solid V: The Phantom Pain: </b>
        <span>
          Metal Gear Solid V: The Phantom Pain, developed by Kojima Productions, is an action-adventure stealth game and the final installment in the Metal Gear Solid saga. Players control Snake, a mercenary leader, in an open world environment.
        </span>
        </div>
        <div>
        <b>Metal Gear Solid V: The Phantom Pain: </b>
        <span>
          The game continues the series' tradition of tackling mature and complex themes, while offering players a wealth of gameplay options. Whether it's stealthily infiltrating enemy compounds or engaging in direct combat, players are given the freedom to approach missions in their preferred style.
        </span>
        </div>
        <div>
        <b>Metal Gear Solid V: The Phantom Pain: </b>
        <span>
          With its deep narrative, innovative stealth mechanics, and complex character development, Metal Gear Solid V: The Phantom Pain offers a rewarding and emotional conclusion to the series. It stands as a testament to the creativity and ambition of its creator, Hideo Kojima.
        </span>
        </div>`,
          ReleaseDate: new Date("2015-09-01"),
          Producer: "Kojima Productions",
          OfficialLink: "https://www.konami.com/mg/mgsv/",
          Image: "mgs-v-the-phantom-pain.png",
          OfficialVideoLink: "https://www.youtube.com/embed/03nUMw7japI",
          Slug: "metal-gear-solid-v-the-phantom-pain",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "ca1285df-b8bb-4a9a-86d7-96e65f74dd88",
          Title: "Star Wars Jedi: Fallen Order",
          Description: `<div>
          <b>Star Wars Jedi: Fallen Order: </b>
          <span>
            Developed by Respawn Entertainment, Star Wars Jedi: Fallen Order is an action-adventure game that puts players into the role of a Jedi Padawan who narrowly escaped the purge of Order 66 following Episode III - Revenge of the Sith.
          </span>
          </div>
          <div>
          <b>Star Wars Jedi: Fallen Order: </b>
          <span>
            Players must pick up the pieces of their shattered past to complete their training, develop new powerful Force abilities, and master the art of the iconic lightsaber - all while staying one step ahead of the Empire and its deadly Inquisitors.
          </span>
          </div>
          <div>
          <b>Star Wars Jedi: Fallen Order: </b>
          <span>
            Combining a cinematic, character-driven story with intense lightsaber combat and Force abilities, as well as the exploration of iconic Star Wars locales, Jedi: Fallen Order offers an immersive Star Wars gaming experience.
          </span>
          </div>`,
          ReleaseDate: new Date("2019-11-15"),
          Producer: "Respawn Entertainment",
          OfficialLink: "https://www.ea.com/games/starwars/jedi-fallen-order",
          Image: "star-wars-jedi-fallen-order.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/0I37wIScFJ0",
          Slug: "star-wars-jedi-fallen-order",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          GameId: "913a6f50-1bb6-4284-9861-e8466a7a07e1",
          Title: "Sekiro: Shadows Die Twice",
          Description: `<div>
          <b>Sekiro: Shadows Die Twice: </b>
          <span>
            From FromSoftware, the makers of the Dark Souls series, Sekiro: Shadows Die Twice is an action-adventure game that puts players in the role of a hardened warrior on a quest to rescue his kidnapped lord and seek revenge on his enemies.
          </span>
          </div>
          <div>
          <b>Sekiro: Shadows Die Twice: </b>
          <span>
            Players are armed with a katana and a variety of tools and skills that can be used in combat and exploration. The game is set in a beautiful, dark, and twisted world filled with towering castles, grotesque beasts, and complex vertical environments.
          </span>
          </div>
          <div>
          <b>Sekiro: Shadows Die Twice: </b>
          <span>
            With its challenging combat and intricate world design, Sekiro: Shadows Die Twice is a brutally rewarding game that offers a fresh and satisfying experience for players looking for a challenge.
          </span>
          </div>`,
          ReleaseDate: new Date("2019-03-22"),
          Producer: "FromSoftware",
          OfficialLink: "https://www.sekirothegame.com/",
          Image: "sekiro-shadows-die-twice.jpg",
          OfficialVideoLink: "https://www.youtube.com/embed/UGPknmiLxGo",
          Slug: "sekiro-shadows-die-twice",
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
