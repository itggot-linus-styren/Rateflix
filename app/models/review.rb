class Review < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates :rating, numericality: { only_integer: true, greater_than: 0, less_than_or_equal_to: 10 }
  validates :text, presence: true
end
