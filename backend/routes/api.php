<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('insertData',[ApiController::class,'insertData']);
Route::get('fetchData',[ApiController::class,'fetchData']);
Route::get('fetchData/{id}',[ApiController::class,'fetchSingleData']);
Route::put('updateData/{id}',[ApiController::class,'updateData']);
Route::delete('deleteData/{id}',[ApiController::class,'deleteData']);