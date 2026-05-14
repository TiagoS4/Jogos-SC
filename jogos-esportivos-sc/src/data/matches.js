import AtleticoGO from "../assets/AtleticoGO.png";
import Blumenau from "../assets/Blumenau.png";
import Caravaggio from "../assets/Caravaggio.png";
import CRB from "../assets/CRB.png";
import Criciuma from "../assets/Criciuma.png";
import Cuiaba from "../assets/Cuiaba.png";
import Fluminense from "../assets/Fluminense.png";
import GuaraniDePalhoca from "../assets/GuaraniDePalhoca.png";
import HercilioLuz from "../assets/HercilioLuz.png";
import Juventude from "../assets/Juventude.png";
import Juventus from "../assets/Juventus.png";
import Metropolitano from "../assets/Metropolitano.png";
import NacaoEsportes from "../assets/NacaoEsportes.png";
import OperarioFerroviario from "../assets/OperarioFerroviario.png";
import SCJaraguaDoSul from "../assets/SCJaraguaDoSul.png";
import Tubarao from "../assets/Tubarao.png";

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
        time: "21:15",
        date: "09/05/2026",
        live: false
    },
];

export const recentMatches = [
    {
        id: 1,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Arena Pantanal",

        homeTeam: "Cuiabá",
        awayTeam: "Criciúma",

        homeLogo: Cuiaba,
        awayLogo: Criciuma,

        homeScore: 1,
        awayScore: 1,

        date: "02/05/2026",
        time: "xx:xx",
        status: "Encerrado"
    },

    {
        id: 2,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Heriberto Hulse",

        homeTeam: "Criciúma",
        awayTeam: "CRB",

        homeLogo: Criciuma,
        awayLogo: CRB,

        homeScore: 3,
        awayScore: 1,

        date: "26/04/2026",
        time: "xx:xx",
        status: "Encerrado"
    },

    {
        id: 3,

        championship: "Campeonato Catarinense Série B",
        stadium: "Aníbal Torres Costa",

        homeTeam: "Hercílio Luz",
        awayTeam: "Guarani de Palhoça",

        homeLogo: HercilioLuz,
        awayLogo: GuaraniDePalhoca,

        homeScore: 6,
        awayScore: 0,

        date: "10/05/2026",
        time: "xx:xx",
        status: "Encerrado"
    },

    {
        id: 4,

        championship: "Campeonato Catarinense Série B",
        stadium: "Arena Joinville",

        homeTeam: "Fluminense",
        awayTeam: "Hercílio Luz",

        homeLogo: Fluminense,
        awayLogo: HercilioLuz,

        homeScore: 1,
        awayScore: 0,

        date: "06/05/2026",
        time: "20:00",
        status: "Encerrado"
    },

    {
        id: 5,

        championship: "Campeonato Catarinense Série B",
        stadium: "Aníbal Torres Costa",

        homeTeam: "Hercílio Luz",
        awayTeam: "Blumenau",

        homeLogo: HercilioLuz,
        awayLogo: Blumenau,

        homeScore: 0,
        awayScore: 1,

        date: "13/05/2026",
        time: "15:00",
        status: "Encerrado"
    },

    {
        id: 6,

        championship: "Campeonato Catarinense Série B",
        stadium: "Estádio da Montanha (SC)",

        homeTeam: "Caravaggio",
        awayTeam: "Metropolitano",

        homeLogo: Caravaggio,
        awayLogo: Metropolitano,

        homeScore: 2,
        awayScore: 0,

        date: "10/05/2026",
        time: "15:00",
        status: "Encerrado"
    },

    {
        id: 7,

        championship: "Campeonato Catarinense Série B",
        stadium: "Renato Silveira",

        homeTeam: "Guarani de Palhoça",
        awayTeam: "Caravaggio",

        homeLogo: GuaraniDePalhoca,
        awayLogo: Caravaggio,

        homeScore: 1,
        awayScore: 1,

        date: "06/05/2026",
        time: "15:00",
        status: "Encerrado"
    },

    {
        id: 8,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Arena Joinville",

        homeTeam: "Nação Esportes",
        awayTeam: "Tubarão",

        homeLogo: NacaoEsportes,
        awayLogo: Tubarao,

        homeScore: 0,
        awayScore: 0,

        date: "12/05/2026",
        time: "19:30",
        status: "Encerrado"
    },

    {
        id: 9,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Domingos Gonzales",

        homeTeam: "Tubarão",
        awayTeam: "Jaraguá-SC",

        homeLogo: Tubarao,
        awayLogo: SCJaraguaDoSul,

        homeScore: 1,
        awayScore: 1,

        date: "06/05/2026",
        time: "15:00",
        status: "Encerrado"
    },
];

