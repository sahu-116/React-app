<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function insertData(Request $request){
        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'age'=>$request->age,
            'salary'=>$request->salary
        ]);
        if($user)
        {
            return response()->json(['message'=>'Inserted Successfully']);
        }
    }
    public function fetchData(){
        $user=User::all();
        return response()->json($user);
    }
    public function fetchSingleData($id){
        $user=User::find($id);
        return response()->json($user);
    }
    public function updateData(Request $request,$id){
        $user=User::find($id)->update(['name'=>$request->name,'email'=>$request->email,'password'=>$request->password,'age'=>$request->age,'salary'=>$request->salary]);
        if($user)
            return response()->json('Updated Successfully');
    }
    public function deleteData($id){
        $user=User::find($id)->delete();
        if($user)
            return response()->json('deleted successfully');
    }
}
