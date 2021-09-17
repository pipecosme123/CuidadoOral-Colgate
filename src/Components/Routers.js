import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoutersLinks } from '../Constants/RoutersLinks';
import Home from '../Pages/Home';
import Multibeneficios from '../Pages/Multibeneficios';
import Blanqueamiento from '../Pages/Blanqueamiento';
import SaludNatural from '../Pages/SaludNatural';
import CuidadoFamiliar from '../Pages/CuidadoFamiliar';
import Sensibilidad from '../Pages/Sensibilidad';
import Infantil from '../Pages/Infantil';
import Menu from '../Pages/Menu';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={RoutersLinks.home} component={() => <Home></Home>}/>
                <Route exact path={RoutersLinks.menu} component={() => <Menu></Menu>}/>
                <Route exact path={RoutersLinks.multibeneficios} component={() => <Multibeneficios></Multibeneficios>}></Route>
                <Route exact path={RoutersLinks.blanqueamiento} component={() => <Blanqueamiento></Blanqueamiento>}></Route>
                <Route exact path={RoutersLinks.saludNatural} component={() => <SaludNatural></SaludNatural>}></Route>
                <Route exact path={RoutersLinks.cuidadoFamiliar} component={() => <CuidadoFamiliar></CuidadoFamiliar>}></Route>
                <Route exact path={RoutersLinks.sensibilidad} component={() => <Sensibilidad></Sensibilidad>}></Route>
                <Route exact path={RoutersLinks.infantil} component={() => <Infantil></Infantil>}></Route>
            </Switch>
        </Router>
    );
};

export default Routers;