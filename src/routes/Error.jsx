import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col h-100 items-center justify-center py-10 gap-8">
        <h1 className="text-6xl">Oops!</h1>
        <h2 className="text-9xl bg-black text-white p-6 rounded-[50px]">{error.status}</h2>
        <p className="text-5xl">{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  }
  return <div>Oops</div>;
}

export default Error;
