dataSetVersion = "2024-02-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
    sub: [
      { name: "Puggers", key: "pug", checked: true  },
      { name: "Division 1", key: "div1"},
      { name: "Division 2", key: "div2" },
      { name: "Division 3", key: "div3" },
      { name: "Division 4", key: "div4", checked: false  }
    ]
  },
  {
    name: "Filter by Teams",
    key: "teams",
    tooltip: "Check this to restrict to teams.",
    checked: false,
    sub: [
      { name: "Ghost Brigade", key: "gb" },
      { name: "Auxless", key: "aux-" },
      { name: "Dystopia", key: "dys" },
      { name: "Menhera", key: "MNHR" },
      { name: "Equals", key: "equals" },
      { name: "MXicans", key: "MXican" },
      { name: "KOBAYASHI CLAN", key: "koba" },
      { name: "Bonkurazu", key: "BONK" },
      { name: "Ikko Ikki", key: "ikko" },
      { name: "Recon Feet", key: "FEET" },
      { name: "Winning Team", key: "win" },
      { name: "AHNS", key: "ahns" },
      { name: "renraku", key: "renraku" },
      { name: "BK", key: "BK" },
      { name: "FD", key: "FD" },
      { name: "PIGA", key: "PIGA" },
      { name: "FLRK", key: "FLRK" },
      { name: "NAT", key: "NAT" },
      { name: "Road to deepfrog", key: "road to deepfrog" }
    ]
  },
  {
    name: "Filter by Class",
    key: "class",
    tooltip: "Check this to restrict to class.",
    checked: false,
    sub: [
      { name: "Recon", key: "r" },
      { name: "Assault", key: "a" },
      { name: "Support", key: "s" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Sunabozu",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["win", "gb"],
            class: ["r", "a"]
        }
    },
    {
        name: "Oni",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["aux-", "ahns"],
            class: ["a", "s"]
        }
    },
    {
        name: "Infrequent",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["dys"],
            class: ["a"]
        }
    },
    {
        name: "Halcyon",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["road to deepfrog", "FD", "MXican"],
            class: ["r", "a", "s"]
        }
    },
    {
        name: "Wahaha",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["ahns", "MXican"],
            class: ["a", "s"]
        }
    },
    {
        name: "Rain",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["win", "OP"],
            class: ["r", "a", "s"]
        }
    },
    {
        name: "Kudegra",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["ahns", "aux-"],
            class: ["r", "a", "s"]
        }
    },
    {
        name: "Jef",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["BONK"],
            class: ["a"]
        }
    },
    {
        name: "Agiel",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["gb"],
            class: ["a", "s"]
        }
    },
    {
        name: "Persica",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["BONK"],
            class: ["r"]
        }
    },
    {
        name: "Nevra",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["NaT", "ikko", "MXican"],
            class: ["r", "s"]
        }
    },
    {
        name: "Kinoko",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["BONK"],
            class: ["r", "s"]
        }
    },
    {
        name: "Neotokyoscrub",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["FD", "MXican"],
            class: ["r", "a", "s"]
        }
    },
    {
        name: "Milk",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["road to deepfrog", "ahns", "aux-"],
            class: ["s"]
        }
    },
    {
        name: "Shazam",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["dys"],
            class: ["r", "s"]
        }
    },
    {
        name: "blaberry",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["aux-"],
            class: ["r"]
        }
    },
    {
        name: "Rusher",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["ikko", "renraku"],
            class: ["a"]
        }
    },
    {
        name: "Miso",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["ikko", "renraku"],
            class: ["r"]
        }
    },
    {
        name: "XX",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["dys"],
            class: ["r", "a"]
        }
    },
    {
        name: "Phorce",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["aux-"],
            class: ["a"]
        }
    },
    {
        name: "ningurist",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["BONK"],
            class: ["s"]
        }
    },
    {
        name: "Dommler",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["ikko", "renraku"],
            class: ["r", "a"]
        }
    },
    {
        name: "Nutnoze",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["aux-", "dys"],
            class: ["a"]
        }
    },
    {
        name: "Masterkatze",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["BONK"],
            class: ["a"]
        }
    },
    {
        name: "Shinra",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["ikko"],
            class: ["a", "s"]
        }
    },
    {
        name: "3LOW",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["NAT", "ikko"],
            class: ["a"]
        }
    },
    {
        name: "Hosomi",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["ahns", "dys"],
            class: ["r", "s"]
        }
    },
    {
        name: "Devastator",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["FD", "MXican"],
            class: ["a"]
        }
    },
    {
        name: "Marterzon",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["FD", "PIGA", "FEET"],
            class: ["r", "a", "s"]
        }
    },
    {
        name: "Talibus",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["MXican"],
            class: ["a", "s"]
        }
    },
    {
        name: "Hyacinth",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["FLRK"],
            class: ["a"]
        }
    },
    {
        name: "Boon",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["aux-"],
            class: ["s"]
        }
    },
    {
        name: "Ace of Hearts",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["FLRK"],
            class: ["s"]
        }
    },
    {
        name: "DRT",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["FEET"],
            class: ["a"]
        }
    },
    {
        name: "Average",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["equals"],
            class: ["r"]
        }
    },
    {
        name: "Glitcher",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["koba"],
            class: ["a"]
        }
    },
    {
        name: "Serbian guy",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["MNHR"],
            class: ["a"],
        }
    },
    {
        name: "soft as HELL",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["win"],
            class: ["a", "s"]
        }
    },
    {
        name: "bauxite",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["dys"],
            class: ["s"]
        }
    },
    {
        name: "Boltronics",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["road to deepfrog", "FD", "MXican"],
            class: ["a", "r"]
        }
    },
    {
        name: "StellaNova",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["BONK", "MNHR"],
            class: ["r"]
        }
    },
    {
        name: "Grass",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["BONK"],
            class: ["r"]
        }
    },
    {
        name: "Legoracer",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div1"],
            teams: ["ikko", "renraku"],
            class: ["a"]
        }
    },
    {
        name: "Moffin",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["BONK"],
            class: ["a"]
        }
    },
    {
        name: "You're Pissed Off",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["dys"],
            class: ["a"]
        }
    },
    {
        name: "DESTROYGIRL",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["koba"],
            class: ["s"]
        }
    },
    {
        name: "lizard",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["MXican", "renraku"],
            class: ["s"]
        }
    },
    {
        name: "Puddy",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div2"],
            teams: ["gb"],
            class: ["a"]
        }
    },
    {
        name: "Zwiadowca",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["koba"],
            class: ["s"]
        }
    },
    {
        name: "Robert Kurwica",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["equals"],
            class: ["a"]
        }
    },
    {
        name: "TentacleRX",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["BONK"],
            class: ["s"]
        }
    },
    {
        name: "Totha",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["BK"],
            class: ["a"]
        }
    },
    {
        name: "Jinhai",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["FEET"],
            class: ["a"]
        }
    },
    {
        name: "Syz",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["MNHR"],
            class: ["r", "a"]
        }
    },
    {
        name: "Asbojack",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["koba"],
            class: ["a"]
        }
    },
    {
        name: "undead corpse",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["NAT", "ikko"],
            class: ["a"]
        }
    },
    {
        name: "Zero",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div3"],
            teams: ["aux-"],
            class: ["s"]
        }
    },
    {
        name: "Kassieti",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["FEET"],
            class: ["a"]
        }
    },
    {
        name: "8Ball",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["MNHR"],
            class: ["a"]
        }
    },
    {
        name: "TorMechia",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["koba"],
            class: ["a"]
        }
    },
    {
        name: "Voodoo",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["koba"],
            class: ["a"]
        }
    },
    {
        name: "Shlup",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["koba"],
            class: ["a"]
        }
    },
    {
        name: "Neotokyonup",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["FEET"],
            class: ["a"]
        }
    },
    {
        name: "Jav",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["FEET"],
            class: ["a"]
        }
    },
    {
        name: "Snood",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["equals"],
            class: ["a"]
        }
    },
    {
        name: "Pyromaniac",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["equals"],
            class: ["a"]
        }
    },
    {
        name: "Iyana",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["equals"],
            class: ["a"]
        }
    },
    {
        name: "Wakfu",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["equals"],
            class: ["a"]
        }
    },
    {
        name: "TakaVerosa",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["equals"],
            class: ["a"]
        }
    },
    {
        name: "Myokonin",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["equals"],
            class: ["a"]
        }
    },
    {
        name: "Scarf",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["MNHR"],
            class: ["a"]
        }
    },
    {
        name: "Izotop",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["MNHR"],
            class: ["a"]
        }
    },
    {
        name: "Yoko",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["MNHR"],
            class: ["a"]
        }
    },
    {
        name: "Brownlordfarquaad",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["MNHR"],
            class: ["a"]
        }
    },
    {
        name: "Sero",
        img: "hx1qvj.png",
        opts: {
            series: ["pug", "div4"],
            teams: ["MNHR"],
            class: ["a"]
        }
    }
];