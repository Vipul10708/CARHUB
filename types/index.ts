import { MouseEventHandler } from "react";

export interface Custombuttonprops {
    title: string;
    containerstyles?: string;
    handleclick?:
    MouseEventHandler<HTMLButtonElement>;
    btntype?: "button" | "submit" | "reset";

}
