import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoutersLinks } from '../Constants/RoutersLinks';
import { Multibeneficios, Blanqueamiento, Natural, Familiar, Sensibilidad, Infantil } from '../Constants/Productos';
import Home from '../Pages/Home';
import Menu from '../Pages/Menu';
import SliderProductos from './ProductoIdeal/SliderProductos';
import Quiz from '../Pages/Quiz';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={RoutersLinks.home} component={() => <Home></Home>}/>
                <Route exact path={RoutersLinks.menu} component={() => <Menu></Menu>}/>
                <Route exact path={RoutersLinks.multibeneficios} component={() => <SliderProductos data={Multibeneficios}></SliderProductos>}></Route>
                <Route exact path={RoutersLinks.blanqueamiento} component={() => <SliderProductos data={Blanqueamiento}></SliderProductos>}></Route>
                <Route exact path={RoutersLinks.saludNatural} component={() => <SliderProductos data={Natural}></SliderProductos>}></Route>
                <Route exact path={RoutersLinks.cuidadoFamiliar} component={() => <SliderProductos data={Familiar}></SliderProductos>}></Route>
                <Route exact path={RoutersLinks.sensibilidad} component={() => <SliderProductos data={Sensibilidad}></SliderProductos>}></Route>
                <Route exact path={RoutersLinks.infantil} component={() => <SliderProductos data={Infantil}></SliderProductos>}></Route>
                <Route exact path={RoutersLinks.quiz} component={() => <Quiz></Quiz>}/>
            </Switch>
        </Router>
    );
};

export default Routers;