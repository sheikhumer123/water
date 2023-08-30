<?php

use App\Http\Controllers\TestController;
use App\Http\Controllers\TodosController ;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::post('getusertodos', [TodosController::class, 'getUserTodos']);
Route::post('updatetodo', [TodosController::class, 'updateTodo']);
Route::post('deletetodo', [TodosController::class, 'deleteTodo']);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'user']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('test',TestController::class)->except([
    'create', 'show', 'edit'
]);

Route::apiResource('todos',TodosController::class)->except([
    'show', 'create','edit'
]);

