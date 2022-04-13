<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public $table = 'products';
    public $fillable = [
        'nameProduct',
        'dateRelise',
        'price',
        'category',
        'image',
    ];
    protected $primary_key = 'id_product';
    public function Category(){
        return $this->belongsTo(Category::class, 'id_category');
    }
}
