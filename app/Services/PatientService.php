<?php

namespace App\Services;

use App\Models\Patient;
use Exception;
use Illuminate\Support\Facades\DB;

class PatientService
{
    public function createPatient($patientData): Patient
    {
        $settingService = app()->make(SettingService::class);

        try {
            DB::beginTransaction();
            $patientNumber = $settingService->getNextPatientNumber();

            $patient = Patient::create([
                'patient_id' => now()->format('Ym') . $patientNumber,
                'name' => $patientData['name'],
                'phone_number' => $patientData['phone_number'],
                'year_of_birth' => now()->subYears($patientData['age'])->format('Y'),
                'weight' => $patientData['weight'],
            ]);

            $settingService->incrementLastPatientNumber();
            DB::commit();

            return $patient;
        } catch (Exception $exception) {
            logger()->error($exception->getMessage());
        }
    }

    public function updatePatient($patientData)
    {
        $patient = Patient::find($patientData['id']);

        $patient->name = $patientData['name'];
        $patient->phone_number = $patientData['phone_number'];
        $patient->year_of_birth = now()->subYears($patientData['age'])->format('Y');
        $patient->weight = $patientData['weight'];
        $patient->save();

        return $patient;
    }
}
