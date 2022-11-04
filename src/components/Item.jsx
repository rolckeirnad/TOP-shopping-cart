import {
  Button,
  Card, CardBody, CardFooter, CardHeader, Typography,
} from '@material-tailwind/react';
import React from 'react';

function Item({ data }) {
  const {
    id, title, price, description, image,
  } = data;
  return (
    <Card className="relative justify-around flex-grow flex-shrink-0 basis-[calc(33.33%-4px)] snap-center border" id={id}>
      <CardHeader className="relative mt-4 h-56">
        <img
          src={image}
          className="block w-full"
          alt="product"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="home-title-clamp h-[3.3rem] text-xl mb-2">
          {title}
        </Typography>
        <Typography variant="paragraph" className="home-line-clamp">
          {description}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex flex-col items-center justify-between p-0 mb-4">
        <Typography variant="small" color="indigo">
          Price: $
          {price}
        </Typography>
        <Button disabled>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default Item;
