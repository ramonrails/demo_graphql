module Types
  class MutationType < Types::BaseObject

    field :hello, String, null: false, description: 'An example field added by the generator'
    def hello
      'Hello World'
    end
  end
end
