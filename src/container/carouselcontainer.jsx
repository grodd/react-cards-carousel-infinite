import React from "react";
import { Button, Row } from "reactstrap";
import { PropTypes } from "prop-types";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import DisplayCardsContainer from "./displaycardscontainer";

function CarouselContainer({
  styles,
  cards,
  onClickNext,
  onClickPrevious,
  index,
  length
}) {
  let displayCards = [];
  displayCards.push(
    cards[(index % length === 0 ? length : index % length) - 1]
  );
  displayCards.push(
    cards[((index + 1) % length === 0 ? length : (index + 1) % length) - 1]
  );
  displayCards.push(
    cards[((index + 2) % length === 0 ? length : (index + 2) % length) - 1]
  );
  console.log(displayCards);
  return (
    <div>
      <Row style={{ width: "100%" }}>
        <div
          style={{
            height: "100px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5px"
          }}
        >
          <Button color="primary" style={styles} onClick={onClickPrevious}>
            <MdChevronLeft size="1.75em" />
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="primary" style={styles} onClick={onClickNext}>
            <MdChevronRight size="1.75em" />
          </Button>
        </div>
      </Row>
      <Row style={{ width: "100%" }}>
        <DisplayCardsContainer displaycards={displayCards} />
      </Row>
    </div>
  );
}

CarouselContainer.propTypes = {
  styles: PropTypes.shape.isRequired,
  cards: PropTypes.arrayOf.isRequired,
  onClickNext: PropTypes.func.isRequired
  // onClickPrevious: PropTypes.func.isRequired,
};

export default CarouselContainer;
