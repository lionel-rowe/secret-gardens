class AddPhotoUrlToGardens < ActiveRecord::Migration[5.2]
  def change
    add_column :gardens, :photo_url, :string
  end
end
