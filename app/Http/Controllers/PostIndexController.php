<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostIndexController extends Controller
{
    public function __invoke()
    {
        return inertia()->render('Posts/Index', [
            'posts' => PostResource::collection(Post::latest()->get()),
        ]);
    }
}
