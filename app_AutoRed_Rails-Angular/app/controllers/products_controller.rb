class ProductsController < ApplicationController

	def index
    	respond_with Product.all
  	end

end
