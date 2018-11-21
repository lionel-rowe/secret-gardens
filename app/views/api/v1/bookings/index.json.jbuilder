json.bookings do
  json.array! @bookings do |booking|
    json.extract! booking, :id, :start, :end, :use, :garden, :guest, :host
  end
end

json.message 'API'
