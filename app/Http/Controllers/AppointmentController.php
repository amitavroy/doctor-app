<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Services\AppointmentService;
use Illuminate\Http\Request;
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

    public function add(Request $request)
    {
        $patient = null;

        if ($request->has('phone_number')) {
            $request->validate([
                'phone_number' => 'numeric',
            ]);

            $patient = Patient::query()
                ->where('phone_number', $request->input('phone_number'))
                ->first();
        }

        return Inertia::render('AppointmentAdd')
            ->with('phone_number', $request->input('phone_number'))
            ->with('patient', $patient);
    }
}
