<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function index()
    {
        $locations = Location::orderBy('name', 'asc')->get();

        return Inertia::render('Locations')
            ->with('locations', $locations);
    }
}
