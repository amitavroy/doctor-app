<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Services\PatientService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PatientController extends Controller
{
    private PatientService $patientService;

    /**
     * @param PatientService $patientService
     */
    public function __construct(PatientService $patientService)
    {
        $this->patientService = $patientService;
    }

    public function index()
    {
        $patients = Patient::query()
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Patients')
            ->with('patients', $patients);
    }

    public function add()
    {
        return Inertia::render('PatientsAdd');
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $data = $request->validate([
            'name' => 'required|min:3',
            'phone_number' => 'required|min:10',
            'age' => 'required|integer',
            'weight' => 'required|integer',
        ]);

        $this->patientService->createPatient($data);

        return Redirect::route('patients.list');
    }
}
