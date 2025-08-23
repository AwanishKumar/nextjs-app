First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

App-router

- it follows file based roting... starts from '/app' folder and look for page.tsx inside selected route path
  eg - http://localhost:3000/about. -- will fetch data from app/about/page.tsx

Dynamic route

- we cannot create route for each child thus we create a dynamic route with '[keyName]'
  eg- http://localhost:3000/users/1 -- will fetch data from app/users/[userId]/page.tsx -- to fetch the userId check the code

Catch-all route segment

- it catches all the nested routes after a perticula one , syntax. [...slug] --- slug is a standard name , it can be anythong.
  eg
  app/shop/[...slug]/page.js ---- /shop/a
  app/shop/[...slug]/page.js ---- /shop/a/b
  app/shop/[...slug]/page.js ---- /shop/a/b/c
  Note; - in this case 'http://localhost:3000/shop' will not render app/shop/[...slug]/page.tsx

Optional Catch-all Segments will  
 -- Addition to above, 'http://localhost:3000/shop' will render app/shop/[...slug]/page.tsx -- syntax [[...slug]]

Private folder

- Any folder with '\_' will not be considered as route
  eg app/about/\_lib/page.tsx will not be accessible as 'localhost/about/\_lib' even if it has page.tsx

Group route

- to group route with same functionality, put inside (featureName) folder.
  eg
  app/(auth)/login/page.tsx ---- localhost/login
  app/(auth)/register/page.tsx ---- localhost/register
  app/(auth)/forgot-password/page.tsx ---- localhost/forgot-password
