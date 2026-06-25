import AtleticoGO from "../assets/AtleticoGO.png";
//import Blumenau from "../assets/Blumenau.png";
import BoaVista from "../assets/BoaVista.jpeg";
import Caravaggio from "../assets/Caravaggio.png";
//import CRB from "../assets/CRB.png";
import Criciuma from "../assets/Criciuma.png";
//import Cuiaba from "../assets/Cuiaba.png";
import DomPedroII from "../assets/DomPedroII.jpeg";
import Fluminense from "../assets/Fluminense.png";
//import GuaraniDePalhoca from "../assets/GuaraniDePalhoca.png";
import HercilioLuz from "../assets/HercilioLuz.png";
import Juventude from "../assets/Juventude.png";
import Juventus from "../assets/Juventus.png";
import Metropolitano from "../assets/Metropolitano.png";
//import NacaoEsportes from "../assets/NacaoEsportes.png";
import OperarioFerroviario from "../assets/OperarioFerroviario.png";
import SCJaraguaDoSul from "../assets/SCJaraguaDoSul.png";
import SaoJose from "../assets/SaoJose.jpeg";
import SerLiri from "../assets/SerLiri.jpeg";
import Tubarao from "../assets/Tubarao.png";

//import AmigosdoBoaVista from "../assets/AmigosdoBoaVista.png";
import ArgentinaEsporteClube from "../assets/ArgentinaEsporteClube.jpg";
import BairroMichel from "../assets/BairroMichel.png";
import ECSaoJose from "../assets/ECSaoJose.png";
import LionsEsporteClube from "../assets/LionsEsporteClube.png";
import Metropol from "../assets/Metropol.png";
import OuroPreto from "../assets/OuroPreto.png";
import PexingaColonial from "../assets/PexingaColonial.png";
import Pnegao from "../assets/Pnegao.jpg";
import SaoMarcosFC from "../assets/SaoMarcosFC.jpg";
import TigreUnited from "../assets/TigreUnited.png";
import UnidosSantaLuzia from "../assets/UnidosSantaLuzia.jpg";

import TimeNaoDefinido from "../assets/TimeNaoDefinido.png"

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
        live: false,

        channels: [
            "Globo",
            "Premiere"
        ]
    },
];

