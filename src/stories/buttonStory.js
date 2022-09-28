import React from "react";
import Screener, {Steps} from 'screener-storybook/src/screener';
import Button from "../components/Button";

export default {
    title: "MyVeryOwnButton",
    component: Button
};

export const Primary = () => (
    <Screener 
    steps={new Steps()
     .executeScript('return "test"')
     .hover('button')
     .snapshot('Button Hovered')
     .end()} 
     >
        <Button />
    </Screener>)


