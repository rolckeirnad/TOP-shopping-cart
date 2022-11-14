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
    <Card className="grid grid-cols-3 grid-rows-5 h-44 z-[-1] bg-blue-gray-50 overflow-hidden border border-solid border-gray-300 md:h-80 md:flex md:flex-col">
      <CardHeader className="h-full row-start-1 row-end-[-1] flex items-center justify-center m-0 rounded-none shadow-none border-b border-b-black md:h-2/5">
        {load
          ? <img src={image} alt={title} className="p-2 h-full object-contain" />
          : (
            <div className="w-full h-64 flex justify-center items-center">
              {error
                ? <FontAwesomeIcon icon={icon({ name: 'image', style: 'solid' })} className="h-20 text-blue-gray-500" />
                : <FontAwesomeIcon icon={icon({ name: 'spinner', style: 'solid' })} className="animate-spin h-9" />}
            </div>
          )}
      </CardHeader>
      <CardBody className="col-start-2 col-end-[-1] row-start-1 row-end-[-2] p-2 text-center md:py-2 md:flex-1 lg:px-6">
        <Typography className="max-h-[74px] overflow-hidden font-bold text-base">{title}</Typography>
        <Typography variant="small">{category}</Typography>
        <Typography variant="h6">
          $
          <span>{price}</span>
        </Typography>
      </CardBody>
      <CardFooter className="col-start-2 col-end-[-1] row-start-[-2] row-end-[-1] flex justify-between py-1 px-2 md:py-2 lg:px-5">
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
