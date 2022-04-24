import React from 'react';

import { INDEX_PAGE_ROUTE } from 'routes/RedirectRoutes';
// PAGES
import { IndexPage } from 'pages';

export const PAGE_ROUTES = [
  {
    exact: true,
    isPrivate: true,
    path: INDEX_PAGE_ROUTE,
    element: <IndexPage />
  }
];
