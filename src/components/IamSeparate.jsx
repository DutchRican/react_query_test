import React from 'react';
import { useTotalCount } from './hooks/useItems';

export function IamSeparate() {
    const { totalCount } = useTotalCount();
    return (
        <div id="side-items">
            <span>{`total item count: ${totalCount}`}</span>
        </div>
    )
}