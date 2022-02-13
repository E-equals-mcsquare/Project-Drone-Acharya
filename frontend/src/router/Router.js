import {HashRouter, Route, Switch} from "react-router-dom"
import Dashboard from "../components/dashboard/Dashboard"
import Homepage from "../components/homepage/Homepage"
import Mapview from "../components/mapview/Mapview"
import ThreeDView from "../components/threedview/TheeDView"

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/dashboard/:usecase" component={Dashboard} exact />
                <Route path="/mapview/:usecase" component={Mapview} exact />
                <Route path="/threedview/:usecase" component={ThreeDView} exact />
            </Switch>
        </HashRouter>
    )
}

export default Router