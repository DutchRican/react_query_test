import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useItems = () => {
    return useInfiniteQuery(
        ['items'],
        ({ pageParam = 1 }) => axios.get(`https://jsonplaceholder.typicode.com/posts/${pageParam}`).then(({ data }) => [data])
        , {
            getNextPageParam: (_, allPages) => {
                const nextPage = allPages.length + 1;
                return nextPage;
            }
        });
};

export const useTotalCount = () => {
    const [totalCount, setTotalCount] = useState<number | undefined>(0);
    const { data } = useItems();

    useEffect(() => {
        setTotalCount(data?.pages.flatMap(pages => pages).length);
    }, [data?.pages.length]);
    return totalCount;
};