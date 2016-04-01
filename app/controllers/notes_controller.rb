# class NotesController < ApplicationController
class NotesController < ApplicationController
  def index
    @notes = Note.all
  end

  def create
    note = Note.new(note_params)

    if note.save
      render json: note, status: 201
    else
      render json: note.errors, status: :unprocessable_entity
    end
  end

  def update
    note = Note.find(params[:id])
    if note.update(note_params)
      render json: note, status: 200
    else
      render json: note.errors, status: 422
    end
  end

  def destroy
    note = Note.find(params[:id])
    note.destroy
    render nothing: true, status: 204
  end

  private

  def note_params
    params.require(:note).permit(:body)
  end
end
