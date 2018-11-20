class Api::V1::BookingsController < Api::V1::BaseController
before_action :set_booking, only: [:show]

  def show
  end

  def index
    @bookings = Booking.all
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show, status: :created
    else
      render_error
    end
  end

  private

  def set_booking
    @booking = Booking.find(params[:id])
  end

  def booking_params
    params.require(:booking).permit(:start_datetime, :end_datetime, :use)
  end

  def render_error
    render json: { errors: @booking.errors.full_messages },
      status: :unprocessable_entity
  end
end
