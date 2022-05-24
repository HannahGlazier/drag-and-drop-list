class CreateIdeas < ActiveRecord::Migration[7.0]
  def change
    create_table :ideas do |t|
      t.string :img
      t.string :description
      t.string :notes
      t.belongs_to :room, null: false, foreign_key: true

      t.timestamps
    end
  end
end
