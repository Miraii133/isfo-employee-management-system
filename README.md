# ISFO Employee Management System Submodule

## Brief Background of the Submodule

This repository is responsible for the ISFO Employee Management System Module. This module is part of a bigger system, the ISFO Attendance Monitoring System. This repository only contains a partial implementation of the actual module to be used in the ISFO Attendance Monitoring System, and will serve as the baseline and reference.

## How to Setup

First, make sure you have installed NodeJS and Git by typing this in your terminal respectively:

```bash
npm --version
git --version
```

Second, run open your command terminal and run the git clone command to clone the repository:

```bash
git clone https://github.com/Miraii133/isfo-employee-management-system.git
```

Third, in your text editor (Visual Studio Code, Atom, etc.), type the following command:

```bash
npm i
```

Finally, you can now run the Next JS website by entering

```bash
npm run dev

```

## Setting up Prisma 
```bash
npx prisma migrate dev --name init
```

## For Opening and Prisma Studio

```bash
npx prisma studio
```

## For Unit Testing

```bash
npm run test
```

## Pages Explanation

We have 2 pages:
single-view-page and mutiple-view-page

mutiple-view-page has ALL the employee card upon clicking a specific card it will direct you to single-view-page showing the data of that card and the functionality to update and delete

To open the website, type [http://localhost:3000](http://localhost:3000) in your web browser.

## Libraries used

[prisma](https://www.prisma.io/)\
[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)\
[@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)\
[jest](https://jestjs.io/)\
[jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom)
