<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public $table = 'categories';
    public $fillable = [
        'name',
    ];
    protected $primary_key = 'id_category';
    public function Product() {
        return $this->hasMany(Product::class, 'category');
    }
}
