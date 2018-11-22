class GardensController < ApplicationController
  skip_before_action :authenticate_user!

  def index
    @garden = Garden.last
  end

  def new
    @garden = Garden.new
  end

  def create
    @garden = Garden.new(garden_params)
    if @garden.save
      redirect_to gardens_path
    else
      render :new
    end
  end

  private

  def garden_params
    params.require(:garden).permit(:name, :description, :location, :price, :photo)
  end
end
