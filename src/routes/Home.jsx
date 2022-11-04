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
import { Link, useLoaderData } from 'react-router-dom';
import { fetchNewProducts } from '../fake-store';
import Item from '../components/Item';

const newProductsQuery = () => ({
  queryKey: ['home'],
  queryFn: async () => fetchNewProducts(),
});

export const loader = (queryClient) => async () => {
  const query = newProductsQuery();
  return (
    queryClient.getQueryData(query.queryKey)
    ?? (queryClient.fetchQuery(query))
  );
};

function Home() {
  const products = useLoaderData();

  return (
    <div className="scrollbar">
      <div className="h-[90vh] w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600">
          <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <h1 className="py-10 text-3xl sm:text-5xl font-light tracking-wide leading-tight">
              Premium items
              <br />
              Best prices.
              <br />
              Warranty satisfaction.
            </h1>
            <p className="text-lg font-semibold text-gray-400 tracking-wide">Get convinced yourself!</p>
            <div className="mt-10 flex justify-center sm:flex-row items-center">
              <Link to="shop">
                <button type="button" className="m-1.5 py-2.5 px-5 rounded-md bg-orange-300 text-white font-semibold uppercase hover:bg-orange-500">Check our shop now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex flex-col justify-start items-center overflow-hidden">
          <img src="https://placekitten.com/g/800/600" alt="hero" className="w-2/3 lg:w-full" />
        </div>
      </div>
      <div className="mt-8 px-60">
        <h2 className="text-1xl text-center sm:text-3xl leading-4 ">We make the best for you.</h2>
        <p className="text-lg text-center">
          Nap all day cat dog hate mouse eat string barf pillow no baths hate everything but
          kitty poochy. Sleep on keyboard toy mouse squeak roll over. Mesmerizing birds. Poop
          on grasses licks paws destroy couch intently sniff hand. The dog smells bad gnaw the
          corn cob.
          All of our products are made with great quality standards to bring you satisfaction
          for every item you get from our stores. Would you like to know more about what we do
          and how we do?
        </p>
        <div className="mb-10 flex justify-center sm:flex-row items-center">
          <Link to="about">
            <button type="button" className="m-1.5 py-2.5 px-5 rounded-md bg-black text-white font-semibold uppercase hover:bg-gray-700">About us</button>
          </Link>
        </div>
      </div>
      {products && (
      <div className="carouselSection px-56">
        <h2 className="text-1xl text-center sm:text-3xl leading-4 ">Check our new items:</h2>
        <div id="carouselContainer" className="overflow-x-auto w-full snap-x px-px">
          <div id="carouselItems" className="container h-[550px] px-3 mx-auto snap-mandatory flex flex-nowrap gap-3 relative">
            {products.map((product) => <Item data={product} key={product.id} />)}
          </div>
        </div>
      </div>
      )}

      <div className="px-56 h-[400px] flex flex-col items-center justify-center">
        <Card className="w-5/12">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
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
            <Button variant="gradient" fullWidth disabled>
              Subscribe
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Home;
