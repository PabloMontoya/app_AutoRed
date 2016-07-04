class ProductsController < ApplicationController
  def index
    @product = Product.first

    respond_to do |format|
      format.json { render json: Product.first }
      format.html
    end

  end
end