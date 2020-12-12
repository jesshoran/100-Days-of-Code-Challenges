class RemoveDayFromTodos < ActiveRecord::Migration[6.0]
  def change
    remove_column :todos, :day, :string
  end
end
