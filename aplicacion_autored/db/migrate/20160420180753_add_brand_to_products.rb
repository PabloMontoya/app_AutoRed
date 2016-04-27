class AddBrandToProducts < ActiveRecord::Migration
  def change
    add_column :products, :brand, :varchar
  end
end
