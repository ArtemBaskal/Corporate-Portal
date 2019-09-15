import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { handleDeleteFromSelected } from "../actions";
import { handlePinInSelected } from "../actions";
import { handleSelectFromCatalog } from "../actions";
import { test } from "../actions";
import "../styles/Card.css";

class MainPage extends React.Component {
  state = { items: Object.values(this.props.cards) };
  // state = {
  //   items: [
  //     "🍰 Cake",
  //     "🍩 Donut",
  //     "🍎 Apple",
  //     "🍕 Pizza",
  //     1,
  //     2,
  //     3,
  //     4,
  //     5,
  //     6,
  //     7,
  //     8,
  //     9
  //   ]
  // };

  // componentWillUpdate() {
  //   console.log("componentWillReceiveProps");
  //   // this.setState({ ...Object.values(this.props.cards).items });
  // }

  onDragStart = (e, index) => {
    console.dir(e.target);
    this.draggedItem = Object.values(this.props.cards)[index];
    e.dataTransfer.effectAllowed = "grabbing";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 50, 50);
  };

  onDragOver = label => {
    const draggedOverItem = Object.values(this.props.cards)[label];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = Object.values(this.props.cards).filter(
      item => item !== this.draggedItem
    );
    // let items = this.props.cards;
    // delete this.props.cards[this.draggedItem.label];

    // console.dir(this.props.cards[this.draggedItem.label]);

    // add the dragged item after the dragged over item
    items.splice(label, 0, this.draggedItem);

    // items[label].position = this.draggedItem.position;

    // this.setState({ items });
    //ТЕСТ! Работает только если ключи объекта - числа по порядку
    this.props.test(items);
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  // componentWillReceiveProps() {
  //   this.setState({
  //     ...Object.values(this.props.cards).items,
  //     [4]: { isSelected: false }
  //   });
  //   console.log(Object.values(this.props.cards));
  //   console.log(this.draggedItem);
  // }

  render() {
    return (
      <div className="card-container">
        {Object.values(this.props.cards).map(
          (card, idx) =>
            (card.isSelected || Object.values(card.pinnedBy).length > 1) && (
              /*  idx > 0 &&  */ <Card
                key={card.label}
                label={card.label}
                onDragOver={() => this.onDragOver(idx)}
                onDragStart={e => this.onDragStart(e, idx)}
                onDragEnd={this.onDragEnd}
                isSelected={card.isSelected}
                pinnedBy={card.pinnedBy}
                handleDelete={e => {
                  // console.log(card.label);
                  // e.stopPropagation();
                  // console.log("DELETED");
                  // this.setState({
                  //   ...Object.values(this.props.cards).items,
                  //   [card.label]: { isSelected: false }
                  // });
                  // console.log({
                  //   ...Object.values(this.props.cards).items,
                  //   [card.label]: { isSelected: false }
                  // });
                  // console.log(Object.values(this.props.cards));
                  return this.props.handleDeleteFromSelected(card.label);
                }}

                // handleSelect={() => {}}
              />
            )
          // <li key={card} onDragOver={() => this.onDragOver(idx)}>
          //   <div
          //     className="drag"
          //     draggable
          //     onDragStart={e => this.onDragStart(e, idx)}
          //     onDragEnd={this.onDragEnd}
          //   >
          //     {/* <Hamburger /> */}o
          //   </div>
          //   <span className="content">{card}</span>
          // </li>

          // (card.isSelected ||
          //   (card.pinnedBy && Object.values(card.pinnedBy).length)) && (
          //   <Card
          //     onDragOver={() => this.onDragOver(idx)}
          //     draggable
          //     onDragStart={e => this.onDragStart(e, idx)}
          //     onDragEnd={this.onDragEnd}
          //     label={card.label}
          //     key={card.label}
          //     isSelected={card.isSelected}
          //     pinnedBy={card.pinnedBy}
          //     handleDelete={e => {
          //       e.stopPropagation();
          //       console.log("DELETED");
          //       // return this.props.handleDeleteFromSelected(card.label);
          //     }}
          //     // handleSelect={() => {}}
          //   />
          // )
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.item
});

export default connect(
  mapStateToProps,
  {
    handleDeleteFromSelected,
    handlePinInSelected,
    handleSelectFromCatalog,
    test
  }
)(MainPage);

// const reallyDelete = window.confirm(
//   `Вы действительно хотите удалить ${card.label} из закреплённых приложений?`
// );

// if (accessRights !== "Admin_System" && card.pinnedBy && reallyDelete) {
//   alert(
//     `Недостаточно прав для удаления закреплённого приложения "${card.label}"`
//   );
//   //TODO: если нельзя удалить, то сразу писать об этом
// } else if (
//   (!card.pinnedBy && reallyDelete) ||
//   (card.pinnedBy && accessRights == "Admin_System")
// )

// handleSelectFromCatalog(card.label);
// handlePinInSelected(card.label);
// const reallyMakePinned =
//   accessRights === "Admin_System"
//     ? window.confirm(
//         `Хотите ли вы сделать приложение ${card.label} обязательным для пользователей?`
//       )
//     : false;
// if (reallyMakePinned) {
// }
