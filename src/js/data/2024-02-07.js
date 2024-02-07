dataSetVersion = "2024-02-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Puggers", key: "pug" },
      { name: "Division 1", key: "div1" }
    ]
  },
  {
    name: "Filter by Teams",
    key: "teams",
    tooltip: "Check this to restrict to teams.",
    checked: false,
    sub: [
      { name: "WIN", key: "win" },
      { name: "GB", key: "gb" }
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
      series: ["pug"]
    }
  },
  {
    name: "Infrequent",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Halcyon",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Wahaha",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Rain",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Kudegra",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Jef",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Agiel",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Persica",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Nevra",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Kinoko",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Neotokyoscrub",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Milk",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Shazam",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "blaberry",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Puddy",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },  {
    name: "Rusher",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },  {
    name: "Miso",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "XX",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Phorce",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "ningurist",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Dommler",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Nutnoze",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Masterkatze",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Shinra",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "3LOW",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Hosomi",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Devastator",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Marterzon",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Talibus",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Hyacinth",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Boon",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Ace of Hearts",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "DRT",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Average",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Glitcher",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Serbian guy",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "soft as HELL",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "bauxite",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Boltronics",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "StellaNova",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Grass",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Legoracer",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "Moffin",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "You're Pissed Off",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  },
  {
    name: "DESTROYGIRL",
    img: "hx1qvj.png",
    opts: {
      series: ["pug"]
    }
  }
];
