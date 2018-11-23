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

  def my
    @bookings = @user.bookings
  end

  def received
    @bookings = Booking.joins('INNER JOIN gardens ON bookings.garden_id=gardens.id').where('gardens.user_id=?', @user.id)
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
