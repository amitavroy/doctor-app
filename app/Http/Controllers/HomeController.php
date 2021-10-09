<?php

namespace App\Http\Controllers;

use App\Services\AppointmentService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke(AppointmentService $appointmentService)
    {
        $appointments = $appointmentService->getAppointments(true);
        return Inertia::render('Home')
            ->with('appointments', $appointments);
    }
}
