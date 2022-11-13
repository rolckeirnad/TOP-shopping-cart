import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@material-tailwind/react';
import React from 'react';

function CartItem({ item }) {
  const {
    id, title, price, quantity, image,
  } = item;

  const deleteItem = () => console.log(id);

  return (
    <div className="flex card">
      <img className="w-1/4" src={image} alt={title} />
      <div className="w-3/4 px-3 flex flex-col justify-between">
        <div className="flex flex-col">
          <h6 className="text-base font-bold">{title}</h6>
          <div className="flex">
            <p>
              $
              {price}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>
            Quantity:
            {' '}
            {quantity}
          </p>
          <IconButton color="red" className="w-6 h-6 self-end" onClick={deleteItem}>
            <FontAwesomeIcon icon={icon({ name: 'trash', style: 'solid' })} className="w-full h-full" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
