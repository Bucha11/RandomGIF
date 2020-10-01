import React, { useEffect } from "react";
import { startFetching } from "../../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const MainWrapper = styled.div`
  min-width: 300px;
  height: 500px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-beetwen;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  color: white;
  text-transform: uppercase;
  background-color: rgb(77, 121, 241);
  width: 100px;
  margin-top: 30px;
`;

const ImgContainer = styled.div`
  height: 400px;
  overflow: hidden;
`;
export const Main = () => {
  useEffect(() => {
    dispatch(startFetching());
  }, []);
  const dispatch = useDispatch();
  const url = useSelector((state) => state.current.url);
  const loading = useSelector((state) => state.loading);

  return (
    <MainWrapper>
      <ImgContainer>
        {loading ? "Loading please wait" : <img src={url} width="350px" />}
      </ImgContainer>
      <Button
        onClick={() => {
          dispatch(startFetching());
        }}
      >
        Download
      </Button>
    </MainWrapper>
  );
};
