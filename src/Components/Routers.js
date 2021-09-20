import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoutersLinks } from '../Constants/RoutersLinks';
import { Multibeneficios, Blanqueamiento, Natural, Familiar, Sensibilidad, Infantil } from '../Constants/Productos';
import Home from '../Pages/Home';
// import Multibeneficios from '../Pages/Multibeneficios';
// import Blanqueamiento from '../Pages/Blanqueamiento';
// import SaludNatural from '../Pages/SaludNatural';
// import CuidadoFamiliar from '../Pages/CuidadoFamiliar';
// import Sensibilidad from '../Pages/Sensibilidad';
// import Infantil from '../Pages/Infantil';
import Menu from '../Pages/Menu';
import PlantillaProductos from './PlantillaProductos';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={RoutersLinks.home} component={() => <Home></Home>}/>
                <Route exact path={RoutersLinks.menu} component={() => <Menu></Menu>}/>
                <Route exact path={RoutersLinks.multibeneficios} component={() => <PlantillaProductos data={Multibeneficios}></PlantillaProductos>}></Route>
                <Route exact path={RoutersLinks.blanqueamiento} component={() => <PlantillaProductos data={Blanqueamiento}></PlantillaProductos>}></Route>
                <Route exact path={RoutersLinks.saludNatural} component={() => <PlantillaProductos data={Natural}></PlantillaProductos>}></Route>
                <Route exact path={RoutersLinks.cuidadoFamiliar} component={() => <PlantillaProductos data={Familiar}></PlantillaProductos>}></Route>
                <Route exact path={RoutersLinks.sensibilidad} component={() => <PlantillaProductos data={Sensibilidad}></PlantillaProductos>}></Route>
                <Route exact path={RoutersLinks.infantil} component={() => <PlantillaProductos data={Infantil}></PlantillaProductos>}></Route>
            </Switch>
        </Router>
    );
};

export default Routers;