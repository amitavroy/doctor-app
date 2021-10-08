<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Services\AppointmentService;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    private $appointmentService;

    public function __construct(AppointmentService $appointmentService)
    {
        $this->appointmentService = $appointmentService;
    }

    public function index()
    {
        $appointments = $this->appointmentService->getAppointments();
        return Inertia::render('Appointments')
            ->with('appointments', $appointments);
    }

    public function view(Appointment $appointment)
    {
        return Inertia::render('AppointmentView')
            ->with('appointment', $appointment);
    }
}