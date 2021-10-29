<?php

namespace App\Http\Controllers;

use App\Services\AppointmentService;
use Inertia\Inertia;

class DoctorController extends Controller
{
    public function index(AppointmentService $appointmentService)
    {
        $appointments = $appointmentService->getAppointments(true, true);
        return Inertia::render('DoctorDashboard')
            ->with('appointments', $appointments);
    }
}
