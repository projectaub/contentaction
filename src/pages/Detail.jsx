import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const reviews = useSelector((state) => state.reviews);
  console.log(reviews);
  const todo = todos.filter((todo) => todo.id === id)[0];
  const [content, setContent] = useState();
  const dispatch = useDispatch();
  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      {reviews.id}
      <button onClick={() => navigate("/")}>이전 화면으로</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_CONTENT",
            payload: {
              id: todo.id,
              userid: shortid.generate(),
              content,
            },
          });
        }}
      >
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button>댓글추가</button>
      </form>
      <div>{reviews.content}</div>
    </div>
  );
};

export default Detail;
