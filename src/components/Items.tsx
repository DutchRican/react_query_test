import { useCallback, useState } from 'react';
import { useItems } from './hooks/useItems';

export function Items() {
    const [sorter, setSorter] = useState<string>();

    const { isLoading, isError, error, fetchNextPage, data } = useItems();

    const sortByName = () => {
        !sorter ? setSorter('title') : setSorter(undefined);
    }

    // @ts-ignore
    const flatData = useCallback(() => data?.pages?.flatMap(page => page).sort((a, b) =>
        sorter === 'title' ? b.title > a.title ? -1 : 1 : undefined) || [],
        [data?.pages?.length, sorter]);

    if (isLoading) return <span>"Loading still..."</span>;

    if (isError) return <span>{`Something went wrong: ${(error as ErrorEvent).message}`}</span>;

    return (
        <div id="items-section">
            <span className='controls'>
                <button onClick={fetchNextPage as any}>More</button>
                <button onClick={sortByName}>{sorter === 'title' ? 'Order arrived' : 'Sort by title'}</button>
            </span>
            <ul>
                {flatData()?.map((item) => <li key={item.id}><span>{item.id}</span><span>{item.title}</span></li>)}
            </ul>
        </div>
    )
}