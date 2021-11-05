<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::query()
            ->where('role', 'receptionist')
            ->orderBy('name', 'asc')
            ->paginate(10);

        return Inertia::render('UserList')
            ->with('users', $users);
    }

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
