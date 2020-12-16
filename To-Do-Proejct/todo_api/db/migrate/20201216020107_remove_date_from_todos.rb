class RemoveDateFromTodos < ActiveRecord::Migration[6.0]
  def change
    remove_column :todos, :date, :string
  end
end
