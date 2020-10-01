import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../../redux/reducer";
import styled from "styled-components";
const CardWrapper = styled.div`
  width: 700px;
  border-bottom: 2px solid rgb(185, 236, 236);
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  color: white;
  text-transform: uppercase;
  background-color: rgb(77, 121, 241);
  width: 100px;
`;

const ItemText = styled.div`
  width: 300px;
`;
export const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <CardWrapper>
      <img src={props.url} width="200px" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.date}</p>
        <Button
          onClick={() => {
            dispatch(deleteItem(props.id));
          }}
        >
          Delete
        </Button>
      </div>
    </CardWrapper>
  );
};
