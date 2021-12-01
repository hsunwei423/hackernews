import Layout from 'components/Layout'
import React, { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import { getTopStoryIds } from 'api/http'
import Story from 'components/Story'


export default function Top() {
    const [storyIds, setStoryIds] = useState([]);
    const [index, setIndex] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTopStoryIds()
            .then(res => {
                setStoryIds(res.data);
            })
    }, []);

    const handlePage = (page: number, pageSize: number) => {
        setIndex(page * 10 - 10);
        setPage(page);

        // page 1: 0 ~ 9
        // page 2: 10 ~ 19
    }

    return (
        <Layout>
            {
                storyIds.slice(index, index + 10).map((e, index) => (
                    <Story
                        key={index}
                        storyId={e}
                    />
                ))
            }
            <Pagination
                style={{
                    alignContent: 'center'
                }}
                total={50}
                pageSize={9}
                current={page}
                onChange={handlePage}
            />
        </Layout>
    )
}