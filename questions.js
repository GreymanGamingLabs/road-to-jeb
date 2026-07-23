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
