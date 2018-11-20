class Api::V1::GardensController < Api::V1::BaseController
  skip_before_action :verify_authenticity_token
  before_action :set_garden, only: [ :show, :update, :destroy]

  def index
    @gardens = policy_scope(Garden)
  end

  def show
  end

  def update
    if @garden.update(garden_params)
      render :show
    else
      render_error
    end
  end

  def create
    @garden = current_user.gardens.new(garden_params)
    authorize @garden
    if @garden.save
      render :show, status: :created
    else
      render_error
    end
  end

  def destroy
    @garden.destroy
    head :no_content
    # No need to create a `destroy.json.jbuilder` view
  end

  private

  def set_garden
    @garden = Garden.find(params[:id])
    authorize @garden
  end

  def garden_params
    params.require(:garden).permit(:name, :description, :price, :photo, :location)
  end

  def render_error
    render json: { errors: @garden.errors.full_messages },
      status: :unprocessable_entity
  end
end
