import { StandardSize } from "./Standard.model";

export enum CoreVariant {
    info = "info",
    success = "success",
    warning = "warning",
    danger = "danger",
    light = "light"
}

export interface StandardCoreModel {
    size?: StandardSize;
    variant?: CoreVariant;
    className?: string;
    style?: any;
}

export interface LocalizedStandardCoreModel extends StandardCoreModel {
    dict?: any;
}