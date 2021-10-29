<?php

namespace App\Services;

use App\Models\Appointment;

class AppointmentService
{
    public function getAppointments($today = false, $confirmed = true)
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
            ->when($today, function ($query) {
                $query->where('date', now()->format('Y-m-d'));
            })
            ->when($confirmed === true, function ($query) {
                $query->where('visited', 1)->where('time', '!=', null);
            })
            ->when($confirmed === false, function ($query) {
                $query->where('visited', 0);
            })
            ->orderByDesc('date')
            ->orderByDesc('id')
            ->paginate(20);
    }
}
