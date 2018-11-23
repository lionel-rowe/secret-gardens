# json.gardens do
#   json.array! @gardens do |garden|
#     json.extract! garden, :id, :name, :description #, :host_id
#   end
# end

# json.message 'API'

json.gardens do
  json.array! @gardens do |garden|
    json.extract! garden, :id, :name, :description, :photo, :external_pic #, :host_id
  end
end
