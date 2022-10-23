import { Breadcrumbs } from '@material-tailwind/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ProductsList() {
  const location = useLocation();
  const pathLinks = location.pathname.split('/');
  return (
    <div>
      <Breadcrumbs>
        {pathLinks.map((url) => <Link to={`/${url}`} className="capitalize">{`${url}`}</Link>)}
      </Breadcrumbs>
      <div>Grid</div>
    </div>
  );
}

export default ProductsList;
