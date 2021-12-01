import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import { getAskStoryIds } from "api/http";
import Story from "components/Story";
import { Pagination } from "antd";

export default function Ask() {
  const [storyIds, setStoryIds] = useState([]);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAskStoryIds()
      .then((res) => {
        setStoryIds(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handlePage = (page: number, pageSize: number) => {
    setIndex(page * 10 - 10);
    setPage(page);

    // page 1: 0 ~ 9
    // page 2: 10 ~ 19
  };

  return (
    <Layout>
      {storyIds.slice(index, index + 10).map((e, index) => (
        <Story key={index} storyId={e} />
      ))}
      {storyIds.length != 0 && (
        <Pagination
          style={{
            alignContent: "center",
          }}
          total={50}
          pageSize={9}
          current={page}
          onChange={handlePage}
        />
      )}
    </Layout>
  );
}
