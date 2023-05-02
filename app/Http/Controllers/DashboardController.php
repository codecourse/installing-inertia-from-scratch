<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __invoke()
    {
        // sleep(3);

        return inertia()->render('Dashboard');
    }
}
