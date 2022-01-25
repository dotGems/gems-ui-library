export enum StandardSize {
    sm = "small",
    md = "medium",
    lg = "large"
}

export enum StandardVariant {
    elegant = "elegant",
    dynamic = "dynamic"
}

export interface StandardModel {
    size?: StandardSize;
    variant?: StandardVariant;
    className?: string;
    style?: any;
}

export interface LocalizedStandardModel extends StandardModel {
    dict?: any;
}