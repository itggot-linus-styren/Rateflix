class Movie < ApplicationRecord
  belongs_to :author
  has_and_belongs_to_many :users

  validates :title, presence: true, uniqueness: true
  validates :author, presence: true
end
