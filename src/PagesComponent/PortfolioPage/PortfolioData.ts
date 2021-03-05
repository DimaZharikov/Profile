import rick from "./../../immages/rick.png"
import soc  from "./../../immages/sociale.jpg"
import todo from "./../../immages/todos.jpg"
import card from "./../../immages/cards.jpg"



interface typesPortfolio{
    title: string,
    description: string,
    urlWatch: string,
    urlCode: string,
    img?: any

}

export const PortfolioData : Array<typesPortfolio> = [
    {
        title: "Social network",
        description: "A semblance of a social network. This site contains requests like Thunk, WebSocet in the form " +
            "of a chat. Login and control of pages. Back-End from https://social-network.samuraijs.com/. For cross lay " +
            "out using ant.design. For go in use : LogIn: free@samuraijs.com  Password: free"
          ,
        urlWatch: "https://DimaZharikov.github.io/socialePageRedux/",
        urlCode: "https://github.com/DimaZharikov/socialePageRedux",
        img: soc
    },
    {
        title: "ToDoList",
        description: "To Do List. With filling forms and sending to the Back-End all the records required to work with " +
            "this SPA. Requests are executed in the form of Axios and Thunk. That was writing in : Redux and Redux-Toolkit",
        urlWatch: "https://dimazharikov.github.io/todolist/#/",
        urlCode: "https://github.com/DimaZharikov/todolist",
        img: todo
    },
    {
        title: "Cards",
        description: "The user can receive data released on the local server, as well as on the Heroku server." +
            " Basic requests are made for Axios and Thunk.",
        urlWatch: "https://dimazharikov.github.io/Part16_dev/#/auth",
        urlCode:"https://github.com/DimaZharikov/Part16_dev",
        img: card
    },
    {
        title: 'Rick and Morty',
        description: "Requests to the public API address rickandmortyapi.com. The ability to obtain data on all the " +
            "characters in a given cartoon. Rest API: Saga",
        urlWatch: "https://dimazharikov.github.io/rickandmortyResponse/#/person",
        urlCode: "https://github.com/DimaZharikov/rickandmortyResponse",
        img:rick
    }
]