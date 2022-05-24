class Idea < ApplicationRecord
  belongs_to :room
  # belongs_to :user This maybe needs to be set up differently 
end
