import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentedArea extends Component {
    render() {
        return (
            <>
                <AddComment bookId={this.props.asin} />
                <CommentsList usersArr={this.props.comments} />
            </>
        );
    }
}
export default CommentedArea;
