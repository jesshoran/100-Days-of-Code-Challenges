class RenameDateToDay < ActiveRecord::Migration[6.0]
  def change
    rename_column :todos, :date, :day
  end
end
