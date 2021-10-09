<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id', 'name', 'phone_number', 'location', 'year_of_birth', 'weight', 'visit_count', 'last_visit',
    ];

    protected $casts = [
        'last_visit' => 'date',
    ];

    public function getLastVisitAttribute($value)
    {
        return Carbon::parse($value)->format('Y-m-d');
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class)
            ->orderBy('id', 'desc');
    }
}
