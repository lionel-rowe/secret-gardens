json.gardens do
  json.array! @gardens do |garden|
    json.extract! garden, :id, :name, :description, :host
  end
end

json.message 'API'
