import React from "react";
import "./style.css";
import {Button} from './components/Button';
import {BasicCard} from './components/BasicCard';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <BasicCard/>
      <Button> Aceptar </Button>
    </div>
  );
}
