<?php

namespace Tests\Feature;

use App\Models\Location;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\Assert;
use Tests\TestCase;

class LocationListingTest extends TestCase
{
    use RefreshDatabase;
    /** @test */
    public function it_shows_locations()
    {
        Location::factory(4)->create();
        $this->get(route('locations'))->assertInertia(function (Assert $page) {
            $page->has('locations', 4);
        });
    }
}
