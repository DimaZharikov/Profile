import {Fragment, lazy} from "react";
import {Redirect, Route, Switch} from 'react-router-dom';
import {withSuspense} from "../common/HOC/withSuspense";
import HomePageComponent from "../PagesComponent/HomePage/HomePagesComponent";
import AboutMeComponent from "../PagesComponent/AboutMe/AboutMeComponent";

// --------------LAZY----------------
const SkillsPageComponent = lazy ( () => import("../PagesComponent/SkillsPage/SkillsPageComponent"));
const PortfolioPageComponent = lazy (() => import("../PagesComponent/PortfolioPage/PortfolioPageComponent"));
const ContactsPageComponent = lazy (() => import("../PagesComponent/ContactsPage/ContactsPageComponent"));
const Errors = lazy (() => import("../PagesComponent/ErrorPage/ErrorContainer"));



//---SUSPENSE ---

const SuspenseSkillsPage = withSuspense(SkillsPageComponent);
const SuspensePortfolioPage = withSuspense(PortfolioPageComponent);
const SuspenseContactsPage = withSuspense(ContactsPageComponent);
const SuspenseError = withSuspense(Errors);


// -- PATH TO COMPONENT

export const PATH = {
    HOME: "/home",
    ABOUT_ME: '/aboutMe',
    SKILLS : '/skills',
    PORTFOLIO : "/portfolio",
    CONTACTS : "/contacts",
    ERROR : "/error"

}



function Routes() {
    return (
        <Fragment>

            <Switch>

                <Route path={"/"} exact render={() => <Redirect to={PATH.HOME}/>}/>

                <Route path={PATH.HOME} render={() => <HomePageComponent/>}/>
                <Route exact    path={PATH.ABOUT_ME} render={() => <AboutMeComponent/>}/>
                <Route  exact path={PATH.SKILLS} render={() => <SuspenseSkillsPage/>}/>
                <Route exact path={PATH.PORTFOLIO} render={() => <SuspensePortfolioPage/>}/>
                <Route exact path={PATH.CONTACTS} render={() => <SuspenseContactsPage/>}/>
                <Route path={PATH.CONTACTS} render={() => <SuspenseContactsPage/>}/>


                {/*ERROR REDIRECTED*/}
                <Route path={PATH.ERROR} render={()=> <SuspenseError/>}/>
                <Redirect from={'*'} to={PATH.ERROR}/>
            </Switch>



        </Fragment>
    );
}

export default Routes;