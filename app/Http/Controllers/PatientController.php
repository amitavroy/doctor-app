<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Services\PatientService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PatientController extends Controller
{
    private $rules = [];

    /**
     * @param PatientService $patientService
     */
    public function __construct(PatientService $patientService)
    {
        $this->patientService = $patientService;
        $this->rules = [
            'name' => 'required|min:3',
            'phone_number' => 'required|min:10',
            'age' => 'required|integer',
            'weight' => 'required|integer',
        ];
    }

    public function index()
    {
        $patients = Patient::query()
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Patients')
            ->with('patients', $patients);
    }

    public function view(Patient $patient)
    {
        $patient->load(['appointments', 'appointments.visit']);
        return Inertia::render('PatientView')
            ->with('patient', $patient);
    }

    public function add()
    {
        return Inertia::render('PatientsAdd');
    }

    public function store(Request $request): \Illuminate\Http\RedirectResponse
    {
        $data = $request->validate($this->rules);

        $patient = $this->patientService->createPatient($data);

        if ($request->has('destination') == 'book') {
            return Redirect::route('appointments.book', ['patient' => $patient->id]);
        }

        return Redirect::route('patients.list');
    }

    public function destroy(Request $request)
    {
        $postData = $request->validate([
            'id' => 'required',
        ]);

        Patient::findOrFail($postData['id'])->delete();
        return Redirect::route('patients.list');
    }

    public function update(Request $request)
    {
        $rules = $this->rules;
        $rules['id'] = 'required|exists:patients,id';
        $data = $request->validate($rules);

        $this->patientService->updatePatient($data);
        return Redirect::route('patients.list');
    }
}
