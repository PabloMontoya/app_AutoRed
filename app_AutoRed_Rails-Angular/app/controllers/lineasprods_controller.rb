class LineasprodsController < ApplicationController
  respond_to :json

  def index
    @lineas = Lineasprod.select("linea_producto, nombre").first(100)
    respond_with(@lineas)
  end

end