class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.datetime :start
      t.datetime :end
      t.text :use
      t.references :user, foreign_key: true
      t.references :garden, foreign_key: true

      t.timestamps
    end
  end
end
