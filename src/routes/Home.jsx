import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function Item() {
  return (
    <Card className="relative flex-grow flex-shrink-0 basis-[calc(33.33%-4px)] snap-center border">
      <CardHeader className="relative mt-4 h-56">
        <img
          src="https://placekitten.com/300/300"
          className="block w-full"
          alt="product"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="text-xl mb-2">
          Our new arrival item
        </Typography>
        <Typography variant="paragraph">
          Some cool description about this item.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex flex-col items-center justify-between py-3">
        <Typography variant="small" color="indigo">Price: $9,99</Typography>
        <Button disabled>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

function Home() {
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
      <div className="carouselSection px-56">
        <h2 className="text-1xl text-center sm:text-3xl leading-4 ">Check our new items:</h2>
        <div id="carouselContainer" className="overflow-x-auto w-full snap-x px-px">
          <div id="carouselItems" className="container px-3 mx-auto snap-mandatory flex flex-nowrap gap-3 relative">
            {Array(10).fill('').map(() => <Item />)}
          </div>
        </div>
      </div>
      <div className="px-28">Subscribe to newsletter/Social media</div>
    </div>
  );
}

export default Home;
