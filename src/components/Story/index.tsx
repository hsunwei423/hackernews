import React, { useEffect, useState } from 'react'
import { getStories } from 'api/http'
import { Skeleton } from 'antd'


export function Story({ storyId }) {
    const [story, setStory] = useState({
        by: "",
        descendants: "",
        time: 0,
        id: 0,
        score: 0,
        title: "",
        url: "",
        type: "",
        kids: []
    });
    const [time, setTime] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getStories(storyId)
            .then(res => {
                setStory(res.data)
                // console.log(res.data)
                setLoading(false);
                // set time
                let timestamp = res.data.time;
                let date = new Date(timestamp * 1000);
                let timestring = `${date.getMonth()}, ${date.getDate()} - ${date.toLocaleString("en", { weekday: "short" })}, ${date.getUTCFullYear()}`;
                setTime(timestring);
            })
            .catch(err => {
                console.log(err)
            })
    }, [storyId]);

    return (
        <div className="container">
            <Skeleton loading={loading} active>
                <div className="time-container">
                    <div className="item">{time}</div>
                    <div className="item">•</div> 
                    <div className="item">{story.by}</div>
                </div>
                <a href={story.url} target="_blank" rel="noreferrer noopener">{story.title}</a>
                <hr/>
            </Skeleton>
        <style jsx>{`
            .container {
                margin-bottom: 30px;
                width: 100%;
                padding: 0 30%;
                flex-basis: 40px;
            }
            .time-container {
                display: flex;
                align-items: center;
            }
            .item {
                font-size: 14px;
                margin-right: 10px;
            }
            a {
                font-size: 1rem;
                text-decoration: none;
                color: #2E2E2E;
            }
            hr {
                border-top: #979797 1px;
                width: 100%;
            }
        `}</style>
        </div>
    )
}

export default Story