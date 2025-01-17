import React from 'react';
import { format } from 'date-fns'; // Use your preferred date formatting library
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardFooter, Button } from 'reactstrap';
import './Tweet.css';

function Tweet(props) {
    const formattedDate = format(new Date(props.info.timestamp), 'MM/dd/yyyy');

    return (
        <Card className='my-2'>
            <CardBody>
                <CardTitle tag="h5">
                    <strong>{props.info.user}</strong>
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted date">
                    {formattedDate}
                </CardSubtitle>
                <CardText>{props.info.text}</CardText>
                <Button color="info" onClick={props.update}>
                    Like this tweet!
                </Button>
            </CardBody>
            <CardFooter class='likes'>
                Total Likes: {props.info.likes}
            </CardFooter>
        </Card>
    );
}

export default Tweet;