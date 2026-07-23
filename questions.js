const questions = [
  // --- MOBS & CREATURES ---
  {
    question: "What special rainbow effect happens when you name a sheep 'jeb_' using a name tag?",
    answer: "The sheep's wool continuously cycles through all rainbow colors!"
  },
  {
    question: "What happens when you name a mob 'Dinnerbone' or 'Grumm' using a name tag?",
    answer: "The mob turns upside down!"
  },
  {
    question: "Which hostile mob drops Ender Pearls when defeated?",
    answer: "Enderman."
  },
  {
    question: "What item do you feed a tame wolf to heal its health?",
    answer: "Any type of raw or cooked meat."
  },
  {
    question: "What happens to a Creeper when it is struck by lightning?",
    answer: "It turns into a Charged Creeper, creating a much larger explosion."
  },
  {
    question: "Which passive mob can be bred using Seagrass?",
    answer: "Turtles."
  },
  {
    question: "What food item do you use to tame an Ocelot or Cat?",
    answer: "Raw Cod or Raw Salmon."
  },
  {
    question: "What neutral mob becomes hostile if you look directly at its eyes?",
    answer: "Enderman."
  },
  {
    question: "Which water-dwelling mob drops Scutes used to craft Turtle Shell helmets?",
    answer: "Baby Turtles (when they grow into adults)."
  },
  {
    question: "What mob flies in the sky at night if a player hasn't slept in 3 or more days?",
    answer: "Phantom."
  },
  {
    question: "What item is dropped by a Shulker in the End City?",
    answer: "Shulker Shell."
  },
  {
    question: "What hostile mob is summoned by an Evoker during raids or in Woodland Mansions?",
    answer: "Vex."
  },
  {
    question: "Which mob burns in sunlight unless wearing a helmet or standing in water?",
    answer: "Zombies and Skeletons."
  },
  {
    question: "What block or item frightens Creepers away?",
    answer: "Cats or Ocelots."
  },
  {
    question: "What mob transforms into a Drowned if kept underwater for too long?",
    answer: "Zombie."
  },
  {
    question: "What mob drops Ghast Tears when slain?",
    answer: "Ghast."
  },
  {
    question: "Which amphibian mob can eat small Magma Cubes to drop Froglight blocks?",
    answer: "Frog."
  },
  {
    question: "What hostile boss mob is built manually using Soul Sand/Soil and 3 Wither Skeleton Skulls?",
    answer: "The Wither."
  },
  {
    question: "What item calms Piglins and prevents them from attacking you in the Nether?",
    answer: "Wearing any piece of Gold Armor."
  },
  {
    question: "What passive mob can carry chests to hold extra items for the player?",
    answer: "Donkeys, Mules, Llamas, and Trader Llamas."
  },
  {
    question: "What item do Axolotls love and follow when held by a player?",
    answer: "A Bucket of Tropical Fish."
  },
  {
    question: "What mob drops a Totem of Undying when killed?",
    answer: "Evoker."
  },
  {
    question: "Which giant, blind mob spawns in the Deep Dark biome and reacts to vibrations?",
    answer: "The Warden."
  },
  {
    question: "What mob leads Wandering Traders around on leashes?",
    answer: "Trader Llamas."
  },
  {
    question: "What color carpet can you put on a Llama to give it a blue/green color scheme?",
    answer: "Cyan Carpet."
  },
  {
    question: "What mob spawns in Trial Chambers and shoots wind charges?",
    answer: "The Breeze."
  },
  {
    question: "What mob drops Scutes used for crafting Wolf Armor?",
    answer: "Armadillo."
  },
  {
    question: "Which skeleton variant shoots poisonous arrows and spawns in Swamps and Trial Chambers?",
    answer: "The Bogged."
  },
  {
    question: "What item do you feed Armadillos to breed them?",
    answer: "Spider Eyes."
  },
  {
    question: "What mob drops a Breeze Rod when killed?",
    answer: "The Breeze."
  },
  {
    question: "What happens to a Pig when hit by lightning?",
    answer: "It turns into a Zombified Piglin."
  },
  {
    question: "What happens to a Villager when hit by lightning?",
    answer: "It turns into a Witch."
  },
  {
    question: "What item do you use to breed Pigs?",
    answer: "Carrots, Potatoes, or Beetroots."
  },
  {
    question: "What item do you use to breed Cows and Sheep?",
    answer: "Wheat."
  },
  {
    question: "What item do you use to breed Chickens?",
    answer: "Seeds (Wheat, Pumpkin, Melon, or Torchflower seeds)."
  },
  {
    question: "Which mob shoots fireballs and drops Blaze Rods?",
    answer: "Blaze."
  },
  {
    question: "Which hostile mob swims in the ocean and attacks players with tridents?",
    answer: "Drowned."
  },
  {
    question: "What mob is created when an Allay is given an Amethyst Shard while dancing?",
    answer: "It duplicates into another Allay."
  },
  {
    question: "What mob gives players Bad Omen when killed?",
    answer: "Pillager Captain (carrying a Raid Banner)."
  },
  {
    question: "Which flying mob in the Nether shoots explosive fireballs and cries?",
    answer: "Ghast."
  },
  {
    question: "What item do Sniffers dig out of dirt or moss blocks?",
    answer: "Torchflower Seeds and Pitcher Pods."
  },
  {
    question: "How do you hatch a Sniffer Egg faster?",
    answer: "Place it on a Moss Block."
  },
  {
    question: "Which animals can you milk with a Bucket?",
    answer: "Cows, Mooshrooms, and Goats."
  },
  {
    question: "What special item do Mooshrooms give when sheared?",
    answer: "5 Red (or Brown) Mushrooms (turning them into normal Cows)."
  },
  {
    question: "What bowl food item can you get by milking a Mooshroom with a bowl?",
    answer: "Mushroom Stew."
  },
  {
    question: "What bowl food item do you get if a Mooshroom is struck by lightning and fed a flower, then milked with a bowl?",
    answer: "Suspicious Stew."
  },
  {
    question: "What mob leaps high into the air and rams players or mobs off cliffs?",
    answer: "Goat."
  },
  {
    question: "What item drops from Goats when they ram a hard surface like stone or logs?",
    answer: "Goat Horn."
  },
  {
    question: "Which flying passive mob collects dropped items and brings them to players?",
    answer: "Allay."
  },
  {
    question: "What mob attacks in waves during a Village Raid?",
    answer: "Pillagers, Vindicators, Ravagers, Evokers, and Witches."
  },
  {
    question: "What mob rides a Strider in the Nether?",
    answer: "Zombified Piglin (or Baby Piglin)."
  },
  {
    question: "What item do you hold to guide and ride a Strider on lava?",
    answer: "Warped Fungus on a Stick."
  },
  {
    question: "What food item breeds Horses and Donkeys?",
    answer: "Golden Apples or Golden Carrots."
  },
  {
    question: "Which small, jumpy mob drops Slimeballs?",
    answer: "Slime."
  },
  {
    question: "Which Nether mob drops Magma Cream?",
    answer: "Magma Cube."
  },
  {
    question: "What underwater mob inflates and inflicts Poison when players get close?",
    answer: "Pufferfish."
  },
  {
    question: "Which mob spawns in Nether Fortresses and drops Wither Skeleton Skulls?",
    answer: "Wither Skeleton."
  },
  {
    question: "What mob can be tamed using Bones?",
    answer: "Wolf."
  },
  {
    question: "What passive flying mob imitates nearby mob sounds?",
    answer: "Parrot."
  },

  // --- CRAFTING & RECIPES ---
  {
    question: "What ingredients are required to craft a Netherite Ingot?",
    answer: "4 Netherite Scraps and 4 Gold Ingots."
  },
  {
    question: "How many Obsidian blocks are required at minimum to build a Nether Portal?",
    answer: "10 Obsidian blocks (excluding corners)."
  },
  {
    question: "How do you craft TNT?",
    answer: "5 Gunpowder and 4 Sand (or Red Sand)."
  },
  {
    question: "What items do you combine in an Anvil to repair or upgrade gear using Netherite?",
    answer: "A Diamond tool/armor piece, a Netherite Ingot, and a Smithing Template."
  },
  {
    question: "What ingredient transforms a normal Potion into a Splash Potion?",
    answer: "Gunpowder."
  },
  {
    question: "What item is needed to craft an Eye of Ender?",
    answer: "Ender Pearl and Blaze Powder."
  },
  {
    question: "How do you craft a Golden Apple?",
    answer: "1 Apple surrounded by 8 Gold Ingots."
  },
  {
    question: "What ingredient increases the duration of a potion when brewing?",
    answer: "Redstone Dust."
  },
  {
    question: "What ingredient increases the potency/level of a potion when brewing?",
    answer: "Glowstone Dust."
  },
  {
    question: "What block is crafted using 9 Iron Ingots?",
    answer: "Block of Iron."
  },
  {
    question: "What ingredients are needed to craft a Book?",
    answer: "3 Paper and 1 Leather."
  },
  {
    question: "What ingredients create a Beacon?",
    answer: "1 Nether Star, 3 Obsidian, and 5 Glass blocks."
  },
  {
    question: "How do you craft a Map?",
    answer: "8 Paper surrounding 1 Compass."
  },
  {
    question: "What do you use to dye sheep or wool green?",
    answer: "Cactus Green (Cactus smelted in a furnace)."
  },
  {
    question: "What do you get when you combine Firework Star and Paper with Gunpowder?",
    answer: "Firework Rocket."
  },
  {
    question: "How do you craft a Crafter block?",
    answer: "5 Iron Ingots, 1 Crafting Table, 2 Redstone Dust, and 1 Dropper."
  },
  {
    question: "How do you craft a Mace?",
    answer: "1 Heavy Core and 1 Breeze Rod."
  },
  {
    question: "How do you craft Wolf Armor?",
    answer: "6 Armadillo Scraps."
  },
  {
    question: "What block is crafted with 4 Amethyst Shards and 1 Copper Ingot?",
    answer: "Spyglass."
  },
  {
    question: "How do you craft a Lead?",
    answer: "4 String and 1 Slimeball."
  },
  {
    question: "How do you craft a Piston?",
    answer: "3 Wood Planks, 4 Cobblestone, 1 Iron Ingot, and 1 Redstone Dust."
  },
  {
    question: "How do you craft a Sticky Piston?",
    answer: "1 Piston and 1 Slimeball."
  },
  {
    question: "How do you craft a Daylight Detector?",
    answer: "3 Glass, 3 Nether Quartz, and 3 Wooden Slabs."
  },
  {
    question: "How do you craft an Armor Stand?",
    answer: "1 Smooth Stone Slab and 6 Sticks."
  },
  {
    question: "How do you craft an End Crystal?",
    answer: "7 Glass, 1 Eye of Ender, and 1 Ghast Tear."
  },
  {
    question: "How do you craft a Barrel?",
    answer: "6 Planks and 2 Wooden Slabs."
  },
  {
    question: "How do you craft a Smoker?",
    answer: "1 Furnace and 4 Stripped Logs / Wood."
  },
  {
    question: "How do you craft a Blast Furnace?",
    answer: "1 Furnace, 5 Iron Ingots, and 3 Smooth Stone."
  },
  {
    question: "How do you craft a Loom?",
    answer: "2 Planks and 2 String."
  },
  {
    question: "How do you craft a Cartography Table?",
    answer: "2 Paper and 4 Planks."
  },
  {
    question: "How do you craft a Grindstone?",
    answer: "2 Sticks, 1 Stone Slab, and 2 Planks."
  },
  {
    question: "How do you craft a Stonecutter?",
    answer: "1 Iron Ingot and 3 Stone."
  },
  {
    question: "How do you craft a Lectern?",
    answer: "1 Bookshelf and 4 Wooden Slabs."
  },
  {
    question: "How do you craft a Compass?",
    answer: "4 Iron Ingots and 1 Redstone Dust."
  },
  {
    question: "How do you craft a Clock?",
    answer: "4 Gold Ingots and 1 Redstone Dust."
  },
  {
    question: "How do you craft a Fishing Rod?",
    answer: "3 Sticks and 2 String."
  },
  {
    question: "How do you craft a Carrot on a Stick?",
    answer: "1 Fishing Rod and 1 Carrot."
  },
  {
    question: "How do you craft a Shears?",
    answer: "2 Iron Ingots."
  },
  {
    question: "How do you craft a Shield?",
    answer: "1 Iron Ingot and 6 Wood Planks."
  },
  {
    question: "How do you craft a Crossbow?",
    answer: "3 Sticks, 2 String, 1 Iron Ingot, and 1 Tripwire Hook."
  },
  {
    question: "How do you craft a Bow?",
    answer: "3 Sticks and 3 String."
  },
  {
    question: "How do you craft a Cauldron?",
    answer: "7 Iron Ingots."
  },
  {
    question: "How do you craft an Anvil?",
    answer: "3 Blocks of Iron and 4 Iron Ingots."
  },
  {
    question: "How do you craft a Fire Charge?",
    answer: "1 Blaze Powder, 1 Coal/Charcoal, and 1 Gunpowder."
  },
  {
    question: "How do you craft a Fermented Spider Eye?",
    answer: "1 Spider Eye, 1 Sugar, and 1 Brown Mushroom."
  },
  {
    question: "How do you craft Magma Cream?",
    answer: "1 Slimeball and 1 Blaze Powder."
  },
  {
    question: "How do you craft Glistering Melon Slice?",
    answer: "1 Melon Slice and 8 Gold Nuggets."
  },
  {
    question: "How do you craft Golden Carrot?",
    answer: "1 Carrot and 8 Gold Nuggets."
  },
  {
    question: "How do you craft Spectral Arrows?",
    answer: "1 Arrow and 4 Glowstone Dust."
  },
  {
    question: "How do you craft a Cake?",
    answer: "3 Milk Buckets, 2 Sugar, 1 Egg, and 3 Wheat."
  },
  {
    question: "How do you craft Pumpkin Pie?",
    answer: "1 Pumpkin, 1 Sugar, and 1 Egg."
  },
  {
    question: "How do you craft a Cookie?",
    answer: "2 Wheat and 1 Cocoa Beans."
  },
  {
    question: "How do you craft Bread?",
    answer: "3 Wheat."
  },
  {
    question: "How do you craft a Target block?",
    answer: "1 Hay Bale and 4 Redstone Dust."
  },
  {
    question: "How do you craft a Note Block?",
    answer: "8 Wood Planks and 1 Redstone Dust."
  },
  {
    question: "How do you craft a Jukebox?",
    answer: "8 Wood Planks and 1 Diamond."
  },
  {
    question: "How do you craft a Dispenser?",
    answer: "7 Cobblestone, 1 Bow, and 1 Redstone Dust."
  },
  {
    question: "How do you craft a Dropper?",
    answer: "7 Cobblestone and 1 Redstone Dust."
  },
  {
    question: "How do you craft a Hopper?",
    answer: "5 Iron Ingots and 1 Chest."
  },
  {
    question: "How do you craft a Redstone Repeater?",
    answer: "2 Redstone Torches, 1 Redstone Dust, and 3 Smooth Stone."
  },

  // --- BLOCKS, ORES & WORLD ---
  {
    question: "What level tool do you need at minimum to mine Diamond Ore?",
    answer: "An Iron Pickaxe."
  },
  {
    question: "Which rare item allows players to fly around in Survival mode?",
    answer: "Elytra."
  },
  {
    question: "What block prevents fall damage entirely when landed on?",
    answer: "Slime Block (or Hay Bale for 80% reduction / Water for 100%)."
  },
  {
    question: "What type of stone cannot be mined in Survival mode and forms the bottom of the world?",
    answer: "Bedrock."
  },
  {
    question: "What rare ore is exclusively found in Mountain biomes in small quantities?",
    answer: "Emerald Ore."
  },
  {
    question: "What light source block is naturally generated in ocean monuments?",
    answer: "Sea Lantern."
  },
  {
    question: "What block emits a redstone signal when pointed at by a player or activated by light changes?",
    answer: "Observer."
  },
  {
    question: "What wood type was added to Minecraft with a pink hue from Cherry Groves?",
    answer: "Cherry Wood."
  },
  {
    question: "What block allows players to set their spawn point in the Nether?",
    answer: "Respawn Anchor."
  },
  {
    question: "What block explodes instantly if you try to sleep in a bed while in the Nether or End?",
    answer: "A Bed!"
  },
  {
    question: "What naturally occurring block slows down movement speed when walked on?",
    answer: "Soul Sand (or Honey Block)."
  },
  {
    question: "What block is required to power up an Enchanting Table to level 30?",
    answer: "Bookshelves (15 required)."
  },
  {
    question: "Which ore must be smelted using Blast Furnaces or Furnaces to yield raw metal before 1.17?",
    answer: "Iron Ore and Gold Ore."
  },
  {
    question: "What fruit found in the End dimension teleports you randomly when eaten?",
    answer: "Chorus Fruit."
  },
  {
    question: "What block is found in Trial Chambers that yields loot when unlocked with a Trial Key?",
    answer: "Vault."
  },
  {
    question: "What unique block in Trial Chambers spawns waves of mobs based on the number of nearby players?",
    answer: "Trial Spawner."
  },
  {
    question: "What key is used to open an Ominous Vault?",
    answer: "Ominous Trial Key."
  },
  {
    question: "What block is created when water touches a lava source block?",
    answer: "Obsidian."
  },
  {
    question: "What block is created when water touches flowing lava?",
    answer: "Cobblestone."
  },
  {
    question: "What block is created when lava flows over water from above?",
    answer: "Stone."
  },
  {
    question: "What block transforms into Mud when water is used on Dirt?",
    answer: "Mud."
  },
  {
    question: "What block do you get when you dry Mud on Dripstone?",
    answer: "Clay."
  },
  {
    question: "What item can be used as a fuel source that smelts 100 items in a furnace?",
    answer: "Lava Bucket."
  },
  {
    question: "How many items can a single piece of Coal or Charcoal smelt in a furnace?",
    answer: "8 items."
  },
  {
    question: "How many items can a Dried Kelp Block smelt?",
    answer: "20 items."
  },
  {
    question: "What block produces electrical signals when struck by lightning?",
    answer: "Lightning Rod."
  },
  {
    question: "What copper block state changes color over time from orange to green?",
    answer: "Oxidized Copper."
  },
  {
    question: "How can players prevent Copper blocks from oxidizing further?",
    answer: "Using Honeycomb to wax it."
  },
  {
    question: "How can you remove wax or oxidation from Copper blocks?",
    answer: "Using an Axe or a lightning strike."
  },
  {
    question: "What block produces honey when full and can be harvested with Shears?",
    answer: "Bee Nest / Beehive."
  },
  {
    question: "What tool do you use to harvest honey bottles without aggravating bees?",
    answer: "Glass Bottle (with campfire smoke beneath the hive)."
  },
  {
    question: "What block is obtained by brushing Suspicious Sand or Suspicious Gravel in Archaeology sites?",
    answer: "Artifacts, Pottery Sherds, Sniffer Eggs, or Minerals."
  },
  {
    question: "What tool is required for Archaeology brushing?",
    answer: "Brush."
  },
  {
    question: "What block emits light underwater and grows on Coral Reefs?",
    answer: "Sea Pickle."
  },
  {
    question: "What block is generated in Deep Dark biomes and spreads when mobs die near it?",
    answer: "Sculk Catalyst."
  },
  {
    question: "What block senses sound/vibrations and triggers redstone signals or the Warden?",
    answer: "Sculk Sensor."
  },
  {
    question: "What block shrieks when triggered and summons the Warden after 4 triggers?",
    answer: "Sculk Shrieker."
  },
  {
    question: "What block can store up to 3 levels of potion or water?",
    answer: "Cauldron."
  },
  {
    question: "What block arrangement creates an infinite water source?",
    answer: "4 Water Source blocks in a 2x2 grid."
  },
  {
    question: "What block reduces fall damage by 80%?",
    answer: "Hay Bale."
  },
  {
    question: "What block bounces entities high into the air?",
    answer: "Slime Block."
  },
  {
    question: "What block sticks to entities and slows them down without letting them jump?",
    answer: "Honey Block."
  },
  {
    question: "What block emits a full light level of 15 and is found naturally in the Nether?",
    answer: "Glowstone."
  },
  {
    question: "What block can be created by smelting Cobblestone?",
    answer: "Stone."
  },
  {
    question: "What block can be created by smelting Stone?",
    answer: "Smooth Stone."
  },
  {
    question: "What block is crafted using 4 Nether Quartz in a grid?",
    answer: "Block of Quartz."
  },
  {
    question: "What plant grows up to 3 blocks high in swamps and riverbanks and is used for sugar?",
    answer: "Sugar Cane."
  },
  {
    question: "What plant found in oceans can be dried in a furnace for food?",
    answer: "Kelp."
  },
  {
    question: "What block is used to store high amounts of XP and split enchantment books?",
    answer: "Grindstone."
  },
  {
    question: "What block allows players to change the pattern on Banners?",
    answer: "Loom."
  },
  {
    question: "What block allows players to duplicate Smithing Templates?",
    answer: "Crafting Table."
  },
  {
    question: "What block type creates point-to-point waypoints on Maps when right-clicked?",
    answer: "Banner."
  },
  {
    question: "What tree type has dark wood and grows in 2x2 trunks in Dark Forests?",
    answer: "Dark Oak."
  },
  {
    question: "What tree type grows in Swamps and Mangrove Swamps?",
    answer: "Mangrove Tree."
  },
  {
    question: "What block is used as a beacon pyramid base besides Iron, Gold, and Diamond?",
    answer: "Emerald Block or Netherite Block."
  },
  {
    question: "How many total blocks are required for a full Level 4 Beacon pyramid?",
    answer: "164 blocks."
  },
  {
    question: "What block generates in the End and drops Chorus Fruit?",
    answer: "Chorus Flower."
  },

  // --- ENCHANTMENTS & POTIONS ---
  {
    question: "What enchantment causes a Trident to return to the player after being thrown?",
    answer: "Loyalty."
  },
  {
    question: "What enchantment lets you walk on water by freezing it into ice?",
    answer: "Frost Walker."
  },
  {
    question: "What enchantment prevents an item from being removed upon death in Hardcore/Survival?",
    answer: "Curse of Binding (prevents taking off) or Curse of Vanishing (destroys item on death)."
  },
  {
    question: "What weapon-exclusive enchantment increases damage against undead mobs like Zombies and Skeletons?",
    answer: "Smite."
  },
  {
    question: "Which enchantment speeds up mining speed under water?",
    answer: "Aqua Affinity."
  },
  {
    question: "What enchantment allows bows to shoot infinite arrows as long as you have 1 arrow in inventory?",
    answer: "Infinity."
  },
  {
    question: "What enchantment increases drops from mining ores?",
    answer: "Fortune."
  },
  {
    question: "What enchantment allows you to mine blocks in their exact intact state (e.g. Glass, Ore blocks)?",
    answer: "Silk Touch."
  },
  {
    question: "What potion effect makes the player immune to fire and lava?",
    answer: "Fire Resistance."
  },
  {
    question: "What potion effect turns the player invisible?",
    answer: "Invisibility."
  },
  {
    question: "What enchantment increases the fall attack damage of the Mace based on fall distance?",
    answer: "Density."
  },
  {
    question: "What enchantment on the Mace creates a wind burst launch when landing a smash attack?",
    answer: "Wind Burst."
  },
  {
    question: "What enchantment on
