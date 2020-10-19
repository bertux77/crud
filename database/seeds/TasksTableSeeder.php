<?php

use Illuminate\Database\Seeder;
use App\Task;
use Carbon\Carbon;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            'keep' => 'Nacionalismo',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Diseño de logo',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Buscar Patrocinador',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Encontrar colores',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Terminar de diseñar el logo',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
