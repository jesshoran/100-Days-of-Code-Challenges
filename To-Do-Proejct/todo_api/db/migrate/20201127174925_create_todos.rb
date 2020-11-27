class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :task
      t.string :day
      t.string :date
      t.string :department

      t.timestamps
    end
  end
end
