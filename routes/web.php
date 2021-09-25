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
