<?php

namespace App\Services;

use App\Models\Setting;

class SettingService
{
    private $nextPatientIdKey = 'next_patient_id';

    public function getNextPatientNumber()
    {
        return Setting::where(['key' => $this->nextPatientIdKey])
            ->pluck('value')
            ->first();
    }

    public function incrementLastPatientNumber()
    {
        $number = $this->getNextPatientNumber();

        return Setting::where(['key' => $this->nextPatientIdKey])
            ->update(['value' => $number + 1]);
    }
}
