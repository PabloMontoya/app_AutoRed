class ProductsController < ApplicationController
  respond_to :json

  def index
    @products = Product.select("productos.cod_prod, productos.descripcion, lp.nombre as linea, se.nombre as sistema, me.nombre as marca, mode.nombre as modelo, ae.año_equipos as anhio")
					   .joins("INNER JOIN lineas_productos  lp   ON lp.linea_producto  = productos.linea_producto
							   INNER JOIN sistemas_equipos  se   ON se.sistema_equipos = productos.sistema_equipos 
							   INNER JOIN productos_equipos pe   ON pe.cod_prod        = productos.cod_prod 
							   INNER JOIN marcas_equipos    me   ON me.marca_equipos   = pe.marca_equipos
							   INNER JOIN modelos_equipos   mode ON pe.marca_equipos   = mode.marca_equipos AND mode.modelo_equipos = pe.modelo_equipos
							   INNER JOIN años_equipos      ae   ON pe.año_equipos     = ae.año_equipos")
					   .first(2000)

    respond_with(@products)
  end
  
end

#productos.cod_prod = '(params[:codigo])' AND 
#productos.cod_prod = '10-10778'

#   @products = Product.select("productos.cod_prod, lp.nombre as linea, se.nombre as sistema, me.nombre as marca, mode.nombre as modelo, ae.año_equipos as anhio")
#					   .where("productos.cod_prod = '(params[:codigo])' AND me.nombre = 'Honda' AND mode.nombre LIKE '%Accord%' AND pe.año_equipos = '2007'")
#					   .joins("INNER JOIN lineas_productos  lp   ON lp.linea_producto  = productos.linea_producto
#							   INNER JOIN sistemas_equipos  se   ON se.sistema_equipos = productos.sistema_equipos 
#							   INNER JOIN productos_equipos pe   ON pe.cod_prod        = productos.cod_prod 
#							   INNER JOIN marcas_equipos    me   ON me.marca_equipos   = pe.marca_equipos   
#							   INNER JOIN modelos_equipos   mode ON pe.marca_equipos   = mode.marca_equipos AND mode.modelo_equipos = pe.modelo_equipos
#							   INNER JOIN años_equipos      ae   ON pe.año_equipos     = ae.año_equipos")
#					   .first(250)
