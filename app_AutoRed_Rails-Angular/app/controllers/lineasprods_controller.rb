class LineasprodsController < ApplicationController
  respond_to :json

  def index
    @lineas = Lineasprod.select("linea_producto, nombre").first
    respond_with(@lineas)
  end

  def show
  end

end