import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const CommentsList = (props) => {
    const deleteComment = async (commentId) => {
        try {
            let response = await fetch(URL + commentId, {
                method: "DELETE",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxZDc4NDBkOGEyMDAwMThhNDhhNjEiLCJpYXQiOjE3MDQ3MTk4NTAsImV4cCI6MTcwNTkyOTQ1MH0.16yXHtYPPJGFGKsbUL-kiMmOSXCX0EayWyfC_vLPCTM",
                },
            });
            console.log(commentId);
            if (response.ok) {
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ListGroup>
            {props.usersArr.map((comment) => (
                <ListGroupItem key={comment._id}>
                    <span className="d-block">Comment: {comment.comment}</span>
                    <span className="d-block">Rate: {comment.rate}</span>
                    <Button variant="danger" onClick={() => deleteComment(comment._id)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                        </svg>{" "}
                    </Button>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
};
export default CommentsList;
