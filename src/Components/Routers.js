import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import { RoutersLinks } from '../Constants/RoutersLinks';
import { Multibeneficios, Blanqueamiento, Natural, Familiar, Sensibilidad, Infantil } from '../Constants/Productos';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import SliderProductos from './ProductoIdeal/SliderProductos';
import Quiz from '../Pages/Quiz';
import MejoraTuSonrisa from '../Pages/MejoraTuSonrisa';
import MundoInfantil from '../Pages/MundoInfantil';

const Routers = () => {
    return (
        <HashRouter>
            <Home></Home>
            <Switch>
                {/* <Route path={RoutersLinks.home} component={() => <Home></Home>} /> */}
                <Route path={RoutersLinks.menu} component={() => <Menu></Menu>} />
                <Route path={RoutersLinks.multibeneficios} component={() => <SliderProductos data={Multibeneficios} />} />
                <Route path={RoutersLinks.blanqueamiento} component={() => <SliderProductos data={Blanqueamiento} />} />
                <Route path={RoutersLinks.saludNatural} component={() => <SliderProductos data={Natural} />} />
                <Route path={RoutersLinks.cuidadoFamiliar} component={() => <SliderProductos data={Familiar} />} />
                <Route path={RoutersLinks.sensibilidad} component={() => <SliderProductos data={Sensibilidad} />} />
                <Route path={RoutersLinks.infantil} component={() => <SliderProductos data={Infantil} />} />
                <Route path={RoutersLinks.quiz} component={() => <Quiz></Quiz>} />
                <Route path={RoutersLinks.mejoraTuSonrisa} component={() => <MejoraTuSonrisa />} />
                <Route path={RoutersLinks.mundoInfantil} component={() => <MundoInfantil />} />
            </Switch>
        </HashRouter>
    );
};

export default Routers;