export const recentMatches = [
    {
        id: 1,

        championship: "Campeonato Municipal de Criciúma",
        //stadium: "Arena Pantanal",

        homeTeam: "Argentina",
        awayTeam: "Pnegão",

        homeLogo: ArgentinaEsporteClube,
        awayLogo: Pnegao,

        homeScore: 2,
        awayScore: 3,

        //date: "02/05/2026",
        //time: "xx:xx",
        status: "Encerrado",

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    {
        id: 2,

        championship: "Campeonato Municipal de Criciúma",
        //stadium: "Heriberto Hulse",

        homeTeam: "São Marcos",
        awayTeam: "Unidos Santa Luzia",

        homeLogo: SaoMarcosFC,
        awayLogo: UnidosSantaLuzia,

        homeScore: 0,
        awayScore: 1,

        //date: "26/04/2026",
        //time: "xx:xx",
        //status: "Encerrado",

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    {
        id: 3,

        championship: "Campeonato Municipal de Criciúma",
        //stadium: "Aníbal Torres Costa",

        homeTeam: "Pexinga Colonial",
        awayTeam: "Metropol",

        homeLogo: PexingaColonial,
        awayLogo: Metropol,

        homeScore: 3,
        awayScore: 0,

        //date: "10/05/2026",
        //time: "xx:xx",
        status: "Encerrado",

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    {
        id: 4,

        championship: "Campeonato Catarinense Série B",
        //stadium: "Arena Joinville",

        homeTeam: "Boa Vista",
        awayTeam: "São José",

        homeLogo: Fluminense,
        awayLogo: ECSaoJose,

        homeScore: 1,
        awayScore: 0,

        //date: "06/05/2026",
        //time: "20:00",
        status: "Encerrado",

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    {
        id: 5,

        championship: "Campeonato Catarinense Série B",
        //stadium: "Aníbal Torres Costa",

        homeTeam: "Michel",
        awayTeam: "Ouro Preto",

        homeLogo: BairroMichel,
        awayLogo: OuroPreto,

        homeScore: 0,
        awayScore: 15,

        //date: "13/05/2026",
        //time: "15:00",
        status: "Encerrado",

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    {
        id: 6,

        championship: "Campeonato Catarinense Série B",
        //stadium: "Estádio da Montanha (SC)",

        homeTeam: "Lions",
        awayTeam: "Tigre United",

        homeLogo: LionsEsporteClube,
        awayLogo: TigreUnited,

        homeScore: 8,
        awayScore: 1,

        //date: "10/05/2026",
        //time: "15:00",
        status: "Encerrado",

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    /*{
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
        status: "Encerrado",

        channels: [
            "Globo",
            "Premiere"
        ]
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
        status: "Encerrado",

        channels: [
            "Globo",
            "Premiere"
        ]
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
        status: "Encerrado",

        channels: [
            "Globo",
            "Premiere"
        ]
    },

    {
        id: 10,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Arena Pantanal",

        homeTeam: "Cuiabá",
        awayTeam: "Criciúma",

        homeLogo: Cuiaba,
        awayLogo: Criciuma,

        homeScore: 1,
        awayScore: 1,

        date: "02/05/2026",
        time: "18:30",
        status: "Encerrado",

        channels: [
            "Globo",
            "Premiere"
        ]
    },

    {
        id: 11,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Heriberto Hulse",

        homeTeam: "Criciúma",
        awayTeam: "CRB",

        homeLogo: Criciuma,
        awayLogo: CRB,

        homeScore: 3,
        awayScore: 1,

        date: "26/04/2026",
        time: "20:30",
        status: "Encerrado",

        channels: [
            "Globo",
            "Premiere"
        ]
    },*/
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
        status: "Marcado",

        channels: [
            "Globo",
            "Premiere"
        ]
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
        status: "Marcado",

        channels: [
            "Globo",
            "Premiere"
        ]
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
        status: "Marcado",

        channels: [
            "Globo",
            "Premiere"
        ]
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
        status: "Marcado",

        channels: [
            "Globo",
            "Premiere"
        ]
    },

    {
        id: 5,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Heriberto Hulse",

        homeTeam: "Tubarão",
        awayTeam: "Atlético-GO",

        homeLogo: Criciuma,
        awayLogo: AtleticoGO,

        //homeScore: 2,
        //awayScore: 0,

        date: "17/05/2026",
        time: "18:30",
        status: "Marcado",

        channels: [
            "Globo",
            "Premiere"
        ]
    },

    /* {
        id: 5,

        championship: "Campeonato Brasileiro Série B",
        stadium: "Estádio Germano Krüger",

        homeTeam: "Operário",
        awayTeam: "Criciúma",

        homeLogo: OperarioFerroviario,
        awayLogo: Criciuma,

        //homeScore: 2,
        //awayScore: 0,

        date: "24/05/2026",
        time: "20:30",
        status: "Marcado"
    },*/

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
        },

        {
            id: 3,
            opponent: "Atlético-GO",
            date: "17/05",
            time: "18:30"
        },

        /*{
            id: 4,
            opponent: "Operário",
            date: "24/05",
            time: "20:30"
        }*/
    ],

    Juventude: [
        {
            id: 5,
            opponent: "Grêmio",
            date: "21/05",
            time: "18:00"
        }
    ],

    Hercílio_Luz: [
        {
            id: 6,
            opponent: "Juventus-SC",
            date: "24/05",
            time: "15:00"
        }

    ],

    Juventus_SC: [
        {
            id: 7,
            opponent: "Hercílio Luz",
            date: "24/05",
            time: "15:00"
        }

    ],

    Jaraguá_SC: [
        {
            id: 8,
            opponent: "Caravaggio",
            date: "17/05",
            time: "15:00"
        }

    ],

    Caravaggio: [
        {
            id: 9,
            opponent: "Jaraguá-SC",
            date: "17/05",
            time: "15:00"
        },

        {
            id: 10,
            opponent: "Tubarão",
            date: "24/05",
            time: "15:00"
        }

    ],

    Tubarão: [
        {
            id: 11,
            opponent: "Caravaggio",
            date: "24/05",
            time: "15:00"
        },

        {
            id: 12,
            opponent: "Metropolitano",
            date: "16/05",
            time: "15:00"
        },
    ],

    Metropolitano: [
        {
            id: 13,
            opponent: "Tubarão",
            date: "16/05",
            time: "15:00"
        }
    ],

    Atlético_GO: [
        {
            id: 14,
            opponent: "Criciúma",
            date: "17/05",
            time: "18:30"
        }
    ],

    Operário: [
        {
            id: 15,
            opponent: "Criciúma",
            date: "24/05",
            time: "20:30"
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
    },

    {
        id: 9,
        name: "Atlético_GO",
        logo: AtleticoGO
    },

    {
        id: 10,
        name: "Operário",
        logo: OperarioFerroviario
    },

    {
        id: 11,
        name: "Boa_Vista",
        logo: BoaVista
    },

    {
        id: 12,
        name: "Dom_Pedro_II",
        logo: DomPedroII
    },

    {
        id: 13,
        name: "São_José",
        logo: SaoJose
    },

    {
        id: 14,
        name: "Ser_Liri",
        logo: SerLiri
    },
];

export const championships = [
    {
        id: 0,
        name: "Todos"
    },
    {
        id: 1,
        name: "Campeonato Municipal de Criciúma"
    },
    {
        id: 2,
        name: "Campeonato Municipal de Içara"
    },
    {
        id: 3,
        name: "Campeonato Municipal de Forquilhinha"
    },
    {
        id: 4,
        name: "Campeonato Municipal de Araranguá"
    },
    {
        id: 5,
        name: "Campeonato Municipal de Tubarão"
    }
];

export const championshipFeaturedMatches = [

    // BRASILEIRÃO

    {
        id: 1,
        championship: "Campeonato Municipal de Criciúma",
        stadium: "Maracanã",

        homeTeam: "Flamengo",
        awayTeam: "Palmeiras",

        homeLogo: Criciuma,
        awayLogo: AtleticoGO,

        homeScore: 2,
        awayScore: 1,

        status: "Primeiro tempo",
        time: "35:00",
        live: true,

        channels: [
            "Globo",
            "Premiere"
        ]
    },

    {
        id: 2,
        championship: "Campeonato Municipal de Criciúma",
        stadium: "Neo Química Arena",

        homeTeam: "Corinthians",
        awayTeam: "São Paulo",

        homeLogo: Criciuma,
        awayLogo: AtleticoGO,

        homeScore: 0,
        awayScore: 0,

        status: "Primeiro tempo",
        time: "15:00",
        live: true,

        channels: [
            "Globo",
            "Premiere"
        ]
    },

    {
        id: 3,
        championship: "Campeonato Municipal de Criciúma",
        stadium: "Beira-Rio",

        homeTeam: "Internacional",
        awayTeam: "Grêmio",

        homeLogo: Criciuma,
        awayLogo: AtleticoGO,

        homeScore: 1,
        awayScore: 1,

        status: "Segundo tempo",
        time: "60:00",
        live: true,

        channels: [
            "Globo",
            "Premiere"
        ]
    },

    // COPA DO BRASIL
    {
        id: 4,
        championship: "Campeonato Municipal de Içara",
        stadium: "Estádio da Associação Liri",

        homeTeam: "Boa Vista",
        awayTeam: "Barracão",

        homeLogo: TimeNaoDefinido,
        awayLogo: TimeNaoDefinido,

        homeScore: 0,
        awayScore: 0,

        status: "Marcado",
        time: "28/06/2026 15:00",
        live: false,

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    {
        id: 5,
        championship: "Campeonato Municipal de Içara",
        stadium: "Estádio da Esplanada",

        homeTeam: "Dom Pedro II",
        awayTeam: "Caiçara",

        homeLogo: TimeNaoDefinido,
        awayLogo: TimeNaoDefinido,

        homeScore: 0,
        awayScore: 0,

        status: "Marcado",
        time: "28/06/2026 00:00",
        live: false,

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    {
        id: 6,
        championship: "Campeonato Municipal de Içara",
        stadium: "Local não definido",

        homeTeam: "São José",
        awayTeam: "Vila Nova",

        homeLogo: TimeNaoDefinido,
        awayLogo: TimeNaoDefinido,

        homeScore: 0,
        awayScore: 0,

        status: "Marcado",
        time: "28/06/2026 00:00",
        live: false,

        /*channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    // LIBERTADORES
    {
        id: 7,
        championship: "Campeonato Municipal de Içara",
        stadium: "Local não definido",

        homeTeam: "Juventus",
        awayTeam: "Ser Liri",

        homeLogo: TimeNaoDefinido,
        awayLogo: TimeNaoDefinido,

        homeScore: 0,
        awayScore: 0,

        status: "Marcado",
        time: "28/06/2026 00:00",
        live: false,

        /* channels: [
            "Globo",
            "Premiere"
        ]*/
    },

    {
        id: 8,
        championship: "Campeonato Municipal de Forquilhinha",
        stadium: "Defensores del Chaco",

        homeTeam: "Olimpia",
        awayTeam: "Nacional",

        homeLogo: Criciuma,
        awayLogo: AtleticoGO,

        homeScore: 0,
        awayScore: 0,

        status: "Primeiro tempo",
        time: "12:00",
        live: true,

        channels: [
            "Globo",
            "Premiere"
        ]
    },

    {
        id: 9,
        championship: "Campeonato Municipal de Forquilhinha",
        stadium: "Centenário",

        homeTeam: "Peñarol",
        awayTeam: "Flamengo",

        homeLogo: Criciuma,
        awayLogo: AtleticoGO,

        homeScore: 1,
        awayScore: 2,

        status: "Segundo tempo",
        time: "70:00",
        live: true,

        channels: [
            "Globo",
            "Premiere"
        ]
    }
];

export const todayMatches = [
    {
        id: 1,
        championship: "Campeonato Municipal de Criciúma",

        homeTeam: "Flamengo",
        awayTeam: "Palmeiras",

        homeLogo: Criciuma,
        awayLogo: Fluminense,

        homeScore: 2,
        awayScore: 1,

        time: "16:00",

        channels: [
            "ESPN",
            "Disney+"
        ]
    },

    {
        id: 2,
        championship: "Campeonato Municipal de Içara",

        homeTeam: "River Plate",
        awayTeam: "Boca Juniors",

        homeLogo: Criciuma,
        awayLogo: Fluminense,

        homeScore: 0,
        awayScore: 0,

        time: "19:30",

        channels: [
            "ESPN",
            "Disney+"
        ]
    },

    {
        id: 3,
        championship: "Campeonato Municipal de Forquilhinha",

        homeTeam: "Cruzeiro",
        awayTeam: "Atlético-MG",

        homeLogo: Criciuma,
        awayLogo: Fluminense,

        homeScore: 1,
        awayScore: 1,

        time: "21:00",

        channels: [
            "Globo",
            "Premiere"
        ]

    }
];

export const icarenseTable = [
    {
        position: 1,
        team: "Boa_Vista",
        logo: BoaVista,
        points: 25,
        games: 10,
        wins: 8,
        draws: 1,
        losses: 1
    },

    {
        position: 2,
        team: "Ser_Liri",
        logo: SerLiri,
        points: 22,
        games: 10,
        wins: 7,
        draws: 1,
        losses: 2
    },

    {
        position: 3,
        team: "Dom_Pedro_II",
        logo: DomPedroII,
        points: 21,
        games: 10,
        wins: 6,
        draws: 3,
        losses: 1
    },

    {
        position: 4,
        team: "Boa_Vista",
        logo: BoaVista,
        points: 18,
        games: 10,
        wins: 5,
        draws: 3,
        losses: 2
    }
];