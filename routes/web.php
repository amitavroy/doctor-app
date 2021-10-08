<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\PatientController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

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
Route::get('appointments/{appointment}', [AppointmentController::class, 'view'])->name('appointments.view');
