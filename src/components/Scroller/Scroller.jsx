import React from "react";
import "./scroller.css";
import { useNavigate } from "react-router-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const getItems = () =>
  Array(3)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Scroller() {
  const [items] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  //   const [position, setPosition] = React.useState(0);

  const navigate = useNavigate();

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <>
      <ScrollMenu>
        {items.map(({ id }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
            navigate={navigate}
          />
        ))}
      </ScrollMenu>
    </>
  );
}

function Card({ onClick, selected, title, itemId, navigate }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: "160px",
        marginRight: 20,
      }}
      tabIndex={0}
    >
      <div className="card">
        <div>
          <p>R.Jolad Hospital</p>
          <button style={{ width: 116 }} onClick={() => navigate("/hmo")}>
            Book a visit
          </button>
        </div>
      </div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default Scroller;
