class AddDayToTodos < ActiveRecord::Migration[6.0]
  def change
    add_column :todos, :day, :string
  end
end
