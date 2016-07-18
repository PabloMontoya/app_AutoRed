class BrandsController < ApplicationController
  respond_to :json

  def index
	@marcas = Brand.select("me.nombre as marca")
	                 .joins("INNER JOIN lineas_productos  lp   ON lp.linea_producto  = productos.linea_producto
							   INNER JOIN sistemas_equipos  se   ON se.sistema_equipos = productos.sistema_equipos 
							   INNER JOIN productos_equipos pe   ON pe.cod_prod        = productos.cod_prod 
							   INNER JOIN marcas_equipos    me   ON me.marca_equipos   = pe.marca_equipos").distinct

    respond_with(@marcas)
  end
  
end