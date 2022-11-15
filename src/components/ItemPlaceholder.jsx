import {
  Card, CardBody, CardFooter, CardHeader,
} from '@material-tailwind/react';
import React from 'react';

function ItemPlaceholder() {
  return (
    <Card className="grid grid-cols-3 grid-rows-5 h-44 z-[-1] overflow-hidden border border-solid border-gray-300 space-y-3 md:h-80 md:flex md:flex-col">
      <CardHeader className="h-full row-start-1 row-end-[-1] m-0 rounded-none shadow-none animate-pulse">
        <div className="bg-gray-300 h-64" />
      </CardHeader>
      <CardBody className="col-start-2 col-end-[-1] row-start-1 row-end-[-2] flex-1 space-y-3 py-1 animate-pulse">
        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded" />
        <div className="space-y-3 flex flex-col items-center">
          <div className="h-2 w-2/3 bg-gray-300 rounded" />
          <div className="h-2 w-1/3 bg-gray-300 rounded" />
        </div>
      </CardBody>
      <CardFooter className="my-0 col-start-2 col-end-[-1] row-start-[-2] row-end-[-1] grid grid-cols-2 gap-20 py-0 px-5 animate-pulse">
        <div className="h-3 bg-gray-300 rounded col-span-1" />
        <div className="h-3 bg-gray-300 rounded col-span-1" />
      </CardFooter>
    </Card>
  );
}

export default ItemPlaceholder;
