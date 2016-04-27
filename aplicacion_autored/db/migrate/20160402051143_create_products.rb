class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      
      t.string :name
      t.string :location

      t.timestamps null: false
    end
  end
end
