<?php

namespace Database\Seeders;

use App\Models\Location;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Seeder;

class DefaultData extends Seeder
{
    private $user;

    public function run()
    {
        $this->user = User::create([
            'name' => 'Amitav Roy',
            'email' => 'reachme@amitavroy.com',
            'password' => bcrypt('password'),
            'email_verified_at' => now(),
        ]);

        $this->createLocations();
        $this->createPatients();

        // Patient::factory(50)->create();
    }

    private function createLocations()
    {
        Location::create([
            'name' => 'Fortis',
            'short_address' => 'Vashi, Navi Mumbai',
            'type' => 'HOSPITAL',
        ]);

        Location::create([
            'name' => 'Apollo',
            'short_address' => 'Belapur, Navi Mumbai',
            'type' => 'HOSPITAL',
        ]);

        Location::create([
            'name' => 'Matrix clinix',
            'short_address' => 'Nerul, Navi Mumbai',
            'type' => 'HOSPITAL',
        ]);
    }

    public function createPatients()
    {
        Patient::create([
            'patient_id' => '20211001',
            'name' => 'Murali Manohar',
            'phone_number' => '6852457891',
            'location' => 'Navi Mumbai',
            'year_of_birth' => 1985,
            'weight' => 85,
            'visit_count' => 5,
        ]);

        Patient::create([
            'patient_id' => '20211002',
            'name' => 'Manish Sawant',
            'phone_number' => '6852466891',
            'location' => 'Mumbai',
            'year_of_birth' => 1975,
            'weight' => 70,
            'visit_count' => 2,
        ]);

        Patient::create([
            'patient_id' => '20211003',
            'name' => 'Dinesh Kumar',
            'phone_number' => '4552466891',
            'location' => 'Vashi',
            'year_of_birth' => 1995,
            'weight' => 55,
            'visit_count' => 1,
        ]);
    }
}
