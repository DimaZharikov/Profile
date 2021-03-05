import React from "react";


interface TypeSkillData {
    images: string,
    title: string,
    description: string,
}

const size = 64

export const SkillData: Array<TypeSkillData> = [


    {
        images: `https://img.icons8.com/nolan/${size}/react-native.png`,
        title: "React.JS",
        description: "React.js, a comprehensive JavaScript library for building user interfaces, has changed the way we " +
            "think about front-end development. React.js has grasped the interest of the open source community and it " +
            "is here to stay. However, the nuances and idiosyncrasies of React.js require extra caution when " +
            "distinguishing between good JavaScript developers and true experienced React.js developers."
    },
    {
        images: `https://img.icons8.com/nolan/96/javascript.png`,
        title: "JavaScript & TypeScript",
        description: "JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with" +
            " first-class functions, and is best known as the scripting language for Web pages, but it's used in many" +
            " non-browser environments as well." + "TypeScript is a strict syntactical superset of JavaScript and adds " +
            "optional static typing to the language."

    },
    {
        images: `https://img.icons8.com/nolan/${size}/api-settings.png`,
        title: "REST API without Thunks and Saga, axios",
        description: "A REST API (also known as RESTful API) is an application programming interface that conforms to " +
            "the constraints of REST architecture. "
    },


    {
        images: `https://img.icons8.com/color/96/ffffff/css3.png`,
        title: 'CSS & SCSS, SASS, LESS',
        description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a" +
            " document written in a markup language such as HTML."
    },

    {
        images: `https://img.icons8.com/color/96/ffffff/redux.png`,
        title: "Redux",
        description: "Redux is an open-source JavaScript library for managing application state"
    },
    {
        images: `https://img.icons8.com/color/96/ffffff/html-5.png`,
        title: "HTML5",
        description: "HTML5 is a markup language used for structuring and presenting content on the World Wide Web."

    },


]