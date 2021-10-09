<?php

namespace App\Services;

use App\Models\Appointment;

class AppointmentService
{
    public function getAppointments()
    {
        return Appointment::query()
            ->with(['patient' => function ($query) {
                $query->select([
                    'id',
                    'name',
                    'weight',
                    'phone_number',
                    'patient_id',
                ]);
            }], ['location' => function ($query) {
                $query->select([
                    'location.name',
                ]);
            }])
            ->orderByDesc('date')
            ->orderByDesc('id')
            ->paginate(20);
    }
}
