import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";
import CarouselContainer from "../container/carouselcontainer";

const Fullcards = [
  {
    id: 1,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Manish 1</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  },
  {
    id: 2,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Jacob 2</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  },
  {
    id: 3,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Jake 3</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  },
  {
    id: 4,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Jack 4</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  },
  {
    id: 5,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Jill 5</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  },
  {
    id: 6,
    content: (
      <Col xs="2">
        <Card>
          <CardBody>
            <CardTitle>Julie 6</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </CardText>
            <Button color="primary">Button</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
];

const styles = {
  borderRadius: "50%",
  height: "50%"
};

class CarouselController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      cards: Fullcards,
      length: Fullcards.length
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrevious = this.onClickPrevious.bind(this);
  }

  onClickNext() {
    const { index, length } = this.state;
    if (index === length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
  }

  onClickPrevious() {
    const { index, length } = this.state;
    if (index === 0) {
      this.setState({ index: length - 1 });
    } else {
      this.setState({ index: index - 1 });
    }
  }

  render() {
    const { cards, index, length } = this.state;
    return (
      <CarouselContainer
        styles={styles}
        cards={cards}
        index={index}
        length={length}
        onClickNext={this.onClickNext}
        onClickPrevious={this.onClickPrevious}
      />
    );
  }
}

export default CarouselController;
