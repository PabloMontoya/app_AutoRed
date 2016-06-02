class ProductsController < ApplicationController

	def index
		@products = Product.all
    	respond_with Product.all
  	end

end
