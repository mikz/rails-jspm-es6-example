import {Greeter} from "greeter.js";
const greeter = new Greeter();

export function welcome(name) {
    alert(greeter.greet(name));
}
