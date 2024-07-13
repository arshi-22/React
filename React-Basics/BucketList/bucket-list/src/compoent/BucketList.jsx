import React, { useReducer } from "react";
import { TiTick, TiTrash } from "react-icons/ti";
import { blReducer, formReducer } from "../BucketListReducer";
import "./style.css";

const BucketList = () => {
  const [state, disPatch] = useReducer(blReducer, []);
  const [wish, disPatchFromAction] = useReducer(formReducer, {
    title: "",
    by: "",
  });

  const handleWish = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    disPatchFromAction({ type: "INPUT_TEXT", field: name, payload: value });
  };

  return (
    <div>
      <header className="header">
        <h2>BucketList</h2>
      </header>
      <div className="wishes">
        <ul>
          {console.log(state)}
          {state &&
            state.length > 0 &&
            state.map((item) => (
              <li key={item.id} className="listItems">
                <span
                  style={{ textDecoration: item.isDone ? "line-through" : "" }}
                >
                  <strong>
                    {item.title} - This will due by {item.by}
                  </strong>
                </span>
                <span>
                  <TiTick
                    size={24}
                    onClick={() =>
                      disPatch({ type: "DONE_WISH", payload: item.id })
                    }
                  />
                </span>
                <span>
                  <TiTrash
                    size={24}
                    onClick={() =>
                      disPatch({ type: "REMOVE_WISH", payload: item.id })
                    }
                  />
                </span>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <input type="text" name="title" onChange={handleWish} />
        <input type="date" name="by" onChange={handleWish} />
        <button onClick={() => disPatch({ type: "ADD_WISH", payload: wish })}>
          Add wish
        </button>
      </div>
    </div>
  );
};

export default BucketList;
