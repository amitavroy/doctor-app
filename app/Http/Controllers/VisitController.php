<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Visit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VisitController extends Controller
{
    public function view(Appointment $appointment)
    {
        $appointment->load(['patient', 'visit']);
        $historical = Appointment::query()
            ->with(['visit', 'patient'])
            ->where('patient_id', $appointment->patient->id)
            ->where('id', '!=', $appointment->id)
            ->orderByDesc('id')
            ->get();

        return Inertia::render('PatientCheckup')
            ->with('historicalAppointments', $historical)
            ->with('appointment', $appointment);
    }

    public function update(Request $request)
    {
        $postData = $request->validate([
            'problems' => 'required',
            'prescription' => 'required',
            'visit_id' => 'required',
        ]);

        $visit = Visit::findOrFail($postData['visit_id']);
        $visit->problems = $postData['problems'];
        $visit->prescription = $postData['prescription'];
        $visit->is_complete = 1;
        $visit->save();

        return redirect()->route('doctor.dashboard');
    }
}
