import * as React from 'react';

export interface INavButtonProps {
    label: string;
}

export function ButtonNav({ label }: INavButtonProps) {
    return (
        <div>
            <p>
                {label}
            </p>
        </div>
    );
}
