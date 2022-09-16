import React,{createContext} from "react";
import film1 from "../assets/film1.png";
import film2 from "../assets/film2.png";
import film3 from "../assets/film3.png";
import film4 from "../assets/film4.png";
import film5 from "../assets/film5.png";
import film6 from "../assets/film6.png";

export const GlobalContext = createContext();

export const GlobalProvider=(props)=>{

    return <GlobalContext.Provider value={{films:[{
        id:1,
name:"House of the Dragon",
img:film1,
rating:7.8,
description:"House of the Dragon tells the story of an internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
link:"https://www.imdb.com/title/tt11198330/?ref_=hm_fanfav_tt_t_1_pd_fp1"

    },
    {
        id:2,
        name:"Top Gun: Maverick",
        img:film2,
        rating:5.7,
        description:"After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate.",
        link:"https://www.imdb.com/title/tt1745960/?ref_=hm_fanfav_tt_i_2_pd_fp1"

    },{
        id:3,
        name:"Elvis",
        img:film3,
        rating:8.2,
        description:"The life of American music icon Elvis Presley, from his childhood to becoming a rock and movie star in the 1950s while maintaining a complex relationship with his manager, Colonel Tom Parker.",
        link:"https://www.imdb.com/title/tt3704428/?ref_=hm_tpks_tt_i_2_pd_tp1_pbr_ic"
    },{
        id:4,
name:"The Sandman",
img:film4,
rating:3.3,
description:"Upon escaping after decades of imprisonment by a mortal wizard, Dream, the personification of dreams, sets about to reclaim his lost equipment, sets about to reclaim his lost equipment.",
link:"https://www.imdb.com/title/tt1751634/?ref_=hm_fanfav_tt_i_5_pd_fp1"
    },
    {
        id:5,
        name:"Breaking Bad",
        img:film5,
        rating:6.9,
        description:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        link:"https://www.imdb.com/title/tt0903747/?ref_=hm_fanfav_tt_i_8_pd_fp1"

    },{
        id:6,
        name:"The Black Phone",
        img:film6,
        rating:9.1,
        description:"After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer's previous victims.",
        link:"https://www.imdb.com/title/tt7144666/?ref_=hm_fanfav_tt_i_22_pd_fp1"
    }]}}>{props.children}</GlobalContext.Provider>
}