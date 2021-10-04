import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Router>
            <Switch>
                <Route exact path={RoutersLinks.home} component={() => <Home></Home>} />
                <Route exact path={RoutersLinks.menu} component={() => <Menu></Menu>} />
                <Route exact path={RoutersLinks.multibeneficios} component={() => <SliderProductos data={Multibeneficios} />} />
                <Route exact path={RoutersLinks.blanqueamiento} component={() => <SliderProductos data={Blanqueamiento} />} />
                <Route exact path={RoutersLinks.saludNatural} component={() => <SliderProductos data={Natural} />} />
                <Route exact path={RoutersLinks.cuidadoFamiliar} component={() => <SliderProductos data={Familiar} />} />
                <Route exact path={RoutersLinks.sensibilidad} component={() => <SliderProductos data={Sensibilidad} />} />
                <Route exact path={RoutersLinks.infantil} component={() => <SliderProductos data={Infantil} />} />
                <Route exact path={RoutersLinks.quiz} component={() => <Quiz></Quiz>} />
                <Route exact path={RoutersLinks.mejoraTuSonrisa} component={() => <MejoraTuSonrisa />} />
                <Route exact path={RoutersLinks.mundoInfantil} component={() => <MundoInfantil />} />
            </Switch>
        </Router>
    );
};

export default Routers;