class Product < ActiveRecord::Base
	#has_one :lineasprod
	self.table_name = "productos"
end