class Api::V1::GardensController < Api::V1::BaseController
  def index
    @gardens = Garden.all
  end
end
