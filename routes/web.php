<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VisitConfirmController;
use App\Http\Controllers\VisitController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'login'])->name('do.login');

Route::group(['middleware' => ['auth']], function () {
    Route::get('/', HomeController::class)->name('home');

    Route::get('locations', [LocationController::class, 'index'])->name('locations');
    Route::post('locations', [LocationController::class, 'store'])->name('locations.save');
    Route::get('locations/add', [LocationController::class, 'add'])->name('locations.add');
    Route::get('locations/{location}', [LocationController::class, 'view'])->name('locations.view');
    Route::post('locations/update', [LocationController::class, 'update'])->name('locations.update');
    Route::post('locations/delete', [LocationController::class, 'destroy'])->name('locations.delete');

    Route::get('patients', [PatientController::class, 'index'])->name('patients.list');
    Route::post('patients', [PatientController::class, 'store'])->name('patients.save');
    Route::get('patients/add', [PatientController::class, 'add'])->name('patients.add');
    Route::get('patients/{patient}', [PatientController::class, 'view'])->name('patients.view');
    Route::post('patients/update', [PatientController::class, 'update'])->name('patients.update');
    Route::post('patients/delete', [PatientController::class, 'destroy'])->name('patients.delete');

    Route::get('appointments', [AppointmentController::class, 'index'])->name('appointments.list');
    Route::get('appointments/add', [AppointmentController::class, 'add'])->name('appointments.add');
    Route::get('appointments/book/{patient}', [AppointmentController::class, 'book'])->name('appointments.book');
    Route::post('appointments/confirm', [AppointmentController::class, 'confirm'])->name('appointments.confirm');
    Route::get('appointments/{appointment}', [AppointmentController::class, 'view'])->name('appointments.view');

    Route::post('visit/confirm', [VisitConfirmController::class, 'store'])->name('visit.confirm');

    Route::get('doctor/dashboard', [DoctorController::class, 'index'])->name('doctor.dashboard');
    Route::get('doctor/visit/{appointment}', [VisitController::class, 'view'])->name('visit.details');
    Route::post('doctor/visit/update', [VisitController::class, 'update'])->name('visit.update');

    Route::get('users', [UserController::class, 'index'])->name('user.list');
    Route::get('user/add', [UserController::class, 'add'])->name('user.add');
    Route::post('user/save', [UserController::class, 'store'])->name('user.save');
});
