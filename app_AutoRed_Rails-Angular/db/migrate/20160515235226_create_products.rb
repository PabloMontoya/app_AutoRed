class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :brand
      t.string :model
      t.string :year
      t.float :price

      t.timestamps null: false
    end
  end
end
