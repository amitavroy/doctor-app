<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Patient;
use App\Services\AppointmentService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
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
        $appointments = $this->appointmentService->getAppointments(false, false);
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

    public function book(Patient $patient)
    {
        return Inertia::render('AppointmentBook')
            ->with('patient', $patient);
    }

    public function confirm(Request $request)
    {
        $postData = $request->validate([
            'patient_id' => 'required',
            'type' => Rule::in(['Follow up', 'Visit']),
            'date' => 'required',
        ]);

        $patient = Patient::findOrFail($postData['patient_id']);

        $patient->appointments()->create([
            'date' => $postData['date'],
            'type' => $postData['type'],
            'location_id' => 1,
        ]);

        return Redirect::route('home');
    }
}
