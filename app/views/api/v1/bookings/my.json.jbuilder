json.bookings do
    json.array! @bookings do |booking|
      json.extract! booking, :id, :start, :end, :use
    end
  end
