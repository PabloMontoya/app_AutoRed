class ProductsController < ApplicationController
  respond_to :json

  def index
    @product = Product.select("cod_prod, descripcion, linea_producto").first(100)
    respond_with(@product)
  end

end