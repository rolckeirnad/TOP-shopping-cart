import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchById } from '../fake-store';

const productQuery = (id) => ({
  queryKey: [`product-${id}`],
  queryFn: async () => fetchById(id),
});

function ItemDescription() {
  const { state } = useLocation();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const item = state?.product;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity((prevQuantity) => {
    if (prevQuantity === 1) return 1;
    return prevQuantity - 1;
  });

  const handleBlur = (e) => {
    const inputValue = +e.target.value;
    const newValue = inputValue === '' || inputValue < 1 ? 1 : inputValue;
    setQuantity(newValue);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  const {
    data: product = item, isLoading, isSuccess, isError,
  } = useQuery({
    ...productQuery(productId),
    staleTime: Infinity,
    enabled: !item,
  });

  if (item) {
    return (
      <div className="col-start-2 col-end-[-1] flex gap-10 p-8 overflow-auto">
        <div className="w-1/3">
          <img src={product.image} alt={product.title} className="max-h-full sticky top-16" />
        </div>
        <div className="w-2/3 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl">{product.title}</h2>
            <div className="flex text-lg items-center">
              <div className="w-[5rem] text-white">
                <div className="flex text-base bg-orange-500" style={{ width: `${product.rating.rate}rem` }}>
                  {Array(5).fill('star').map((name, index) => `${name}-${index}`)
                    .map((value) => (<FontAwesomeIcon icon={icon({ name: 'star', style: 'solid' })} mask={icon({ name: 'square-full', style: 'solid' })} key={value} />))}
                </div>
              </div>
              <p className="ml-4">{product.rating.rate}</p>
              <p className="ml-16">
                { product.rating.count }
                {' '}
                sold
              </p>
            </div>
          </div>
          <p className="text-4xl">
            $
            { product.price }
          </p>
          <p className="text-xl overflow-auto">{ product.description }</p>
          <div className="flex gap-5">
            <div className="flex flex-col w-fit">
              <p className="text-lg text-center">Quantity:</p>
              <div className="text-xl">
                <button className="w-8" type="button" onClick={decrementQuantity}>-</button>
                <input type="number" min={1} className="w-16 text-center outline-none" value={quantity} onChange={handleChange} onBlur={handleBlur} />
                <button className="w-8" type="button" onClick={incrementQuantity}>+</button>
              </div>
            </div>
            <Button type="button" disabled className="w-1/3 self-center mt-2 bg-black text-lg" onClick={addToBasket}>Add to Basket</Button>
          </div>
          <div>
            <p>
              Shipping:
              {' '}
              $
              <span>9.99</span>
            </p>
            <p>Estimated delivery: 14 days</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDescription;