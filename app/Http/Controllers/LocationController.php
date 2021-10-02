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

    public function view(Location $location)
    {
        return Inertia::render('LocationView')
            ->with('location', $location);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|min:3|max:255',
            'short_address' => 'required|min:3|max:255',
            'type' => 'required',
            'id' => 'required|exists:locations,id'
        ]);

        $location = Location::find($data['id']);
        $location->name = $data['name'];
        $location->short_address = $data['short_address'];
        $location->type = $data['type'];
        $location->save();

        return Redirect::route('locations');
    }

    public function destroy(Request $request)
    {
        $postData = $request->validate([
            'id' => 'required',
        ]);

        Location::findOrFail($postData['id'])->delete();
        return Redirect::route('locations');
    }
}
