const BIRDS_DATA = [
  [
    {
      id: 0,
      name: "Darth Vader",
      species: "Human",
      birth: "41.9BBY",
      description:
        'Darth Vader is a fictional character in the Star Wars franchise. He is a primary antagonist in the original trilogy, but, in his birth identity as Anakin Skywalker, is one of the main protagonists in the prequel trilogy alongside. Films of the franchise as "the tragedy of Darth Vader"',
      image: "https://live.staticflickr.com/65535/49543965698_0fdbd99ed5.jpg",
      audio: "https://dl.dropboxusercontent.com/s/wajd35fjq82u7l1/Dont%20fail%20me%20again.mp3"
    },
    {
      id: 1,
      name: "Luke Skywalker",
      species: "Human",
      birth: "19BBY",
      description:
        "Luke Skywalker is a fictional character and the main protagonist of the original film trilogy of the Star Wars franchise created by George Lucas. Portrayed by Mark Hamill, Luke first appeared. The Force Awakens (2015), The Last Jedi (2017), and The Rise of Skywalker (2019).",
      image: "https://live.staticflickr.com/65535/49543965698_0fdbd99ed5.jpg",
      audio: "https://dl.dropbox.com/s/305gjxtzataf6go/Become%20a%20Jedi.mp3"
    },
    {
      id: 2,
      name: "C-3PO",
      species: "Droid",
      birth: "112BBY",
      description:
        "C-3PO (/ˌsiːˈθriːpioʊ/) or See-Threepio[1] is a fictional character in the Star Wars franchise who appears in the original trilogy, the prequel trilogy and the sequel trilogy. Built by Anakin Skywalker, C-3PO was designed as a protocol. He is frequently featured as a main character in various other Star Wars media.",
      image: "https://live.staticflickr.com/65535/49544690802_27915b380d.jpg",
      audio: "https://dl.dropbox.com/s/hu0h7bfsxwv8kso/Im%20C3PO.mp3"
    },
    {
      id: 3,
      name: "R2-D2",
      species: "Droid",
      birth: "33BBY",
      description:
        "R2-D2 (/ˌɑːtuːˈdiːtuː/) or Artoo-Detoo[1] is a fictional droid character in the Star Wars franchise created by George Lucas. He has appeared in ten of the eleven Star Wars films to date. At various points throughout the course of the films, R2 is a friend.",
      image: "https://live.staticflickr.com/65535/49543961008_4d541e4fa9.jpg",
      audio: "https://dl.dropbox.com/s/3tt7uaqwkuoc8uu/Unbelievable%20R2D2.mp3"
    },
    {
      id: 4,
      name: "Leia Organa",
      species: " Human",
      birth: "19BBY",
      description:
        "Princess Leia Organa[a][b] is a fictional character in the Star Wars franchise, portrayed in films by Carrie Fisher. Introduced in the original Star Wars film[c] in 1977, Leia is princess of the planet Alderaan, a member of the Imperial Senate and an agent.",
      image: "https://live.staticflickr.com/65535/49543961008_4d541e4fa9.jpg",
      audio: "https://dl.dropbox.com/s/etcjg7h1e9r4bc5/Help%20me%20Obi%20Wan.mp3"
    },
    {
      id: 5,
      name: "Obi-Wan Kenobi",
      species: "Human",
      birth: "57BBY",
      description:
        "Obi-Wan Kenobi (/ˈoʊbiːˌwɑːn kəˈnoʊbiː/), also known as Ben Kenobi, is a character in the Star Wars franchise.[4] Within the original trilogy, Obi-Wan serves as a supporting character and is portrayed by English actor Alec Guinness. In in the later-released.",
      image: "https://live.staticflickr.com/65535/49543966118_323a9edee8.jpg",
      audio: "https://dl.dropbox.com/s/yji553o4pi4kfkv/Use%20the%20force.mp3"
    }
  ],
  [
    {
      id: 0,
      name: "Anakin Skywalker",
      species: "Human",
      birth: "41.9BBY",
      description:
        "Anakin Skywalker, a Force-sensitive human male, was a Jedi Knight of the Galactic Republic and the Chosen One of the Force.During the Clone Wars, his accomplishments as a battlefield commander earned him the Hero With No Fear moniker. After turning to the dark side of the Force, he became known as Darth Vader.",
      image: "https://live.staticflickr.com/65535/49544537811_c0693dc6d2.jpg",
      audio: "https://dl.dropbox.com/s/0218lzedlu0yb34/Anakin%20Forgotten%20me.mp3?dl=0"
    },
    {
      id: 1,
      name: "Chewbacca",
      species: "Wookiee",
      birth: "200BBY",
      description:
        'Chewbacca (/tʃuːˈbɑːkə/), nicknamed "Chewie", is a fictional character in the Star Wars franchise. He is a Wookiee, a tall, hirsute, bipedal, intelligent species originating from the fictional planet of Kashyyyk. Chewbacca is the loyal friend and first mate of Han Solo.',
      image: "https://live.staticflickr.com/65535/49544538246_b986d47bfa.jpg",
      audio: "https://dl.dropbox.com/s/ilnnvrpktzkp3r9/wookie1.wav?dl=0"
    },
    {
      id: 2,
      name: "Han Solo",
      species: "Human",
      birth: "29BBY",
      description:
        "Han Solo is a fictional character and protagonist in the Star Wars franchise. A primary character in the original film trilogy, Han is the captain of the Millennium Falcon, along with his Wookiee co-pilot Chewbacca. In the original Star Wars film.",
      image: "https://live.staticflickr.com/65535/49544538546_759270815b.jpg",
      audio: "https://dl.dropbox.com/s/l085bruefj8rdi8/Never%20tell%20me%20the%20odds.mp3?dl=0"
    },
    {
      id: 3,
      name: "Jabba Desilijic Tiure",
      species: "Hutt",
      birth: "600BBY",
      description:
        "Jabba Desilijic Tiure, more commonly referred to as Jabba the Hutt or simply Jabba, and formally styled as His Excellency Jabba Desilijic Tiure of Nal Hutta, Eminence of Tatooine, was a Hutt gangster and crime lord.",
      image: "https://live.staticflickr.com/65535/49544764707_31809dbb86.jpg",
      audio: "https://dl.dropbox.com/s/sm53vqsdb5ox5xf/Mighty%20Chewbacca.mp3?dl=0"
    },
    {
      id: 4,
      name: "Palpatine",
      species: "Human",
      description:
        "Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.",
      image: "https://live.staticflickr.com/65535/49544764937_45d304532f.jpg",
      audio: "https://dl.dropbox.com/s/491ekocbt1xzkrt/Gooood.mp3?dl=0"
    },
    {
      id: 5,
      name: "Yoda",
      species: "Yoda's Species",
      birth: "82BBY",
      description:
        "Yoda (/ˈjoʊdə/) is a fictional character in the Star Wars universe, first appearing in the 1980 film The Empire Strikes Back. He is a small, green humanoid alien with tremendous power in the Force. In his first appearance in the original trilogy, the spirit of Jedi master Obi-Wan Kenobi.",
      image: "https://live.staticflickr.com/65535/49544765207_e7b040d292.jpg",
      audio: "https://dl.dropbox.com/s/1wjhepwnbqhp3sg/Always%20in%20Motion.mp3?dl=0"
    }
  ],
  [
    {
      id: 0,
      name: "Trandoshan",
      species: "Reptile",
      birth: "Dosh",
      description:
        "Trandoshans, also called T'doshok, were large, bipedal reptilian sentient humanoids from the planet Trandosha, and were renowned as great hunters. Garnac was a Trandoshan hunter who operated a game preserve on the moon Wasskah  and oversaw his son's fatally failed rite of.",
      image: "https://live.staticflickr.com/65535/49544062143_5c55ceebde.jpg",
      audio: "https://dl.dropbox.com/s/eh58gdknqgkf89m/63919.mp3?dl=0"
    },
    {
      id: 1,
      name: "Ewok",
      species: "Mammal",
      birth: "Ewokese",
      description:
        "Ewoks are a fictional species of small, mammaloid bipeds that appear in the Star Wars universe. They are hunter gatherers resembling teddy bears that inhabit the forest moon of Endor and live in various arboreal huts and other simple dwellings. They first appeared in the 1983 film Return of the Jedi and have since appeared in two made for television films.",
      image: " https://live.staticflickr.com/65535/49544061673_6842705753.jpg",
      audio: "https://dl.dropbox.com/s/qyf8dkft9galh82/ewok1.wav?dl=0"
    },
    {
      id: 2,
      name: "Neimodian",
      species: "Sentient",
      birth: "Neimoidia",
      description:
        "Neimoidians were a humanoid species native to the planet of Neimoidia, while also settling wealthy purse-worlds like Cato Neimoidia. They had smooth noseless faces, mottled green-gray skin, and large red-orange eyes. In the waning years of the Galactic Republic, they ran the Trade Federation, a vast consortium of business interests.",
      image: "https://live.staticflickr.com/65535/49544564401_e6ec514df4.jpg",
      audio: "https://dl.dropbox.com/s/xg9jamb7xz7iecx/Wat%20Tambor%20.mp3?dl=0"
    },
    {
      id: 3,
      name: "Gungan",
      species: "Amphibian",
      birth: "Gungan Basic",
      description:
        "Gungans were an amphibious sentient species and the native inhabitants of the planet Naboo. The various different Gungan races could live on both water and land, but often made their home in underwater cities such as Otoh Gunga. Physically, Gungans were tall humanoids with a flexible structure, strong leg muscles, strong bills, muscular tongues, and many other traits designed for living in the waters of Nabo.",
      image: "https://live.staticflickr.com/65535/49544791367_b2b3e0cb2a.jpg",
      audio: "https://dl.dropbox.com/s/jz2swqdvlaxq9n5/Die%20in%20here.mp3?dl=0"
    },
    {
      id: 4,
      name: "Toydarian",
      species: "Mammal",
      birth: " Toydarian",
      description:
        "Watto is a fictional character in the Star Wars franchise, featured in the films The Phantom Menace and Attack of the Clones. He is computer-generated and is voiced by voice actor Andy Secombe. He is a mean-tempered, greedy Toydarian, and owner of a second-hand goods store in Mos Espa on the planet Tatooine..",
      image: "https://live.staticflickr.com/65535/49544791607_d14903189d.jpg",
      audio: "https://dl.dropbox.com/s/l14wi9a08jx2c1i/Star%20wars%20Sound%20Effects%20Watto.mp3?dl=0"
    },
    {
      id: 5,
      name: "Zabrak",
      species: "Mammal",
      birth: "Dugese",
      description:
        "Zabrak are near-human sentients from the planet Iridonia renowned for their independence and wandering spirit. They have distinctive facial horns, whose number and pattern denote which subspecies an individual Zabrak belongs to. Most Zabrak wear ritual facial tattoos, which vary from simple lines to more elaborate patterns.",
      image: "https://live.staticflickr.com/65535/49544066308_d0a77c5e39.jpg",
      audio: "https://dl.dropbox.com/s/i6m4xj6i6spbsfc/Afraid.mp3?dl=0"
    }
  ],
  [
    {
      id: 0,
      name: "Executor",
      species: "Star Dreadnought",
      birth: "1,143,350,000 credits",
      description:
        "An executor is a legal term referring to a person named by the maker of a will or nominated by the testator to carry out the instructions of the will. Typically, the executor is the person responsible for offering the will for probate, although it is not required that they fulfill this.",
      image: "https://live.staticflickr.com/65535/49544098928_9975a34a6b.jpg",
      audio:
        "https://dl.dropbox.com/s/bir44m0937vknck/Star%20Wars%20Imperial%20Executor%20-%20Tribute%20Theme%20%281%29.mp3?dl=0"
    },
    {
      id: 1,
      name: "Death Star",
      species: "DS-1 Orbital Battle Station",
      birth: "1,000,000,000,000 credits",
      description:
        "The Death Star is a fictional mobile space station and galactic superweapon featured in the Star Wars space-opera franchise. The first Death Star, introduced in the original Star Wars film,[a] is stated to be more than 120 kilometers and 400,000 droids.",
      image: "https://live.staticflickr.com/65535/49544601581_3bcb1c3bc6.jpg",
      audio: "https://dl.dropbox.com/s/y9dfr4wfwtjcdvt/369040_4992105-lq.mp3?dl=0"
    },
    {
      id: 2,
      name: "Millennium Falcon",
      species: "YT-1300 light freighter",
      birth: "100,000 credits",
      description:
        "The Millennium Falcon is a fictional starship in the Star Wars franchise. Designed by Joe Johnston for the movie Star Wars (1977), she has subsequently appeared in The Star Wars Holiday Special (1978), The Empire Strikes Back (1980).",
      image: "https://live.staticflickr.com/65535/49544827867_ecc1511ea5.jpg",
      audio:
        "https://dl.dropbox.com/s/lurauumnik8eeqr/Sound%20Effects%20Millennium%20Falcon%20escapes%20the%20Death%20Star%20STAR%20WARS.mp3?dl=0"
    },
    {
      id: 3,
      name: "X-wing",
      species: "T-65 X-wing",
      birth: "149,999 credits",
      description:
        "Star Wars: X-Wing is a miniature war game designed by Jay Little and produced by Fantasy Flight Games that was released at Gen Con in 2012.[2] It features tactical ship-to-ship dogfighting between various types of starfighters set in the fictional Star Wars universe.",
      image: "https://live.staticflickr.com/65535/49544602746_6f66ca8a63.jpg",
      audio: "https://dl.dropbox.com/s/uhhtsbull7wpj0g/Sound%20Effects%20X-Wing%20STAR%20WARS.mp3?dl=0"
    },
    {
      id: 4,
      name: "TIE Advanced x1",
      species: "Twin Ion Engine Advanced x1",
      birth: "Unknown",
      description:
        "TIE fighters are fictional starfighters existing in the Star Wars universe. Propelled by Twin Ion Engines, TIE fighters are fast, agile, yet fragile starfighters produced by Sienar Fleet Systems for the Galactic Empire. TIE fighters and other TIE craft appear in Star Wars films.",
      image: "https://live.staticflickr.com/65535/49544602451_8502e22f24.jpg",
      audio: "https://dl.dropbox.com/s/kkojmtrzlhsht7u/tie.wav?dl=0"
    },
    {
      id: 5,
      name: "Imperial shuttle",
      species: "Lambda-class T-4a shuttle",
      birth: "240,000 credits",
      description:
        "The Lambda-class T-4a shuttle, also known as the Imperial Lambda, Imperial Transport or the Imperial Shuttle, was a multi-purpose transport with a trihedral foil design used by the Galactic Empire.",
      image: "https://live.staticflickr.com/65535/49544602111_3591bbd4bd.jpg",
      audio:
        "https://dl.dropbox.com/s/4bpkoqmucu1tbqt/Sound%20Effects%20Imperial%20Lambda%20T%204%20Shuttle%20STAR%20WARS.mp3?dl=0"
    }
  ],
  [
    {
      id: 0,
      name: "Alderaan",
      species: "Temperate",
      birth: "12,500km",
      description:
        "Alderaan is a fictional planet featured in the Star Wars franchise. It is blue-green in appearance, depicted as a terrestrial planet with humanoid inhabitants, and characterized by a peaceful culture. It is the home planet of Princess Leia Organa.",
      image: "https://live.staticflickr.com/65535/49544113743_2eba4b9ec3_w.jpg",
      audio: "https://dl.dropbox.com/s/87ey8l11swt9q2f/Enceladus%20Hiss%20audio%20256%20kbps.mp3?dl=0"
    },
    {
      id: 1,
      name: "Yavin IV",
      species: "Temperate, Tropical",
      birth: "10,200km",
      description:
        'Yavin (also known as "Yavin Prime", to distinguish it from its moons) is a fictional planet in the Star Wars galaxy. It first appeared in the 1977 film Star Wars[a] and is depicted as a large red gas giant with an extensive satellite system of moons.',
      image: "https://live.staticflickr.com/65535/49544616101_7c0bd1f3a1_w.jpg",
      audio: "https://dl.dropbox.com/s/fhvh2n3yr22vpez/bowshock_PIA20754.wav?dl=0"
    },
    {
      id: 2,
      name: "Hoth",
      species: "Frozen",
      birth: "7,200km",
      description:
        "Zabrak are near-human sentients from the planet Iridonia renowned for their independence and wandering spirit. They have distinctive facial horns, whose number and pattern denote which subspecies an individual Zabrak belongs to. Most Zabrak wear ritual facial tattoos, which vary from simple lines to more elaborate patterns.",
      image: "https://live.staticflickr.com/65535/49544616231_1d8349ea20_w.jpg",
      audio: "https://dl.dropbox.com/s/ltae0jyrw316976/magnetosphere_PIA20753.wav?dl=0"
    },
    {
      id: 3,
      name: "Arcal",
      species: "Falco peregrinus",
      birth: "8,900km",
      description: "Hoth was a remote, icy planet that was the sixth planet in the star system of the same name. .",
      image: "https://live.staticflickr.com/65535/49544616391_441762e52c_w.jpg",
      audio: "https://dl.dropbox.com/s/mxk6pxgyoum9qap/603921main_voyager_jupiter_lightning.mp3?dl=0"
    },
    {
      id: 4,
      name: "Dagobah",
      species: "Murky",
      birth: "118,000km",
      description:
        "Dagobah is a fictional planet and eponymous star system appearing in the Star Wars films The Empire Strikes Back and Return of the Jedi, a deleted scene from Revenge of the Sith, and other media. It is depicted as a world of murky swamps,.",
      image: "https://live.staticflickr.com/65535/49544615591_2fde7e2dcc_w.jpg",
      audio: "https://dl.dropbox.com/s/1g4n9sm7wz297vq/578359main_kepler_star_KIC7671081B.mp3?dl=0"
    },
    {
      id: 5,
      name: "Geonosis",
      species: "Arido",
      birth: "11,370km",
      description:
        "Geonosis, referred to as Geonosia by some natives, was the desert home planet of the Geonosians. It was the Confederacy of Independent Systems' first capital and hosted its major.",
      image: "https://live.staticflickr.com/65535/49544114488_01dea402a7_w.jpg",
      audio: "https://dl.dropbox.com/s/mxk6pxgyoum9qap/603921main_voyager_jupiter_lightning.mp3?dl=0"
    }
  ],
  [
    {
      id: 0,
      name: "AT-AT",
      species: "Assault Walker",
      birth: "60km/h",
      description:
        "The All Terrain Armored Transport, or AT-AT walker, is a quadruped mechanized infantry combat vehicle used by the Imperial ground forces. Standing over 20 metres (66 ft) tall with blast-impervious armour plating, these massive constructs are used as much for psychological.",
      image: "https://live.staticflickr.com/65535/49544125433_c5e6e12d9f_w.jpg",
      audio: "https://dl.dropbox.com/s/grswal2oohj9azz/8d82b5_AT_AT_Sound_Effect.mp3?dl=0"
    },
    {
      id: 1,
      name: "Sand Crawler",
      species: "Wheeled",
      birth: "30km/h",
      description:
        "The sandcrawler is a fictional transport vehicle in the Star Wars universe that is found on the desert planet Tatooine. The vehicle, as it appears in its major appearances in Star Wars Episode IV: A New Hope, is 37 meters long and 18 meters tall. ",
      image: "https://live.staticflickr.com/65535/49544125598_c141b65f2c_w.jpg",
      audio: "https://dl.dropbox.com/s/vge7q4tq0jy5y58/00194.mp3?dl=0"
    },
    {
      id: 2,
      name: "T-16 skyhopper",
      species: "Repulsorcraft",
      birth: "1,200km/h",
      description:
        "The AAT is a Trade Federation vehicle that appears in Star Wars: Episode I – The Phantom Menace, Star Wars: Episode III – Revenge of the Sith, the Star Wars expanded universe, and The Clone Wars. Early drafts of The Phantom Menace described the Trade Federation's.",
      image: "https://live.staticflickr.com/65535/49544854242_3aa1f31e47_w.jpg",
      audio:
        "https://dl.dropbox.com/s/1cs760jnjb4tvrn/T-16%20Skyhopper%20-%20LEGO%20Star%20Wars%20-%2075081%20-%20Product%20Animation.mp3?dl=0"
    },
    {
      id: 3,
      name: "X-34 landspeeder",
      species: "Repulsorcraft",
      birth: "250km/h",
      description:
        "Landspeeders are fictional anti-gravity craft used through the Star Wars movies and Star Wars expanded universe. They are depicted both in civilian and military capacities, and several versions have been merchandised as toys and models..",
      image: "https://live.staticflickr.com/65535/49544854507_b8bfe693c9_w.jpg",
      audio: "https://dl.dropbox.com/s/bhafzloo8jqgq4g/01318.mp3?dl=0"
    },
    {
      id: 4,
      name: "AT-ST",
      species: "Walker",
      birth: "90km/h",
      description:
        "All Terrain Walkers are armoured fighting vehicles from the Star Wars universe that traverse the landscape on mechanical legs. They are used by the Old Republic, the Galactic Empire, and the First Order for ground assault, reconnaissance or transport. Throughout the saga walkers have played.",
      image: "https://live.staticflickr.com/65535/49544126248_1afda832fa_w.jpg",
      audio: "https://dl.dropbox.com/s/n7or8n6olfd3oqh/01318.mp3?dl=0"
    },
    {
      id: 5,
      name: "Imperial Speeder Bike",
      species: "Speeder",
      birth: '360km/h',
      description:
        'Speeder bikes (also known as "jumpspeeders" or "hover bikes") and swoop bikes (or just "swoops") are small, fast transports that use repulsorlift engines in the fictional Star Wars universe. Return of the Jedi includes a prominent speeder bike chase;.',
      image: "https://live.staticflickr.com/65535/49544855082_d43a3d2417_w.jpg",
      audio:
        "https://dl.dropbox.com/s/l1rfeiq3cofrds5/Speeder%20Bike%20Chase%20sequence%20sound%20FX%20%28ROTJ%29.mp3?dl=0"
    }
  ]
];

export default BIRDS_DATA;
