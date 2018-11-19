class CreateGardens < ActiveRecord::Migration[5.2]
  def change
    create_table :gardens do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.string :photo
      t.string :location
      t.references :host, foreign_key: {to_table: :users}

      t.timestamps
    end
  end
end
