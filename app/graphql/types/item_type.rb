module Types
  class ItemType < Types::BaseObject
    field :id,          ID,                              null: false
    field :title,       String,                          null: false
    field :user_id,     Integer,                         null: false
    field :created_at,  GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at,  GraphQL::Types::ISO8601DateTime, null: false
    field :user,        Types::UserType,                 null: false

    field :description, String,                          null: true
    field :image_url,   String,                          null: true
  end
end
