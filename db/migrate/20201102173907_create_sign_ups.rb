class CreateSignUps < ActiveRecord::Migration[5.2]
  def change
    create_table :sign_ups do |t|
      t.belongs_to :league, null: false
      t.belongs_to :player, null: false

      t.timestamps
    end
  end
end
