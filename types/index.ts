import { MouseEventHandler } from "react";

export interface Custombuttonprops {
    title: string;
    containerstyles?: string;
    handleclick?:
    MouseEventHandler<HTMLButtonElement>;
    btntype?: "button" | "submit" | "reset";

}

export interface SearchManufacturerProps {

    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}