<?php

use App\Http\Controllers\LocationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/locations', [LocationController::class, 'index'])->name('locations');
Route::post('/locations', [LocationController::class, 'store'])->name('locations.save');
Route::get('/locations/add', [LocationController::class, 'add'])->name('locations.add');
Route::get('/locations/{location}', [LocationController::class, 'view'])->name('locations.view');
Route::post('/locations/update', [LocationController::class, 'update'])->name('locations.update');
Route::post('/locations/delete', [LocationController::class, 'destroy'])->name('locations.delete');
