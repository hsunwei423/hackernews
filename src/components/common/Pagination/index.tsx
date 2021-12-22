import React, { FC } from 'react';
import { Pagination } from 'antd';

type PaginationProp = {
  total: number,
  pageSize: number,
  onChange: (page: number) => void
}

const MyPagination: FC<PaginationProp> = ({ total, pageSize, onChange }) => {
  return (
    <Pagination
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      responsive
    />
  )
}

export default MyPagination;
