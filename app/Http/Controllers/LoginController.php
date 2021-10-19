<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Login');
    }
}
