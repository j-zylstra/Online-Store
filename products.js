

const products = [



    //BASS GUITARS
    {
    id: 0,
    type: "bass",
    name: "Ibanez-B4",
    price: 699.99,
    instock: 20,
    description: "",
    imgSrc: "/images/bass.jpg",
    },

    {
    id: 1,
    type: "bass",
    name: "F-4 Black Metal",
    price: 1199.99,
    instock: 20,
    description: "",
    imgSrc: "/images/black-metal.bass.jpg",
    },

    {
    id: 2,
    type: "bass",
    name: "EuroBolt 4 Inferno",
    price: 2499.99,
    instock: 20,
    description: "",
    imgSrc: "/images/inferno.bass.jpg",
    },

    {
    id: 3,
    type: "bass",
    name: "Vintage Sunburst",
    price: 449.99,
    instock: 20,
    description: "",
    imgSrc: "/images/viola.bass.jpg",
    },

    {
    id: 4,
    type: "bass",
    name: "Fender Jaguar Signature",
    price: 1599.99,
    instock: 20,
    description: "",
    imgSrc: "/images/orange.bass.jpg",
    },

    {
    id: 5,
    type: "bass",
    name: "BFR DarkRay Bass",
    price: 3099.99,
    instock: 20,
    description: "",
    imgSrc: "/images/wood.bass.jpg",
    },





    //NEWEST GUITARS
    {
    id: 10,
    type: "new",
    name: "Strandberg NX 7",
    price: 2295.99,
    instock: 20,
    description: "",
    imgSrc: "/images/nx7.new.jpg",
    },

    {
    id: 11,
    type: "new",
    name: "Reaper",
    price: 499.99,
    instock: 20,
    description: "",
    imgSrc: "/images/reaper.webp",
    },

    {
    id: 12,
    type: "new",
    name: "Signature Cutlass HH 7",
    price: 3799.99,
    instock: 20,
    description: "",
    imgSrc: "/images/cutlass.new.jpg",
    },

    {
    id: 13,
    type:"new",
    name: "Iron Bird",
    price: 949.99,
    instock: 20,
    description: "",
    imgSrc: "/images/ironbird.new.jpg",
    },

    {
    id: 14,
    type: "new",
    name: "Acousta-Sonic",
    price: 659.99,
    instock: 20,
    description: "",
    imgSrc: "/images/sonic.new.jpg",
    },

    {
    id: 15,
    type: "new",
    name: "Ibanez T10",
    price: 679.99,
    instock: 20,
    description: "",
    imgSrc: "/images/ibanez.new.jpg",
    },




    //CLASSIC GUITARS
    {
    id: 20,
    type: "classic",
    name: "Stratocaster",
    price: 699.99,
    instock: 20,
    description: "",
    imgSrc: "/images/white-fender.jpg",
    },

    {
    id: 21,
    type: "classic",
    name: "Epiphone-SG",
    price: 339.99,
    instock: 20,
    description: "",
    imgSrc: "/images/Classic-Ep.jpg",
    },

    {
    id: 22,
    type: "classic",
    name: "Gibson-Dual",
    price: 889.99,
    instock: 20,
    description: "",
    imgSrc: "/images/Epiphone-Classic.jpg",
    },

    {
    id: 23,
    type: "classic",
    name: "Fender Telecaster",
    price: 659.99,
    instock: 20,
    description: "",
    imgSrc: "/images/tele.classic.jpg",
    },

    {
    id: 24,
    type: "classic",
    name: "Gibson Custom Flying V",
    price: 5499.99,
    instock: 20,
    description: "",
    imgSrc: "/images/flying-v.classic.jpg",
    },

    {
    id: 25,
    type: "classic",
    name: "Heritage SG",
    price: 1799.99,
    instock: 20,
    description: "",
    imgSrc: "/images/heritage-sg.classic.jpg",
    },




    //ACCESSORIES
    {
    id: 30,
    type: "accessories",
    name: "Chorus-Pedal",
    price: 249.99,
    instock: 20,
    description: "",
    imgSrc: "/images/Chorus-Pedal.jpg",
    },

    {
    id: 31,
    type: "accessories",
    name: "DCV9-Nobel",
    price: 319.99,
    instock: 20,
    description: "",
    imgSrc: "/images/Nobels-DC9V-Pedal.jpg",
    },

    {
    id: 32,
    type: "accessories",
    name: "Vibrato Pedal ",
    price: 279.99,
    instock: 20,
    description: "",
    imgSrc: "/images/walrus.access.jpg",
    },

    {
    id: 33,
    type: "accessories",
    name: "Revelation Cable",
    price: 249.99,
    instock: 20,
    description: "",
    imgSrc: "/images/Rev-Cable.jpg",
    },

    {
    id: 34,
    type: "accessories",
    name: "Rombo Picks",
    price: 7.99,
    instock: 20,
    description: "",
    imgSrc: "/images/guitar-pick.access.jpg",
    },

    {
    id: 35,
    type: "accessories",
    name: "Clip Guitar Tuner",
    price: 49.99,
    instock: 20,
    description: "",
    imgSrc: "/images/tuner.access.jpg",
    },




    //SALE
    {
    id: 40,
    type: "sale",
    name: "Jackson-V66",
    price: 249.99,
    oldPrice: 489.99,
    instock: 20,
    description: "",
    imgSrc: "/images/jackson.webp",
    },

    {
    id: 41,
    type: "sale",
    name: "Squire Vintage Strat",
    price: 164.99,
    oldPrice: 329.99,
    instock: 20,
    description: "",
    imgSrc: "/images/strat.sale.jpg",
    },

    {
    id: 42,
    type: "sale",
    name: "McCarty 594",
    price: 344.99,
    oldPrice: 689.99,
    instock: 20,
    description: "",
    imgSrc: "/images/blue.sale.jpg",
    },

    {
    id: 43,
    type: "sale",
    name: "D'Angelico Mini DC XT",
    price: 899.99,
    oldPrice: 1689.99,
    instock: 20,
    description: "",
    imgSrc: "/images/angelico.sale.jpg",
    },

    {
    id: 44,
    type: "sale",
    name: "1968 Les Paul Custom",
    price: 2359.99,
    oldPrice: 1999.99,
    instock: 20,
    description: "",
    imgSrc: "/images/gibson.sale.jpg",
    },

    {
    id: 45,
    type: "sale",
    name: "Vintage 1977 Telecaster",
    price: 1659.99,
    oldPrice: 1289.99,
    instock: 20,
    description: "",
    imgSrc: "/images/tele.sale.jpg",
    },

]