export const upcomingMatches = [
    {
        id: 1,

        championship: "Campeonato Brasileiro Série B",
        stadium: "João Marcatto",

        homeTeam: "Juventus-SC",
        awayTeam: "Hercílio Luz",

        homeLogo: Juventus,
        awayLogo: HercilioLuz,

        //homeScore: 2,
        //awayScore: 0,

        date: "26/05/2026",
        time: "15:00",
        status: "Marcado"
    },

    {
        id: 2,

        championship: "Campeonato Brasileiro Série B",
        stadium: "João Marcatto",

        homeTeam: "Jaraguá-SC",
        awayTeam: "Caravaggio",

        homeLogo: SCJaraguaDoSul,
        awayLogo: Caravaggio,

        //homeScore: 2,
        //awayScore: 0,

        date: "17/05/2026",
        time: "15:00",
        status: "Marcado"
    },

    {
        id: 3,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Domingos Gonzalez",

        homeTeam: "Tubarão",
        awayTeam: "Caravaggio",

        homeLogo: Tubarao,
        awayLogo: Caravaggio,

        //homeScore: 2,
        //awayScore: 0,

        date: "24/05/2026",
        time: "15:00",
        status: "Marcado"
    },

    {
        id: 4,

        championship: "Campeonato Brasileiro Série B",
        stadium: "SESI Blumenau",

        homeTeam: "Metropolitano",
        awayTeam: "Tubarão",

        homeLogo: Metropolitano,
        awayLogo: Tubarao,

        //homeScore: 2,
        //awayScore: 0,

        date: "16/05/2026",
        time: "15:00",
        status: "Marcado"
    },

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
    ],

    Hercílio_Luz: [
        {
            id: 4,
            opponent: "Juventus-SC",
            date: "24/05",
            time: "15:00"
        }

    ],

    Juventus_SC: [
        {
            id: 5,
            opponent: "Hercílio Luz",
            date: "24/05",
            time: "15:00"
        }

    ],

    Jaraguá_SC: [
        {
            id: 6,
            opponent: "Caravaggio",
            date: "17/05",
            time: "15:00"
        }

    ],

    Caravaggio: [
        {
            id: 7,
            opponent: "Jaraguá-SC",
            date: "17/05",
            time: "15:00"
        },

        {
            id: 8,
            opponent: "Tubarão",
            date: "24/05",
            time: "15:00"
        }

    ],

    Tubarão: [
        {
            id: 9,
            opponent: "Caravaggio",
            date: "24/05",
            time: "15:00"
        },

        {
            id: 10,
            opponent: "Metropolitano",
            date: "16/05",
            time: "15:00"
        },
    ],

    Metropolitano: [
        {
            id: 11,
            opponent: "Tubarão",
            date: "16/05",
            time: "15:00"
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
    },

    {
        id: 3,
        name: "Hercílio_Luz",
        logo: HercilioLuz
    },

    {
        id: 4,
        name: "Juventus_SC",
        logo: Juventus
    },

    {
        id: 5,
        name: "Jaraguá_SC",
        logo: SCJaraguaDoSul
    },

    {
        id: 6,
        name: "Caravaggio",
        logo: Caravaggio
    },

    {
        id: 7,
        name: "Tubarão",
        logo: Tubarao
    },

    {
        id: 8,
        name: "Metropolitano",
        logo: Metropolitano
    }
];