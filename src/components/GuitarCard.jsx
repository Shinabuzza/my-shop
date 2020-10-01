import React from 'react';
import { Card } from 'semantic-ui-react';

const GuitarCard = ({ title, image, price }) => (
  <Card>
    <image src={image} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a>
        <icon name="rub" />
        {price}
      </a>
    </Card.Content>
  </Card>
);
export default GuitarCard;
