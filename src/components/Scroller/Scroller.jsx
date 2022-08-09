import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

const getItems = () =>
  Array(5)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Scroller() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

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
          />
        ))}
      </ScrollMenu>
    </>
  );
}

function Card({ onClick, selected, title, itemId }) {
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
      <div className="card">Hello</div>
      <div
        style={{
          height: "200px",
        }}
      />
    </div>
  );
}

export default Scroller;
