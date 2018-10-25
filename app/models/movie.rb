class Movie < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  belongs_to :author

  validates :title, presence: true, uniqueness: true
  validates :author, presence: true
end
