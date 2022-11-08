import {
  Card, CardBody, CardFooter, CardHeader,
} from '@material-tailwind/react';
import React from 'react';

function ItemPlaceholder() {
  return (
    <Card className="z-[-1] overflow-hidden border border-solid border-gray-300 space-y-3">
      <CardHeader className="m-0 rounded-none shadow-none animate-pulse">
        <div className="bg-gray-300 h-64" />
      </CardHeader>
      <CardBody className="flex-1 space-y-3 py-1 animate-pulse">
        <div className="h-4 bg-gray-300 rounded" />
        <div className="h-4 bg-gray-300 rounded" />
        <div className="space-y-3 flex flex-col items-center">
          <div className="h-2 w-2/3 bg-gray-300 rounded" />
          <div className="h-2 w-1/3 bg-gray-300 rounded" />
        </div>
      </CardBody>
      <CardFooter className="grid grid-cols-2 gap-20 py-4 px-5 animate-pulse">
        <div className="h-3 bg-gray-300 rounded col-span-1" />
        <div className="h-3 bg-gray-300 rounded col-span-1" />
      </CardFooter>
    </Card>
  );
}

export default ItemPlaceholder;
