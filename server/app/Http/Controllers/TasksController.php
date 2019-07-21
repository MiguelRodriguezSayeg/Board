<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use \App\Tasks;

class TasksController extends Controller
{
    public function index(){
    	$tasks = \App\Tasks::all();
    	return response()->json([
    		'data'=> [
    			'tasks' => $tasks
    		]
    	]);
    }

    public function store(Request $request){
        $tasks = new Tasks();
 
        $tasks->title = request('title');
        $tasks->description = request('description');
        $tasks->status = 1;
 
        $tasks->save();
 
        return redirect('http://localhost:8000/api/tasks');
    }
    public function update(Tasks $task){
        $task->status = $task->status+1;
        $task->update();
        return response()->json('Task updated!');
    }
}
