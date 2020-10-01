import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card/Card";
import styled from "styled-components";

const Pagination = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
`;
const PageNumber = styled.div`
  border: 1px solid grey;
  padding: 5px;
  margin-left: 5px;
  cursor: pointer;
  &.active {
    border: 2px solid rgb(119, 149, 233);
  }
`;
export const History = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const history = useSelector((state) => state.history);
  const itemsPerPage = 5;
  const pagesCount = Math.ceil(history.length / itemsPerPage);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let filtredHistory = [];
  if (currentPage === 1) {
    filtredHistory = history.slice(0, itemsPerPage);
  } else {
    filtredHistory = history.slice(
      itemsPerPage * currentPage - itemsPerPage,
      itemsPerPage * currentPage + 1
    );
  }
  const pagesToRender = pages.map((i) => (
    <PageNumber
      className={i == currentPage ? "active" : ""}
      onClick={() => {
        setCurrentPage(i);
      }}
    >
      {i}
    </PageNumber>
  ));

  const renderList = filtredHistory.map((i) => (
    <Card
      url={i.url}
      name={i.name || "unknown"}
      key={i.id}
      id={i.id}
      date={i.date}
    />
  ));
  return (
    <div>
      {renderList}
      <Pagination> {pagesToRender}</Pagination>
    </div>
  );
};
