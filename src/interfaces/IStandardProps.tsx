export interface StandardProps {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'elegant' | 'dynamic';
    className?: string;
    style?: any;
}

export interface LocalizedStandardProps extends StandardProps {
    dict?: any;
}