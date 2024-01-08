import { Component } from "react";
import SingleBook from "./SingleBook";

import { Row, Col, Container, Form } from "react-bootstrap";
import CommentedArea from "./CommentedArea";

class BookList extends Component {
    state = {
        bookTitle: "",
        bookId: "",
        selectedBookComments: [],
    };

    handleChange = (propertyValue) => {
        this.setState({ bookTitle: propertyValue });
    };

    selectedBookId = (asin) => {
        this.setState({ bookId: asin });
        this.fetchComments(asin);
    };

    setComments = (comments) => {
        this.setState({ selectedBookComments: comments });
    };

    fetchComments = async (asin) => {
        try {
            let response = await fetch(URL + asin, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDQ3MTk4NTAsImV4cCI6MTcwNTkyOTQ1MH0.16yXHtYPPJGFGKsbUL-kiMmOSXCX0EayWyfC_vLPCTM",
                },
            });
            if (response.ok) {
                let comments = await response.json();
                this.setState({ selectedBookComments: comments });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidMount = () => {
        this.fetchComments();
    };

    componentDidUpdate(prevProps) {
        if (prevProps.asin !== this.props.asin) {
            this.fetchComments(this.props.asin);
        }
    }
    render() {
        return (
            <Container>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Find your {this.props.stuffToSearch}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search a book"
                        value={this.state.bookTitle}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                </Form.Group>
                <Row>
                    <>
                        <Col sm={6} md={8}>
                            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-4">
                                {this.props.booksArray
                                    .filter((book) =>
                                        book.title.toLowerCase().includes(this.state.bookTitle.toLowerCase())
                                    )
                                    .map((book, index) => (
                                        <Col key={`book-${index}`}>
                                            <SingleBook
                                                img={book.img}
                                                title={book.title}
                                                category={book.category}
                                                price={book.price}
                                                bookId={book.asin}
                                                onSelect={this.selectedBookId}
                                            />
                                        </Col>
                                    ))}
                            </Row>
                        </Col>
                        <Col>
                            {this.state.bookId && (
                                <CommentedArea
                                    asin={this.state.bookId}
                                    comments={this.state.selectedBookComments}
                                    setComments={this.setComments}
                                />
                            )}
                        </Col>
                    </>
                </Row>
            </Container>
        );
    }
}

export default BookList;
