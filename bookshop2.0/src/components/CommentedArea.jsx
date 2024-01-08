import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
class CommentedArea extends Component {
    state = {
        users: [],
    };
    fetchComments = async () => {
        try {
            let response = await fetch(URL + this.props.bookId, {
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDQ3MTk4NTAsImV4cCI6MTcwNTkyOTQ1MH0.16yXHtYPPJGFGKsbUL-kiMmOSXCX0EayWyfC_vLPCTM",
                },
            });
            if (response.ok) {
                let comments = await response.json();
                this.setState({ users: comments });
            }
        } catch (error) {
            console.log(error);
        }
    };

    componentDidUpdate = (prevProps) => {
        if (prevProps.bookId !== this.props.bookId) {
            this.fetchComments();
        }
    };

    render() {
        return (
            <>
                <AddComment bookId={this.props.bookId} />
                <CommentsList usersArr={this.state.users} />
            </>
        );
    }
}
export default CommentedArea;
