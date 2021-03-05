import {PATH} from "../../Routes/Routes";


interface Type {
    path : string,
    title: string

}

export const NavigationData : Type[] = [
    {
        title: 'HOME',
        path:PATH.HOME,

    },
    {
        title: 'ABOUT ME',
        path:PATH.ABOUT_ME,

    },
    {
        title: 'SKILLS',
        path: PATH.SKILLS,

    },
    {
        title: 'CONTACT',
        path:PATH.CONTACTS,

    },


]