<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TestResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'test_name' => $this->test_name,
            'test_email' => $this->test_email,
            'password' => $this->password,
            'sb_test' => $this->sb_test,
            'test_image' => $this->test_image,
        ];
    }
}
