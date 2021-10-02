<?php

namespace Database\Factories;

use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\Factory;

class PatientFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Patient::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'patient_id' => now()->format('Ym') . uniqid(rand(1, 99), true),
            'name' => $this->faker->name(),
            'phone_number' => $this->faker->phoneNumber(),
            'location' => $this->faker->city(),
            'year_of_birth' => $this->faker->year(),
            'weight' => rand(40, 100),
            'visit_count' => rand(1, 100),
            'last_visit' => now(),
        ];
    }
}
