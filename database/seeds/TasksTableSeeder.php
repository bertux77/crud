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

        DB::table('tasks')->insert([
            'keep' => 'Llamar al gestor',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Comprar pan',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Darse de alta en el servidor',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Encontrar un SysAdmin',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Seguir actualizandose en el curso',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('tasks')->insert([
            'keep' => 'Aprender CSS3',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Dividir la App en sistemas',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Dividir los sistemas en problemas mas simples',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Buscar un diseñador',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
        DB::table('tasks')->insert([
            'keep' => 'Encontrar una forma usable de la app',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

    }
}
