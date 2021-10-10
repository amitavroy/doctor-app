# Doctor app

An application for Doctor and their staff to manage Appointments, Patient information and other stuff. Built with Laravel, ReactJs, InertiaJs and Typescript. And, the UI is built using Ant Design UI library.

![Dashboard](https://raw.githubusercontent.com/amitavroy/doctor-app/develop/screenshots/doctor_app.png)

## Technologies

- **Laravel** - The backend framework is Laravel
- **ReactJs & Typescript** - The front end of the application is built using React Js along with TypeScript.
- **InertiaJs** - The front end views are all ReactJs. And, InertiaJs is used to manage all views as ReactJs based components instead blade files.
- **Ant Design UI library** - To built the front end screens, Ant Design UI library and it's components are used.
- **Database** - Database used here is MySQL

## Requirements

To run the appliaction, you will need all the dependencies of Laravel. You can check [this](https://laravel.com/docs/8.x/deployment#server-requirements) link for more details.

For front end development, you will need Node installed on your app.

## Installation

1. Clone the repository
2. Install composer dependencies using `composer install`
3. Once you have installed the dependencies, you need to create the .env file. You can copy the example file using this command `cp .env.example .env`
4. After you have created you .env file you need to generate the application key by running this command `php artisan key:generate`
5. Create a new mysql database and add the details of your MySQL server in the .env file.
6. Once the database connection is ready, you need to run the migrations using the following command `php artisan migrate --seed`
