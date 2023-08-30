<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTodosRequest;
use App\Http\Resources\TodosResource;
use App\Models\Todos;
use Illuminate\Http\Request;


class TodosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    public function index()
    {
        $todos = Todos::all();

        return TodosResource::collection($todos);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $posts = Todos::create($request->all());
        
        return new TodosResource($posts);
    }

    /**
     * Display the specified resource.
     */
    public function show(Todos $todos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todos $todos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todos $todos)
    {
        $todos->update($request->all());
        return new TodosResource($todos);
    }
    /*
     * Remove the specified resource from storage.
     */
    public function destroy(Todos $todos)
    {
        $todos->delete();
        return response("FAILED TO DELETE", 204);
    }

    public function getUserTodos(StoreTodosRequest $request) {
        $data = $request;
        $user = Todos::where('created_by', $data['created_by'])->get();
        return response()->json([
            'user' => ($user),
        ]);
    }

    public function updateTodo(StoreTodosRequest $request) {
        $data = $request;
        Todos::where('id', $data['id'])->update(['main_todo'=> $data['main_todo']]);
    }
    
    public function deleteTodo(StoreTodosRequest $request) {
       $data = $request;
       Todos::where('id', $data['id'])->delete();
   }
}
  