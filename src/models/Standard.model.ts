export interface StandardModel {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'elegant' | 'dynamic';
    className?: string;
    style?: any;
}

export interface LocalizedStandardModel extends StandardModel {
    dict?: any;
}