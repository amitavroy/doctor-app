<?php

namespace Database\Seeders;

use App\Models\Location;
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
    }

    private function createLocations()
    {
        Location::create([
            'name' => 'Fortis',
            'short_address' => 'Vashi, Navi Mumbai',
            'type' => 'HOSPITAL'
        ]);

        Location::create([
            'name' => 'Apollo',
            'short_address' => 'Belapur, Navi Mumbai',
            'type' => 'HOSPITAL'
        ]);

        Location::create([
            'name' => 'Matrix clinix',
            'short_address' => 'Nerul, Navi Mumbai',
            'type' => 'HOSPITAL'
        ]);
    }
}
