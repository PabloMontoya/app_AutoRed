class Autored1Controller < ApplicationController

  def index
    #Prueba: mostrar todos los productos en index
    @products1 = Product.all
    @products2 = Product.where(brand: 'Honda', model: 'Accord', year: '2007')
    
    #Prueba: mostrar la variable de precio minimo/maximo en filtros que posteriormente cambiara dependiendo los parámetros de búsqueda
    @precio_min = Product.minimum("price")
    @precio_max = Product.maximum("price")
    
    #Selects para popular los combobox en filtros
    @select_brands = Product.uniq.pluck(:brand)
    @select_models = Product.uniq.pluck(:model)
    @select_years = Product.uniq.pluck(:year)

    #Variables de clase para comparar resultados y mostrar diferente información dependiendo la búsqueda. (google maps)
    @victoria = 'Victoria'
    @barrancos = 'Barrancos'
    @sanalona = 'Sanalona'
    @lombardo = 'Lombardo'
    @calzada = 'Calzada'
    @navolato = 'Navolato'

    #Variable de clase para el text_field del layout
    @product_name = Product.name
  end

  def filtros
    @marca = params[:brand]
    concat @marca
  end


end