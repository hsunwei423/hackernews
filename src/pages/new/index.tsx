import React, { useState, useEffect } from 'react'
import Layout from 'components/Layout'
import { getNewStoryIds, getStories } from 'api/http'
import Story from 'components/Story'
import { Pagination } from 'antd';

type ids = String[]


export default function New() {
    const [storyIds, setStoryIds] = useState<String[]>([]);
    const [index, setIndex] = useState<number>(0);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        getNewStoryIds()
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
            { storyIds.length != 0 &&
                <Pagination
                    style={{
                        alignContent: 'center'
                    }}
                    total={50}
                    pageSize={9}
                    current={page}
                    onChange={handlePage}
                />
            }
        </Layout>
    )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//     let data = [];
//     let loading = true;
//     await getNewStoryIds()
//             .then(res => {
//                 data = res.data;
//                 loading = false;
//             })

//     return {
//         props: {
//             storyIds: data,
//             loading: loading
//         }
//     }
    
// }