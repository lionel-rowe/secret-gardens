json.extract! @garden, :id, :name, :description, :price, :location, :photo, :external_pic
# json.reviews @garden.comments do |comment|
#   json.extract! comment, :id, :content, :name, :photo
#   json.date comment.created_at.strftime("%m/%d/%y")
# end
