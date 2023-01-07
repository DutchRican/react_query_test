import React, { useCallback, useState } from 'react';
import { useItems } from './hooks/useItems';

export function Items() {
    const [sorter, setSorter] = useState();

    const { isLoading, isError, error, fetchNextPage, data } = useItems();

    const sortByName = () => {
        !sorter ? setSorter('title') : setSorter(undefined);
    }

    const flatData = useCallback(() => data?.pages?.flatMap(page => page).sort((a, b) =>
        sorter === 'title' ? b.title > a.title ? -1 : 1 : undefined) || [],
        [data?.pages?.length, sorter]);

    if (isLoading) return "Loading still...";

    if (isError) return "Something went wrong: " + error.message;

    return (
        <div id="items-section">
            <span className='controls'>
                <button onClick={fetchNextPage}>More</button>
                <button onClick={sortByName}>{sorter === 'title' ? 'Order arrived' : 'Sort by title'}</button>
            </span>
            <ul>
                {flatData()?.map((item, idx) => <li key={idx}><span>{item.id}</span><span>{item.title}</span></li>)}
            </ul>
        </div>
    )
}