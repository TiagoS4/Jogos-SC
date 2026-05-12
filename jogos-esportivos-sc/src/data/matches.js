import Criciuma from "../assets/Criciuma.png";
import Juventude from "../assets/Juventude.png"

export const featuredMatches = [
    {
        id: 1,
        championship: "Campeonato Brasileiro Série B",
        stadium: "Alfredo Jaconi",
        homeTeam: "Criciúma",
        awayTeam: "Juventude",
        homeLogo: Criciuma,
        awayLogo: Juventude,
        homeScore: 0,
        awayScore: 0,
        status: "Encerrado",
        time: "19:00 - 21:00",
        date: "09/05/2026",
        live: false
    },
];

export const recentMatches = [
    {
        id: 2,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Alfredo Jaconi",

        homeTeam: "Criciúma",
        awayTeam: "Juventude",

        homeLogo: Criciuma,
        awayLogo: Juventude,

        homeScore: 2,
        awayScore: 0,

        date: "10/05/2026",
        time: "19:00",
        status: "Encerrado"
    },

    {
        id: 3,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Alfredo Jaconi",

        homeTeam: "Criciúma",
        awayTeam: "Juventude",

        homeLogo: Criciuma,
        awayLogo: Juventude,

        homeScore: 2,
        awayScore: 0,

        date: "10/05/2026",
        time: "19:00",
        status: "Encerrado"
    }
];

export const upcomingMatches = [
    {
        id: 4,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Alfredo Jaconi",

        homeTeam: "Criciúma",
        awayTeam: "Juventude",

        homeLogo: Criciuma,
        awayLogo: Juventude,

        homeScore: 2,
        awayScore: 0,

        date: "10/05/2026",
        time: "19:00",
        status: "Encerrado"
    },

    {
        id: 5,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Alfredo Jaconi",

        homeTeam: "Criciúma",
        awayTeam: "Juventude",

        homeLogo: Criciuma,
        awayLogo: Juventude,

        homeScore: 2,
        awayScore: 0,

        date: "10/05/2026",
        time: "19:00",
        status: "Encerrado"
    }
];

export const teamUpcomingMatches = {
    Criciúma: [
        {
            id: 1,
            opponent: "Corinthians",
            date: "20/05",
            time: "19:00"
        },

        {
            id: 2,
            opponent: "São Paulo",
            date: "25/05",
            time: "21:30"
        }
    ],

    Juventude: [
        {
            id: 3,
            opponent: "Grêmio",
            date: "21/05",
            time: "18:00"
        }
    ]
};

export const teams = [
    {
        id: 1,
        name: "Criciúma",
        logo: Criciuma
    },

    {
        id: 2,
        name: "Juventude",
        logo: Juventude
    }
];