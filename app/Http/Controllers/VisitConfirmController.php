<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Visit;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class VisitConfirmController extends Controller
{
    public function store(Request $request)
    {
        $postData = $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'id' => 'required',
        ]);

        try {
            DB::beginTransaction();
            $appointment = Appointment::findOrFail($postData['id']);
            $appointment->time = now()->format('h:m');
            $appointment->visited = 1;
            $appointment->save();

            Visit::create([
                'patient_id' => $postData['patient_id'],
                'appointment_id' => $appointment->id,
                'problems' => '',
                'prescription' => '',
            ]);
            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();
            logger()->error($e->getMessage());
        }

        return Redirect::route('home');
    }
}
