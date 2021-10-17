<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id', 'location_id', 'date', 'time', 'visited', 'type',
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function visit()
    {
        return $this->hasOne(Visit::class);
    }
}
