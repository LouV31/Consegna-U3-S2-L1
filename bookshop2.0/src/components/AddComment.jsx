import { Component } from "react";
import { Button, Form } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
class AddComment extends Component {
    state = {
        user: {
            comment: "",
            rate: 1,
            elementId: this.props.bookId,
        },
    };

    handleChange = (propertyName, propertyValue) => {
        this.setState({ user: { ...this.state.user, [propertyName]: propertyValue } });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let response = await fetch(URL, {
                method: "POST",
                body: JSON.stringify(this.state.user),
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDQ3MTk4NTAsImV4cCI6MTcwNTkyOTQ1MH0.16yXHtYPPJGFGKsbUL-kiMmOSXCX0EayWyfC_vLPCTM",
                },
            });
            if (response.ok) {
                this.setState({
                    user: {
                        comment: "",
                        rate: 1,
                        elementId: this.props.bookId,
                    },
                });
                let userObj = await response.json();
                console.log(userObj);
            }
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
            <Form className="mt-5" onSubmit={this.handleSubmit}>
                <Form.Group className="mb-2">
                    <Form.Control
                        type="text"
                        placeholder="Lascia una recensione"
                        value={this.state.user.comment}
                        onChange={(event) => this.handleChange("comment", event.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        value={this.state.user.rate}
                        onChange={(event) => this.handleChange("rate", event.target.value)}
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Select>
                </Form.Group>
                <Button className="mt-2" type="submit">
                    Invia
                </Button>
            </Form>
        );
    }
}

export default AddComment;
