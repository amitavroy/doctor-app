<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    public function add()
    {
        return Inertia::render('AddUser');
    }

    public function store(Request $request)
    {
        $postData = $request->validate([
            'name' => 'required|min:2',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
        ]);

        User::create($postData);

        return Redirect::route('home');
    }
}
