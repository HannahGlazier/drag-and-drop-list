class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :square_feet, :description
  has_one :user
end
