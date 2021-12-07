export interface StandardCoreModel {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'info' | 'success' | 'warning' | 'danger' | 'light';
    className?: string;
    style?: any;
}

export interface LocalizedStandardCoreModel extends StandardCoreModel {
    dict?: any;
}