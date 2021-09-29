<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function index()
    {
        $locations = Location::orderBy('name', 'asc')->get();

        return Inertia::render('Locations')
            ->with('locations', $locations);
    }

    public function add()
    {
        return Inertia::render('LocationsAdd');
    }

    public function store(Request $request)
    {
        Location::create($request->validate([
            'name' => 'required|max:250',
            'short_address' => 'required',
            'type' => 'required',
        ]));

        return Redirect::route('locations');
    }
}
