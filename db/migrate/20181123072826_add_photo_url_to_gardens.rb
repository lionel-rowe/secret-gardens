class AddPhotoUrlToGardens < ActiveRecord::Migration[5.2]
  def change
    add_column :gardens, :external_pic, :string
  end
end
