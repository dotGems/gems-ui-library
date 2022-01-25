import { Paper, Skeleton } from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';

export interface AsyncImageProps {
    alt: string;
    url: string;
    className?: string;
    onLoadStart?: Function
    onLoadSuccess?: Function
    onLoadFailure?: Function
}

/**
 * Component for loading, displaying and reacting to
 * load states of an image.
 * 
 * // TODO: Make it work.
 */
export const AsyncImage = ({ url, alt, className, onLoadStart, onLoadSuccess, onLoadFailure}: AsyncImageProps) => {

    const [isLoaded, setIsLoaded] = useState<boolean>(true);
    const [error, setError] = useState<SyntheticEvent<HTMLImageElement, Event> | null>(null);

    const handleLoadStart = () => {
        setIsLoaded(false);
        if(onLoadStart) {
            onLoadStart();
        }
    }
    const handleLoadSuccess = () => {
        setIsLoaded(true);
        if(onLoadSuccess) {
            onLoadSuccess();
        }
    }
    const handleLoadFailure = (err: SyntheticEvent<HTMLImageElement, Event>) => {
        setError(err);
        setIsLoaded(false);
        if(onLoadFailure) {
            onLoadFailure(err);
        }
    }

    if(isLoaded) {
        return (
            <img
                className={className || ''}
                src={url}
                alt={alt}
                onLoadStart={handleLoadStart}
                onLoad={handleLoadSuccess}
                onError={(err) => handleLoadFailure(err)}
            />
        );
    } else {
        if(error) {
            return <div className={className || ''}>A cat just lost a life</div>
        } else {
            return <Paper>
                <Skeleton variant="rectangular" className={className || ''}/>
            </Paper>
        }
    }
};