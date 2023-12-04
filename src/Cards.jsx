import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const cardData = [
  {
    image:"https://aginic.com/wp-content/uploads/2019/11/google-cloud-logo-1.png",
    title: 'Card 1',
    content: 'This is the content of Card 1.',
  },
  {
    image:"https://aginic.com/wp-content/uploads/2019/11/google-cloud-logo-1.png",
    title: 'Card 2',
    content: 'This is the content of Card 2.',
  },
  {
    image:"https://aginic.com/wp-content/uploads/2019/11/google-cloud-logo-1.png",
    title: 'Card 3',
    content: 'This is the content of Card 3.',
  },
  {
    image:"https://aginic.com/wp-content/uploads/2019/11/google-cloud-logo-1.png",
    title: 'Card 3',
    content: 'This is the content of Card 3.',
  },
];

function DynamicCards() {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Card bg='dark' text='white'>
              <Card.Body>
              <Card.Img variant="top" src={card.image} />
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.content}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicCards;
