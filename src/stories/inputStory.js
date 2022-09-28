import React from "react";
import Screener, {Steps} from 'screener-storybook/src/screener';
import Input from "../components/Input";

export default {
    title: "MyVeryOwnInput",
    component: Input
}

export const PrimaryInput = () => (
    <Screener>
        <Input />
    </Screener>
)