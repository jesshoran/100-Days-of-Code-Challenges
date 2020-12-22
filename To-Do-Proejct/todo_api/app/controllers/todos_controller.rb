class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]

  # GET /todos
  def index
    sunday = Todo.where(day: "Sunday")
    monday = Todo.where(day: "Monday")
    tuesday = Todo.where(day: "Tuesday")
    wednesday = Todo.where(day: "Wednesday")
    thursday = Todo.where(day: "Thursday")
    friday = Todo.where(day: "Friday")
    saturday = Todo.where(day: "Saturday")
    @todos = {"sunday": sunday, "monday": monday, "thursday": thursday}
    # @todos = Todo.all


    render json: @todos
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def todo_params
      params.require(:todo).permit(:task, :day, :department)
    end
end
