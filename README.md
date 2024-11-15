# Admin Dashboard using Next.js, TailwindCSS, Prisma, Planet Scale and MySQL

### Description

Welcome to our cutting-edge Admin Dashboard Application, the ultimate tool to empower administrators to manage their systems with ease and efficiency. Whether you're overseeing a business, website, or any digital platform, our intuitive and feature-rich dashboard is designed to streamline your management tasks and deliver actionable insights at your fingertips.

### Key Features
 - Resonsive design using TailwindCSS and components from Shadcn UI
 - Clerk authentication
 - SignIn and SignOut functionalites using Clerk
 - All-in-One Solution - CMS, Admin, and API
 - Create and Manage Stores
 - Category Management
 - Product Management
 - Create, update and delete filters such as "Color" and "Size" whicch is matched to products
 - Server error handeling using react-hot-toast
 - Keep track of the sales in the store using order section
 - Switch among light, night or system mode for the application
 - Graphical Sales Representation
 - Image Upload with Cloudinary Integration

# Project preview

### Home Page
![Screenshot 2023-07-16 122749](https://github.com/Aakash-Sleur/admin-dashboard/assets/112175038/42f20660-3063-494c-b582-56e0f78eb74e)

### Order Page
![Screenshot 2023-07-16 122811](https://github.com/Aakash-Sleur/admin-dashboard/assets/112175038/338b92ad-3444-407c-beab-02d24d401641)

### Night Mode, Light Mode and System default
![Screenshot 2023-07-16 122825](https://github.com/Aakash-Sleur/admin-dashboard/assets/112175038/08752aa4-dd06-435d-8949-a40d82d08d82)

### Settings Page
![Screenshot 2023-07-16 122900](https://github.com/Aakash-Sleur/admin-dashboard/assets/112175038/7bb1c8ca-5f32-4fc2-9c56-6656cf08b3b2)

### Create/Edit products, categories and etc
![Screenshot 2023-07-16 123126](https://github.com/Aakash-Sleur/admin-dashboard/assets/112175038/a3a60a9b-261d-4776-a2f0-f15eeaa1f4cf)


## Live Application
https://admin-dashboard-phi-one.vercel.app

## Prerequisites

NODE 14.x

### Clone Repoistory
```shell
https://github.com/Aakash-Sleur/admin-dashboard.git
```

### Install
```shell
npm install
```

### Set Environment up
```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''

# Cloudinary

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""

# Stripe

STRIPE_API_KEY=
FRONTEND_STORE_URL=
STRIPE_WEBHOOK_SECRET=
```

## Start the Application
```
npm run dev
```












