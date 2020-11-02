class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :league_name, null: false
      t.string :location, null: false

      t.timestamps
    end
  end
end
