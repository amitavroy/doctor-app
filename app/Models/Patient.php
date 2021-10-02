<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $fillable = [
        'patient_id', 'name', 'phone_number', 'location', 'year_of_birth', 'weight', 'visit_count', 'last_visit'
    ];

    protected $casts = [
        'last_visit' => 'timestamp',
    ];
}
