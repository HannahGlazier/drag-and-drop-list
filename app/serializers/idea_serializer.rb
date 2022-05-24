class IdeaSerializer < ActiveModel::Serializer
  attributes :id, :img, :description, :notes
  has_one :room
end
