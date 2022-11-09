import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card, CardBody, CardFooter, CardHeader, Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';

const loadImage = async (image) => new Promise((resolve, reject) => {
  const loadImg = new Image();
  loadImg.src = image;
  loadImg.onload = () => resolve(image);
  loadImg.onerror = (err) => reject(new Error(err));
});

function ItemShop({ product }) {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const {
    id, title, image, category, price, rating,
  } = product;

  loadImage(image).then(() => setLoad(true))
    .catch(() => setError(true));

  return (
    <Card key={`product-${id}`} className="z-[-1] bg-blue-gray-50 overflow-hidden border border-solid border-gray-300">
      <CardHeader className="m-0 rounded-none shadow-none border-b border-b-black">
        {load
          ? <img src={image} alt={title} className="w-full object-contain h-64 p-4" />
          : (
            <div className="w-full h-64 flex justify-center items-center">
              {error
                ? <FontAwesomeIcon icon={icon({ name: 'image', style: 'solid' })} className="h-20 text-blue-gray-500" />
                : <FontAwesomeIcon icon={icon({ name: 'spinner', style: 'solid' })} className="animate-spin h-9" />}
            </div>
          )}
      </CardHeader>
      <CardBody className="text-center py-2 px-6 flex-1">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="small">{category}</Typography>
        <Typography variant="h6">
          $
          <span>{price}</span>
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-between py-2 px-5">
        <Typography variant="small" color="gray">
          <span>{rating.count}</span>
          {' '}
          Sold
        </Typography>
        <Typography>
          <FontAwesomeIcon icon={icon({ name: 'star', style: 'solid' })} className="text-orange-500" />
          {' '}
          <span>{rating.rate}</span>
        </Typography>
      </CardFooter>
    </Card>
  );
}

export default ItemShop;
