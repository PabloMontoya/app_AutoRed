class AddYearToProducts < ActiveRecord::Migration
  def change
    add_column :products, :year, :varchar
  end
end
