import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { handleSelectFromCatalog } from "../actions";
import { handleDeleteFromCatalog } from "../actions";
import { handlePinInSelected } from "../actions";

const Catalog = ({
  accessRights,
  cards,
  handleSelectFromCatalog,
  handleDeleteFromCatalog,
  handlePinInSelected
}) => (
  <div className="card-container">
    {/* TODO: Radix sort */}
    {Object.values(cards)
      .sort((first, second) => first.order - second.order)
      .map(
        (card, idx) =>
          // console.log(cards[card.label] && cards[card.label].pinnedBy);

          // let isSelected = false;

          card.isInCatalog /*  &&
          idx > 0 */ && (
            <Card
              label={card.label}
              key={card.label}
              canShowBacketwaste
              handleSelect={e => {
                e.stopPropagation();
                // const reallySelect = window.confirm(
                //   `Вы действительно хотите добавить ${card.label} в закреплённые приложений?`
                // );

                // let reallyMakePinned;
                // if (accessRights === "Admin__RC" && cards[card.label]) {
                //   if (cards[card.label].pinnedBy) {
                //     reallyMakePinned = window.confirm(
                //       `Хотите ли вы сделать приложение ${card.label} обязательным для пользователей?`
                //     );
                //   }
                // }

                // if (reallyMakePinned) {
                if (
                  accessRights.status &&
                  accessRights.status.slice(0, 5) === "Admin"
                )
                  return handlePinInSelected(card.label, accessRights);

                handleSelectFromCatalog(card.label);
                // }

                // if (reallySelect) {
                //TODO: Нельзя выбирать уже выбранные приложения
                // }
              }}
              handleDelete={e => {
                e.stopPropagation();
                // const reallyDelete = window.confirm(
                //   `Вы действительно хотите удалить ${card.label} из каталога?`
                // );

                // if (accessRights.status !== "Admin__RC") {
                //   alert(
                //     `Недостаточно прав доступа ${accessRights.status} для удаления приложения из каталога!`
                //   );
                // }
                // if (reallyDelete && accessRights.status === "Admin__RC") {
                return handleDeleteFromCatalog(card.label);
                // }
              }}
            />
          )
      )}
  </div>
);

const mapStateToProps = state => ({
  accessRights: state.accessRights,
  cards: state.item
});

export default connect(
  mapStateToProps,
  { handleSelectFromCatalog, handleDeleteFromCatalog, handlePinInSelected }
)(Catalog);
