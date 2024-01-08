import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentedArea from "./CommentedArea";

class SingleBook extends Component {
    state = {
        selected: false,
    };

    bordChange = () => {
        if (this.state.selected) {
            this.setState({ selected: false });
        } else {
            this.setState({ selected: true });
        }
    };

    handleClick = () => {
        if (this.props.onSelect) {
            this.props.onSelect(this.props.bookId);
        }
        this.bordChange();
    };
    render() {
        return (
            <Card
                style={this.state.selected ? { minHeight: "550px", border: "10px solid red" } : { minHeight: "550px" }}
                onClick={this.handleClick}
            >
                <Card.Img
                    variant="top"
                    src={this.props.img}
                    className="img-fluid object-fit-contain "
                    style={{ maxHeight: "250px" }}
                    onClick={this.bordChange}
                />
                <Card.Body className="d-flex flex-column align-content-baseline justify-content-end">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text className="mt-auto">{this.props.category}</Card.Text>
                    <Card.Text>{this.props.price}</Card.Text>

                    <Button variant="primary">Go somewhere</Button>
                    {this.state.selected && <CommentedArea asin={this.props.bookId} />}
                </Card.Body>
            </Card>
        );
    }
}
export default SingleBook;
/* const MyCard = ({ title, img, category, price }) => {
    return (
        <Card style={{ minHeight: "550px" }}>
            <Card.Img
                variant="top"
                src={img}
                className="img-fluid object-fit-contain "
                style={{ maxHeight: "250px" }}
            />
            <Card.Body className="d-flex flex-column align-content-baseline justify-content-end">
                <Card.Title>{title}</Card.Title>
                <Card.Text className="mt-auto">{category}</Card.Text>
                <Card.Text>{price}</Card.Text>

                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}; */
/* export default MyCard; */
