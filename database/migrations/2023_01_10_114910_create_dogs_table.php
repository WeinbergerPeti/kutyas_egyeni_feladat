<?php

use App\Models\Dog;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dogs', function (Blueprint $table) {
            $table->id("kutya_id");
            $table->string("név");
            $table->integer("kor");
            $table->integer("súly");
            $table->integer("méret");
            $table->timestamps();
        });

        Dog::create(["név"=>"Buldog", "kor" => 3, "súly" =>10, "méret" => 33]);
        Dog::create(["név"=>"Beagle", "kor" => 10, "súly" =>23, "méret" => 40]);
        Dog::create(["név"=>"Németjuhász", "kor" => 1, "súly" =>6, "méret" => 23]);
        Dog::create(["név"=>"Dalmata", "kor" => 8, "súly" =>19, "méret" => 24]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dogs');
    }
};
