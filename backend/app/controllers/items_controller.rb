class ItemsController < ApplicationController
  def index
    @items = Item.all
    byebug

    render json: { items: @items }
  end
end
