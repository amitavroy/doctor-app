<?php

namespace App\Http\Controllers;

use App\Services\AppointmentService;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke(AppointmentService $appointmentService)
    {
        $appointments = $appointmentService->getAppointments(true, false);

        return Inertia::render('Home')
            ->with('appointments', $appointments);
    }
}
