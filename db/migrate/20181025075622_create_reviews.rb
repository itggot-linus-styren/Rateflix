class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :user, foreign_key: true
      t.references :movie, foreign_key: true
      t.integer :rating
      t.string :text

      t.timestamps
    end
  end
end
