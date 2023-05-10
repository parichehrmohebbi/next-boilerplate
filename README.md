## About this repository

- This is a Next.Js boilerplate configured to support: Typescript, TailwindCss, Storybook, Cypress, Jest, React Testing Library, SWR
- It helps you start your Next.JS project faster and more easily

## How to get it work

- run 'npm install' command to install all the dependencies
- run 'npm run dev' or 'yarn dev' to start the development environment on 'localhost:3000'
- run 'npm test' to start unit tests run in watch mode as default
- run 'npm run test:coverage' to see the coverage report of your application
- run 'npm run cypress:run' to run end-to-end testing
- run 'npm run cypress:open' to open the cypress dashboard for observing your end-to-end test result
- run 'npm run storybook' to lunch storaybook dashboard of your stories
- run 'npm run serve-json' to host json server mock APIs on 'localhost:4000' id you need some mock data , you can define the data structure in db.json file placed in jsonServer folder in the root directory

## More to know

- you can update your application metadata in src>core>siteConfig>headConfing
- you can place your documents in the folder with the same name preferably in .md format
- you can define a header and fotter for the app in the related components or simply remove it from layout, nested layout woulbe be added in next updates

## References

- TailwindCSS documentation: https://tailwindcss.com/
- Cypress documentation: https://www.cypress.io/
- SWR documentation: https://swr.vercel.app/
- Storybook documentation: https://storybook.js.org/
- Hosting more fonts: https://gwfh.mranftl.com/fonts
- JSON Server documentation: https://www.npmjs.com/package/json-server
