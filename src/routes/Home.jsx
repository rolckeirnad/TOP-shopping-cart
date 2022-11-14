import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchNewProducts } from '../fake-store';
import Item from '../components/Item';

const newProductsQuery = () => ({
  queryKey: ['home'],
  queryFn: async () => fetchNewProducts(),
});

function Home() {
  const { data: products } = useQuery({
    ...newProductsQuery(),
    staleTime: Infinity,
  });

  return (
    <div className="scrollbar">
      <div className="w-full relative flex flex-col lg:flex-row">
        <div className="w-full flex flex-col justify-center items-center text-gray-600 lg:w-1/2">
          <div className="p-5 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1
              className="text-black pb-4 text-3xl font-light tracking-wide leading-tight sm:text-5xl md:py-10"
              style={{ textShadow: '0 0 4px #7c7c7c' }}
            >
              Premium items
              <br />
              Best prices.
              <br />
              Warranty satisfaction.
            </h1>
            <p className="text-lg text-blue-gray-800 font-semibold tracking-wide md:text-gray-400 lg:text-black" style={{ textShadow: '0 0 4px #7c7c7c' }}>Get convinced yourself!</p>
            <div className="mt-4 flex justify-center items-center sm:flex-row md:mt-10">
              <Link to="shop/all">
                <button type="button" className="m-1.5 py-2.5 px-5 rounded-md bg-orange-300 text-white font-semibold uppercase hover:bg-orange-500 lg:text-lg">
                  Check our shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -z-10 h-full w-full flex flex-col justify-start items-center overflow-hidden lg:relative lg:w-1/2">
          <img src="https://placekitten.com/g/800/600" alt="hero" className="w-full h-full object-cover opacity-50 lg:w-full" />
        </div>
      </div>
      <div className="mt-8 px-2 md:px-8 lg:px-60">
        <h2 className="text-xl text-center leading-4 sm:text-3xl">We make the best for you.</h2>
        <p className="text-base text-center py-4 md:text-lg lg:text-2xl">
          Nap all day cat dog hate mouse eat string barf pillow no baths hate everything but
          kitty poochy. Sleep on keyboard toy mouse squeak roll over. Mesmerizing birds. Poop
          on grasses licks paws destroy couch intently sniff hand. The dog smells bad gnaw the
          corn cob.
          All of our products are made with great quality standards to bring you satisfaction
          for every item you get from our stores. Would you like to know more about what we do
          and how we do?
        </p>
        <div className="mb-10 flex justify-center items-center sm:flex-row">
          <Link to="about">
            <button type="button" className="m-1.5 py-2.5 px-5 rounded-md bg-black text-white font-semibold uppercase hover:bg-gray-700 lg:text-lg">About us</button>
          </Link>
        </div>
      </div>
      {products && (
      <div className="carouselSection md:px-8 lg:px-56">
        <h2 className="text-xl text-center leading-4 sm:text-3xl">Check our new items:</h2>
        <div id="carouselContainer" className="overflow-x-auto overflow-y-hidden m-0 w-full snap-x px-px">
          <div id="carouselItems" className="relative min-h-[340px] h-[65vh] max-h-[530px] px-3 mx-auto snap-mandatory flex flex-nowrap gap-2 sm:-m-[10px] md:gap-3">
            {products.map((product) => <Item data={product} key={product.id} />)}
          </div>
        </div>
      </div>
      )}

      <div className="h-[400px] flex flex-col items-center justify-center text-center sm:px-24 md:px-56">
        <Card className="w-full lg:w-1/2">
          <CardHeader
            variant="gradient"
            className="mt-0 mb-4 grid h-28 place-items-center bg-black"
          >
            <Typography variant="h3" color="white" className="my-0">
              Subscribe to newsletter
            </Typography>
          </CardHeader>
          <CardBody
            className="flex flex-col gap-4"
            variant="gradient"
            color="black"
          >
            <Input label="Email" size="lg" variant="static" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth disabled className="bg-black lg:text-lg">
              Subscribe
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Home;
