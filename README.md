This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [ http://localhost:3000](http://localhost:3000) with your bro ser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Built With

- [Tailwind](https://tailwindcss.com/docs) - The web framework used

## Project Structure

- COMPONENTS: the project is intended to be built around modularity and reusability, as such this folder contains higher order Components utilized across the project
- DATA: contains subsections of pages with data structures to be mapped in respective higher order components.
- PUBLIC: contains all the assets utilized on the platform categorized by page. note: assets not categorized are done so intentionally as they are common between more than page.

## Format Notes:

- some page components are wrapped with a 'max-7xl mx-auto' division, this is done so intentionally and not as a larger wrapper due to the existence of banners spanning the width of the screen, ergo the placement of this master containers is impractical.

## TODO:

- [ ] Home Page Range
- [ ] Home Page carousel Refactor
- [ ] Move Functions to API
- [ ] Buttons gradients hover
- [ ] Product Grid hover
- [ ] Build & Price Context display in review
- [ ] Build & Price Modal
- [ ] Build & Price mobile popUp Header
- [ ] Build & Price HOCs
- [ ] Blog Patterns
- [ ] FAQ import Data
- [ ] Support Page Video CTA
- [ ] Support Page Client portal Teaser
- [ ] Favicon ( take from old site)
- [ ] products landing transform HOC into carousel and refactor
- [ ] Automatic, manual , packaging pages Refactor and HOCs [ currently on foundations ]
- [ ] contact page Refactor [ currently on foundations ]
- [ ] mobile menu ATGLogo
- [ ] Footer component with proper Data
- [ ] contact Page refactor
- [ ] packaging page refactor
- [ ] products pages headline components needs an HOC

## Review Notes:

- Read me is missing project guide! As outside party or new member of the team I would have no idea how to start making edits on the project. Detail how to make changes
- tablet issues seem to across the whole website
- meta descriptions are missing on all pages. Please reach out to gleb and danielle with this link https://yoast.com/meta-descriptions/ to make great descriptions

### Home Page

- carasoual should be for the icons and not for the image. image should instant swap based on the icon present
- "Professionals of the world’s leading companies choose ATG Pharma for their production." should have higher font weight [700] 
- on mobile gap between robocap paragraph and the image is substantial and needs to reduced same thing for manual unit paragraph and picture.
- Tablet the home page looks absurb, the text is off center and too small. what makes us different boxes are too long. Proportions between images and text is way off
- BOOK A DISCOVERY CALL page does not work

### Build & Price

- Product buttons are unclickable
- button clear out on click
- page do not work

### About Us Page

- image of mike chris and devon is not centered, and not 40 as per zeplin
- "Professionals of the world’s leading companies choose ATG Pharma for their production." should have higher font weight [700]
- Profile names are missing linkedin icons
- Tablet shitting the bed as usual

### Support Page

- Siraj, Nick and Rob should be the icons
