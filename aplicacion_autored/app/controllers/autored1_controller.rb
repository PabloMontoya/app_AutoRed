class Autored1Controller < ApplicationController

  def index
  	@products = Product.all
    
    @product_name = Product.name
  	@precio_min = Product.minimum("price")
  	@precio_max = Product.maximum("price")
    
    @select_names = Product.uniq.pluck(:name)
  	@select_brands = Product.uniq.pluck(:brand)
  	@select_models = Product.uniq.pluck(:model)
  	@select_years = Product.uniq.pluck(:year)

  	@victoria = 'Victoria'
  	@barrancos = 'Barrancos'
  	@sanalona = 'Sanalona'
  	@lombardo = 'Lombardo'
  	@calzada = 'Calzada'
  	@navolato = 'Navolato'
  end

end