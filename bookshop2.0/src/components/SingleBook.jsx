import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentedArea from "./CommentedArea";

class SingleBook extends Component {
    state = {
        selected: false,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.selectedBook !== this.props.selectedBook) {
            if (this.props.selectedBook === this.props.bookId) {
                this.setState({ selected: true });
            } else {
                this.setState({ selected: false });
            }
        } /* else {
            this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
        } */
    }
    render() {
        return (
            <Card
                style={this.state.selected ? { minHeight: "550px", border: "1px solid red" } : { minHeight: "550px" }}
            >
                <Card.Img
                    variant="top"
                    src={this.props.img}
                    className="img-fluid object-fit-contain "
                    style={{ maxHeight: "250px" }}
                    onClick={() => {
                        this.props.setSelectedBook(this.props.bookId);
                    }}
                />
                <Card.Body className="d-flex flex-column align-content-baseline justify-content-end">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text className="mt-auto">{this.props.category}</Card.Text>
                    <Card.Text>{this.props.price}</Card.Text>

                    <Button variant="primary">Go somewhere</Button>
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
