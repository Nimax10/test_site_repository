<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductContorller extends Controller
{
    public function filter(Request $req) {
        $products = null;
        if ($req->filteredBy !== null) {
            if ($req->sortBy !== null) {
                if ($req->sortBy === 'dateRelise') {
                    $products = Product::Where('category', $req->filteredBy)->orderBy('dateRelise')->get();
                }
                if ($req->sortBy === 'name') {
                    $products = Product::Where('category', $req->filteredBy)->orderBy('nameProduct')->get();
                }
                if ($req->sortBy === 'price') {
                    $products = Product::Where('category', $req->filteredBy)->orderBy('price')->get();
                }
            } else {
                $products = Product::Where('category', $req->filteredBy)->get();
            }
            return $products;
        } else {
            if ($req->sortBy !== null) {
                $products = Product::all();
                if ($req->sortBy === 'dateRelise') {
                    $products = Product::all()->sortBy('dateRelise');
                }
                if ($req->sortBy === 'name') {
                    $products = Product::all()->sortBy('nameProduct');
                }
                if ($req->sortBy === 'price') {
                    $products = Product::all()->sortBy('price');
                }
            }
        }
        return;
    }
    public function getProducts() {
        $products = Product::get();
        return $products;
    }
    public function getCategories() {
        $categories = Category::get();
        return $categories;
    }
}
